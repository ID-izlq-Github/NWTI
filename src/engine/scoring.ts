import type { DimId, Level, LevelTuple, TestResult, DimResult } from '../types';
import { DIM_NAMES, LEVEL_DESCRIPTIONS } from '../data/dimensions';
import { findResult } from '../data/results';

// ================================================
// 分数 → 等级映射
// ================================================

/** 将原始分 (0-8) 映射为 L / M / H */
export function scoreToLevel(score: number): Level {
    if (score <= 2) return 'L';
    if (score <= 5) return 'M';
    return 'H';    // 6-8
}

export function levelToScoreRange(level: Level): [number, number] {
    switch (level) {
        case 'L': return [0, 2];
        case 'M': return [3, 5];
        case 'H': return [6, 8];
    }
}

// ================================================
// 自评偏差惩罚 (渐进式扣分)
// ================================================

/**
 * 惩罚规则：
 * 自评 0 (L) → 实考分直接使用，无惩罚 (L 默认最少置信)
 * 自评 1 (M) → 中等惩罚曲线
 * 自评 2 (H) → 高惩罚曲线 (因为自视过高)
 */
export function calcPenalty(rawScore: number, selfEvalScore: 0 | 1 | 2): number {
    // 自评 L (0) — 不做惩罚，完全信任实考
    if (selfEvalScore === 0) return 0;

    // 自评 M (1) — 中等扣分
    if (selfEvalScore === 1) {
        // 实考高(≥6)无惩罚，实考中(3-5)扣 1，实考低(≤2)扣 2
        if (rawScore >= 6) return 0;
        if (rawScore >= 3) return 1;
        return 2;
    }

    // 自评 H (2) — 严格惩罚
    if (selfEvalScore === 2) {
        // 实考高(≥7)无惩罚，实考中(4-6)扣 2，实考低(≤3)扣 3
        // 但最终不能低于 0
        if (rawScore >= 7) return 0;
        if (rawScore >= 4) return 2;
        return Math.min(3, rawScore); // 不会扣成负数
    }

    return 0;
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

    // 惩罚
    const penalty = calcPenalty(rawScore, (selfEvalRaw ?? 0) as 0 | 1 | 2);
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