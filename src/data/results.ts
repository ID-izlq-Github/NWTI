import type { DimId, Level, PatternTuple, ResultEntry } from '../types';

// ================================================
// 16 种人格结果 (基于 role_design.txt 事迹推导)
// pattern: [学术力, 靠谱程度, 拟人程度, 招笑程度]
// ================================================

export const RESULTS: ResultEntry[] = [
    {
        result: 'Yin-Biao Sun',
        pattern: [
            ['L'],         // 学术力
            ['L'],         // 靠谱程度
            ['L'],         // 拟人程度
            ['H'],         // 招笑程度
        ],
        comment: '傻逼，你的老冯不许返航。',
        detail:
            '学术力垫底，中英文都不行还非要炫耀自己的留洋身份。' +
            '说话永远云遮雾绕，听君一席话如听一席话。' +
            '专业不行硬要装，NW最典的显眼包，没有之一。',
    },
    {
        result: 'XR',
        pattern: [
            ['M'],         // 学术力
            ['M'],         // 靠谱程度
            ['L'],         // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '不敢说。',
        detail:
            '一校之长，雷厉风行但方向跑偏。执行力拉满——把学校越管越差。' +
            '反对她的人全被清退，所以大家都怕她。不招笑，但让人心寒。',
    },
    {
        result: '呀风',
        pattern: [
            ['M'],         // 学术力
            ['L'],         // 靠谱程度
            ['L'],         // 拟人程度
            ['H'],         // 招笑程度
        ],
        comment: '最强的 Nagotiator，如如之力出神入化，NW 神秘跑步男。',
        detail:
            '学校中层，能力勉强但推诿功夫登峰造极。' +
            '太极打得行云流水，事情做得冠冕堂皇——然后啥也没干。' +
            '经典懒政艺术家，"如如之力"的传说流传至今。',
    },
    {
        result: 'Annie Z',
        pattern: [
            ['M'],         // 学术力
            ['L'],         // 靠谱程度
            ['L'],         // 拟人程度
            ['H'],         // 招笑程度
        ],
        comment: '红橙黄绿蓝紫 红橙黄绿蓝紫。',
        detail:
            '计算机水平或许还行，但作为一个老师就是灾难。' +
            '极其自负，把学生当耗材使唤，所有人都在想"学校怎么会有这种神仙"。' +
            '专业一般还狂得要命，典型的自我认知障碍患者。',
    },
    {
        result: 'Patrick Landers',
        pattern: [
            ['H'],         // 学术力
            ['H'],         // 靠谱程度
            ['L', 'M'],    // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '「I don\'t fucking care about your grade.」',
        detail:
            'GPA Killer 的名号不是白叫的——专业能力没得说，AP English 能让人掉一层皮。' +
            '上课严肃但偶尔和学生一起锐评学校，说明脑子清醒、心里有数。' +
            '靠谱是真的靠谱，但别指望他给你放水。',
    },
    {
        result: '阿甘',
        pattern: [
            ['H'],         // 学术力
            ['M'],         // 靠谱程度
            ['H'],         // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '阿甘是真帅吧。',
        detail:
            '生物老师，全维度正面标杆——专业扎实、靠谱担当、明是非、理解学生。' +
            '管纪律时让人怕，但所有人都尊敬他。' +
            'NW少有的"你挑不出毛病"的存在，真正的帅是发自灵魂的。',
    },
    {
        result: '孙静',
        pattern: [
            ['H'],         // 学术力
            ['H'],         // 靠谱程度
            ['L'],         // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '孙静的老冯一定在天上飞。',
        detail:
            '业务能力极强，工作狂属性拉满。但严苛冷血——海量作业和考试从不手软。' +
            '可以理解为"有能力的 Annie Z"：不招笑，但大家都怕她。' +
            '专业强 + 不拟人 = 一个让人又敬又恐的存在。',
    },
    {
        result: '陈波',
        pattern: [
            ['M'],         // 学术力
            ['M'],         // 靠谱程度
            ['M', 'H'],    // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '谁？哦……好像有点印象。',
        detail:
            'HR 兼升学指导，哪里都出现过但存在感约等于零。' +
            '人挺和蔼靠谱，能力够用，但就是记不住——像一杯温水，舒服但没有记忆点。' +
            'NW 的幽灵人物：来过，走了，你甚至没发现。',
    },
    {
        result: '(牢) Peter Ning',
        pattern: [
            ['L', 'M'],    // 学术力
            ['L'],         // 靠谱程度
            ['L'],         // 拟人程度
            ['H'],         // 招笑程度
        ],
        comment: '传奇嘉豪。',
        detail:
            '水平堪忧、绝不靠谱、毫无人情味——但偏偏浑身都是戏。' +
            '招笑程度拉满的经典牢字辈，每一个操作都是节目效果。' +
            '和 Yin-Biao Sun 堪称 NW 招笑双璧，风格不同但殊途同归。',
    },
    {
        result: '(牢) Nick Lupous',
        pattern: [
            ['H'],         // 学术力
            ['H'],         // 靠谱程度
            ['M', 'H'],    // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '有能力的好人被搞走了，这不是NW的损失是什么？',
        detail:
            '前学术校长，教学和行政双线拉满——做得好、给分严、说话管用。' +
            '可惜被 Yin-Biao Sun 和 XR 联手排挤，含恨辞职。' +
            'NW 最意难平的牢字辈：不是没能力，是太有能力了。',
    },
    {
        result: '(牢) YYF',
        pattern: [
            ['H'],         // 学术力
            ['H'],         // 靠谱程度
            ['H'],    // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: 'NW 唯一引进的能人，可惜变成牢字辈了。',
        detail:
            '能力和靠谱度双高，是 NW 极少数真正称得上"引进人才"的存在。' +
            '整体正面但结局唏嘘——一个能人在 NW 的生态里注定待不长。' +
            '牢字辈不是贬低，是惋惜。',
    },
    {
        result: '(牢) Rocky',
        pattern: [
            ['H'],         // 学术力
            ['M'],         // 靠谱程度
            ['M', 'H'],    // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '最有用的英语老师。',
        detail:
            '专业能力过硬，教英语是实打实的好手。靠谱程度中等偏上，拟人程度也不错。' +
            '没有惊天动地的事迹，但就是那种"上过他课的人都说好"的类型。' +
            '在 NW 这种地方能被称为"最有用的英语老师"，含金量自证。',
    },
    {
        result: '(牢) 黄荣生',
        pattern: [
            ['H'],         // 学术力
            ['H'],         // 靠谱程度
            ['M'],         // 拟人程度
            ['M'],         // 招笑程度
        ],
        comment: '运动鞋，紧身裤；我叫荣生你记住。',
        detail:
            '前书记，行政能力强、注重事业和学生，毁誉参半但总体偏正面。' +
            '不过那标志性的紧身裤造型配上"我叫荣生你记住"的气场，' +
            '让人不得不承认：实力派里面也有自带笑点的存在。',
    },
    {
        result: 'YYY',
        pattern: [
            ['M'],         // 学术力
            ['M'],         // 靠谱程度
            ['H'],         // 拟人程度
            ['M'],         // 招笑程度
        ],
        comment: '全局来看……是个好人。',
        detail:
            '升学指导，专业水平差强人意——能用，但别指望惊艳。' +
            '但在 NW 这种地方，光是"拟人程度拉满"就已经是稀缺品质了。' +
            '能力中等 + 人品可靠 = NW 的良心担当。偶尔有点小装但无伤大雅。',
    },
    {
        result: '(牢) Jason Kim',
        pattern: [
            ['M'],         // 学术力
            ['M'],         // 靠谱程度
            ['L'],         // 拟人程度
            ['H'],         // 招笑程度
        ],
        comment: '和引飚先生过一辈子去吧。',
        detail:
            '英语能力也许还行，但"教高二学生初中语法"这件事已经说明一切。' +
            '上课无聊到被学生嫌弃，最后干脆课堂上放球赛。' +
            '和 Yin-Biao Sun 惺惺相惜——物以类聚的最好证明。' +
            '不拟人 + 招笑拉满，牢字辈中的牢字辈。',
    },
    {
        result: 'Arien Xu',
        pattern: [
            ['M', 'H'],    // 学术力
            ['H'],         // 靠谱程度
            ['H'],         // 拟人程度
            ['L'],         // 招笑程度
        ],
        comment: '牢南不容易啊。',
        detail:
            '业务能力在线，天选打工人——学校安排的各种活全堆在她身上，' +
            '经常忙到让人心疼。靠谱、拟人、不招笑，是那种"默默扛起一切"的类型。' +
            '学生对她不一定是崇拜，但一定是最深的同情和敬意。"牢南"是最温柔的牢。',
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