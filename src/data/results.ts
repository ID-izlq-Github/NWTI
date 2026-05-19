import type { DimId, Level, PatternTuple, ResultEntry } from '../types';

// ================================================
// 16 种人格结果 (来自 role_design.txt)
// 使用 "result" (结果名称) / "pattern" (等级组合数组) / "comment" (评语) 字段
// pattern: [专业等第组合, 责任等第组合, 道德等第组合, 乐子等第组合]
//   例如 [['L'], ['L'], [['M', 'H']], [['L', 'M']]] 表示对应维度允许多个等级
// ================================================

export const RESULTS: ResultEntry[] = [
    {
        result: 'Yin-Biao Sun',
        pattern: [
            ['L'],         // 专业
            ['L'],         // 责任
            ['L', 'M'],    // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '傻逼，你的老冯不许返航',
    },
    {
        result: 'XR',
        pattern: [
            ['H'],         // 专业
            ['H'],         // 责任
            ['M', 'H'],    // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '不敢说',
    },
    {
        result: '呀风',
        pattern: [
            ['H'],         // 专业
            ['H'],         // 责任
            ['L', 'M', 'H'], // 道德
            ['M', 'H'],    // 乐子
        ],
        comment: '最强的Nagotiator，如如之力出神入化，NW最坚固的盾',
    },
    {
        result: 'Annie Z',
        pattern: [
            ['M', 'H'],    // 专业
            ['M', 'H'],    // 责任
            ['M', 'H'],    // 道德
            ['M', 'H'],    // 乐子
        ],
        comment: '红橙黄绿蓝紫 红橙黄绿蓝紫',
    },
    {
        result: 'Patrick Landers',
        pattern: [
            ['H'],         // 专业
            ['M', 'H'],    // 责任
            ['L', 'M'],    // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '技术过硬但做人灵活，NW的名誉守门员',
    },
    {
        result: '阿甘',
        pattern: [
            ['M'],         // 专业
            ['H'],         // 责任
            ['H'],         // 道德
            ['L'],         // 乐子
        ],
        comment: '专业中等但极度靠谱，老实人的天花板',
    },
    {
        result: '孙静',
        pattern: [
            ['H'],         // 专业
            ['M'],         // 责任
            ['M', 'H'],    // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '学霸但不爱管闲事，做人还算正派',
    },
    {
        result: 'Daniel Kitivo',
        pattern: [
            ['M', 'H'],    // 专业
            ['L', 'M'],    // 责任
            ['M', 'H'],    // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '能力不错但不太主动，道德感尚可',
    },
    {
        result: '(牢) Peter Ning',
        pattern: [
            ['L', 'M'],    // 专业
            ['L'],         // 责任
            ['L', 'M'],    // 道德
            ['L'],         // 乐子
        ],
        comment: '各方面都偏弱，NW的底层打工人',
    },
    {
        result: '(牢) Nick Lupous',
        pattern: [
            ['L', 'M'],    // 专业
            ['L'],         // 责任
            ['L', 'M'],    // 道德
            ['M', 'H'],    // 乐子
        ],
        comment: '专业不行但人挺乐呵，NW的气氛组',
    },
    {
        result: '(牢) Matt Porteous',
        pattern: [
            ['L', 'M'],    // 专业
            ['M'],         // 责任
            ['L', 'M'],    // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '各方面中规中矩偏弱，NW的沉默大多数',
    },
    {
        result: '(牢) Rocky',
        pattern: [
            ['M'],         // 专业
            ['L'],         // 责任
            ['L', 'M'],    // 道德
            ['M', 'H'],    // 乐子
        ],
        comment: '专业还行但不管事，道德灵活乐子拉满',
    },
    {
        result: '(牢) 黄荣生',
        pattern: [
            ['L', 'M'],    // 专业
            ['L'],         // 责任
            ['L'],         // 道德
            ['L'],         // 乐子
        ],
        comment: '全面偏弱，NW的隐形人',
    },
    {
        result: 'YYY',
        pattern: [
            ['M', 'H'],    // 专业
            ['L', 'M'],    // 责任
            ['M', 'H'],    // 道德
            ['M', 'H'],    // 乐子
        ],
        comment: '能力强、性格好、还有趣，团队里的宝藏',
    },
    {
        result: 'Jason Kim',
        pattern: [
            ['H'],         // 专业
            ['L', 'M'],    // 责任
            ['L'],         // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '专业拉满但其他维度随缘，纯粹的技术宅',
    },
    {
        result: 'Arien Xu',
        pattern: [
            ['M', 'H'],    // 专业
            ['M', 'H'],    // 责任
            ['M', 'H'],    // 道德
            ['L', 'M'],    // 乐子
        ],
        comment: '全维度中高唯独不太搞笑，正经到令人敬畏',
    },
];

// ================================================
// 匹配算法：在 16 个 pattern 中找到最匹配的结果
// ================================================

/**
 * 检查一个等级 level 是否在 pattern 片段 items 中
 * items 如 ['L', 'M'] 表示 L 或 M 都满足
 */
function levelInPattern(level: Level, allowed: Level[]): boolean {
    return allowed.includes(level);
}

/**
 * 统计 pattern 和被测者 levels 之间的匹配程度
 */
function countMatches(
    levels: [Level, Level, Level, Level],
    pattern: PatternTuple
): number {
    let hits = 0;
    for (let i = 0; i < 4; i++) {
        if (levelInPattern(levels[i], pattern[i])) {
            hits++;
        }
    }
    return hits;
}

/**
 * 从 RESULTS 中找到最佳匹配的条目
 * 优先 4/4 完全匹配 → 3/4 → 2/4 → 1/4 → 兜底
 */
export function findResult(
    levels: [Level, Level, Level, Level]
): { entry: ResultEntry; matchCount: number } {
    // 收集所有条目的命中数
    const scored = RESULTS.map(entry => ({
        entry,
        hits: countMatches(levels, entry.pattern),
    }));

    // 从高到低排序
    scored.sort((a, b) => b.hits - a.hits);
    const best = scored[0];

    // 如果最佳命中 = 0，回退到第一个条目
    if (!best || best.hits === 0) {
        return { entry: RESULTS[0], matchCount: 0 };
    }

    return { entry: best.entry, matchCount: best.hits };
}

/**
 * 获取所有条目的匹配详情 (供调试/展示用)
 */
export function getAllMatchDetails(
    levels: [Level, Level, Level, Level]
): { entry: ResultEntry; hits: number }[] {
    return RESULTS.map(entry => ({
        entry,
        hits: countMatches(levels, entry.pattern),
    })).sort((a, b) => b.hits - a.hits);
}

// ================================================
// 验证：确保所有 3^4 = 81 种组合都能被覆盖
// ================================================

export function validateResultCoverage(): { uncovered: string[]; ok: boolean } {
    const dims: DimId[] = ['professional', 'responsibility', 'morality', 'funny'];
    const levelChars: Level[] = ['L', 'M', 'H'];
    const uncovered: string[] = [];

    function enumerate(combo: [Level, Level, Level, Level], i: number) {
        if (i >= 4) {
            const result = findResult(combo);
            if (result.matchCount === 0) {
                uncovered.push(
                    dims.map((d, idx) => `${d}=${combo[idx]}`).join(', ')
                );
            }
            return;
        }
        for (const l of levelChars) {
            const next = [...combo] as [Level, Level, Level, Level];
            next[i] = l;
            enumerate(next, i + 1);
        }
    }

    enumerate(['L', 'L', 'L', 'L'], 0);
    return { uncovered, ok: uncovered.length === 0 };
}

// ================================================
// 验证：检查 RESULTS 是否有重复 pattern
// ================================================

export function validateDuplicatePatterns(): { duplicates: string[]; ok: boolean } {
    const seen = new Map<string, string>();
    const duplicates: string[] = [];

    for (const entry of RESULTS) {
        const key = entry.pattern.map(p => p.join(',')).join('|');
        const existing = seen.get(key);
        if (existing) {
            duplicates.push(`"${entry.result}" 与 "${existing}" 的 pattern 完全一致`);
        } else {
            seen.set(key, entry.result);
        }
    }

    return { duplicates, ok: duplicates.length === 0 };
}