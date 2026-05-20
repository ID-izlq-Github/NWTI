import type { DimId, Level, LevelTuple, TestResult, DimResult } from '../types';
import { DIM_NAMES, LEVEL_DESCRIPTIONS } from '../data/dimensions';
import { findResult } from '../data/results';

// ================================================
// 分数 → 等级映射
// ================================================

/** 将原始分 (0-8) 映射为 L / M / H (阈值: L=0-2, M=3-4, H=5-8) */
export function scoreToLevel(score: number): Level {
    if (score <= 2) return 'L';
    if (score <= 4) return 'M';
    return 'H';    // 5-8
}

export function levelToScoreRange(level: Level): [number, number] {
    switch (level) {
        case 'L': return [0, 2];
        case 'M': return [3, 4];
        case 'H': return [5, 8];
    }
}

// ================================================
// 自评偏差惩罚 (可配置惩罚矩阵)
// ================================================

/**
 * 惩罚矩阵
 * key: 自评等级 (L/M/H)
 * value: { 实考分数范围: 惩罚分数 }
 *
 * 核心思想："高估自己"比"低估自己"惩罚更重
 * - 自评 L (低调不自信) → 不扣分，信你实考
 * - 自评 M → 实考偏低时扣 1 分
 * - 自评 H (自视甚高) → 实考越低于预期扣得越多
 */
const PENALTY_MATRIX: Record<Level, Record<Level, number>> = {
    // 实考 L | 实考 M | 实考 H
    L: { L: 0, M: 0, H: 0 },       // 自评 L：不作为惩罚
    M: { L: 1, M: 0, H: 0 },       // 自评 M：实考偏低(L)扣 1
    H: { L: 2, M: 1, H: 0 },       // 自评 H：实考偏低(L)扣 2，实考中(M)扣 1
};

/**
 * 根据原始分 + 自评等级计算惩罚分数
 * @param rawScore 维度原始分 (0-8)
 * @param selfEval 自评等级
 */
export function calcPenalty(rawScore: number, selfEval: Level): number {
    const actualLevel = scoreToLevel(rawScore);
    return PENALTY_MATRIX[selfEval]?.[actualLevel] ?? 0;
}

// ================================================
// 单维度计算
// ================================================

export function calcDimResult(
    dimId: DimId,
    answers: Record<string, Record<string, number>>,
    selfEvalRaw?: number | null
): {
    rawScore: number;
    finalScore: number;
    level: Level;
    selfEval?: Level;
    penalty: number;
} {
    const dimAnswers = answers[dimId] ?? {};
    const scores = Object.values(dimAnswers);

    // 无答案 → 默认 4 分 (M 级)
    let rawScore = 0;
    if (scores.length > 0) {
        rawScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }

    // 自评
    const selfEval: Level | undefined =
        selfEvalRaw != null ? (['L', 'M', 'H'] as const)[selfEvalRaw] : undefined;

    // 惩罚 (无自评时默认按 L 处理 → 不惩罚)
    const penalty = calcPenalty(rawScore, selfEval ?? 'L');
    const finalScore = Math.max(0, rawScore - penalty);
    const level = scoreToLevel(finalScore);

    return { rawScore, finalScore, level, selfEval, penalty };
}

// ================================================
// 完整结果计算
// ================================================

export interface CalcResultInput {
    /** { dimId: { questionId: score } } */
    dimAnswers: Record<DimId, Record<string, number>>;
    /** 自评选项 (Q2/Q3/Q4 的 value) */
    selfEvalAnswers?: { dimId: DimId; value: number }[];
}

export function calcResults(input: CalcResultInput): TestResult {
    const { dimAnswers, selfEvalAnswers = [] } = input;

    const selfMap: Record<DimId, number | undefined> = {
        professional: undefined,
        responsibility: undefined,
        morality: undefined,
        funny: undefined,
    };
    for (const se of selfEvalAnswers) {
        selfMap[se.dimId] = se.value;
    }

    const dimIds: DimId[] = ['professional', 'responsibility', 'morality', 'funny'];
    const dimResults: DimResult[] = dimIds.map(dimId => {
        const { rawScore, finalScore, level, selfEval, penalty } = calcDimResult(
            dimId, dimAnswers, selfMap[dimId]
        );
        return {
            dimId,
            dimName: DIM_NAMES[dimId],
            rawScore,
            finalScore,
            level,
            selfEval,
            penalty: penalty ?? 0,
            description: LEVEL_DESCRIPTIONS[dimId]?.[level] ?? '',
        };
    });

    const levels: LevelTuple = [
        dimResults[0].level,
        dimResults[1].level,
        dimResults[2].level,
        dimResults[3].level,
    ];

    // 用 results.ts 匹配 (接受 [Level, Level, Level, Level] 元组)
    const match = findResult(levels);

    return {
        dimResults,
        levels,
        matchedEntry: match.entry,
        matchCount: match.matchCount,
        matchDetails: [{ entry: match.entry, hits: match.matchCount }],
    };
}