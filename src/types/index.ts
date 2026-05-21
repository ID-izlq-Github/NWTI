// ========== 维度与等级 ==========

/** 4 维度 ID */
export type DimId = 'professional' | 'responsibility' | 'morality' | 'funny';

/** 维度等级 */
export type Level = 'L' | 'M' | 'H';

/** 等级范围 — 允许"或"关系，如 [M, H] 表示 M 或 H 均可匹配 */
export type LevelPattern = Level[];

/** 4 维等级数组 (用于被测者结果) */
export type LevelTuple = [Level, Level, Level, Level];

/** 4 维等级范围数组 (用于结果映射) */
export type PatternTuple = [LevelPattern, LevelPattern, LevelPattern, LevelPattern];

// ========== 专业 ==========

export const PROFESSION_LABELS = [
    '数理 (数学/物理)',
    '生化 (化学/生物)',
    '商科/计算机',
    '文史政 (历史/政治)',
] as const;

export type ProfessionKey = (typeof PROFESSION_LABELS)[number];

export const PROFESSION_KEYS: ProfessionKey[] = [...PROFESSION_LABELS];

// ========== 题目 ==========

export interface QuestionOption {
    label: string;
    value: number; // 0-8 对应的原始分
}

export interface Question {
    id: string;
    /** 所属维度 */
    dim: DimId;
    /** 题目文本 */
    text: string;
    /** 选项列表 */
    options: QuestionOption[];
    /** 题目难度 (仅专业题库使用) */
    difficulty?: 'basic' | 'medium' | 'advanced';
    /** 所属专业 (仅专业题库使用) */
    profession?: ProfessionKey;
}

// ========== 结果映射 ==========

/** 结果键 — 4 位字母标识，如 HHHH、LLLH 等 */
export type ResultKey = `${Level}${Level}${Level}${Level}`;

export interface ResultEntry {
    /** 结果名称 */
    result: string;
    /** 等级组合 (4 维，每维 LevelPattern) */
    pattern: PatternTuple;
    /** 评语 */
    comment: string;
    /** 详细评价 (比评语更长的解读) */
    detail: string;
}

// ========== 计算结果 ==========

export interface DimResult {
    dimId: DimId;
    dimName: string;
    rawScore: number;       // 0-8
    level: Level;
    selfEval?: Level;       // 自评等级(维度 2/3/4)
    penalty?: number;       // 偏差扣分
    finalScore: number;     // 扣分后的最终分数
    description: string;    // 等级解读
}

export interface TestResult {
    /** 4 维结果 */
    dimResults: DimResult[];
    /** 最终等级元组 */
    levels: LevelTuple;
    /** 匹配到的结果条目 */
    matchedEntry: ResultEntry | null;
    /** 匹配完全度（4 维中命中的数量） */
    matchCount: number;
    /** 四维是否命中 (对齐 dimResults / levels 顺序) */
    matchMask: [boolean, boolean, boolean, boolean];
    /** 所有结果条目的匹配情况 */
    matchDetails: { entry: ResultEntry; hits: number }[];
}

// ========== 测试状态 ==========

export type Screen = 'intro' | 'test' | 'result' | 'donate';

export interface TestState {
    /** 当前屏幕 */
    screen: Screen;
    /** 来源页面 (供 donate 页返回) */
    previousScreen: Screen;
    /** Q1 - 选择的专业 */
    profession: ProfessionKey | null;
    /** 当前题目索引 (在 questions 数组中的位置) */
    currentIndex: number;
    /** 所有答案 { questionId: score } */
    answers: Record<string, number>;
    /** 生成后的题目列表 (含自评 4 + 专业 9 + 其他 27 = 40 题) */
    questions: Question[];
    /** 计算结果 */
    result: TestResult | null;
}
