import type { DimId, Level } from '../types';

// ========== 维度元数据 ==========

export const DIM_NAMES: Record<DimId, string> = {
    professional: '专业能力',
    responsibility: '责任意识',
    morality: '道德水平',
    funny: '乐子程度',
};

export const DIM_ICONS: Record<DimId, string> = {
    professional: '📚',
    responsibility: '🤝',
    morality: '⚖️',
    funny: '🤡',
};

export const DIM_DESCS: Record<DimId, string> = {
    professional: '学术以及专业水平',
    responsibility: '拒绝官僚主义，强调协作。愿不愿意主动配合与支持他人。',
    morality: '道德素养',
    funny: '这个人是否让人觉得可笑',
};

// ========== 等级解读 (L / M / H) ==========

export const LEVEL_LABELS: Record<Level, string> = {
    L: '低',
    M: '中',
    H: '高',
};

export const LEVEL_DESCRIPTIONS: Record<DimId, Record<Level, string>> = {
    professional: {
        L: '专业知识比较薄弱，可能还在学习阶段，或者和这个领域缘分不深。',
        M: '有一定专业基础，能解决常规问题，但遇到深水区可能要绕道走。',
        H: '专业功底扎实，面对复杂问题有底气，属于团队里的定海神针。',
    },
    responsibility: {
        L: '更关注自身，不太愿意为他人兜底，"这不归我管"是口头禅。',
        M: '该配合的时候会配合，但主动揽活的积极性有限。',
        H: '责任感强，看到问题就忍不住上手，是大家最想合作的那种人。',
    },
    morality: {
        L: '底线弹性较大，有时候不太讲究，容易让身边的人缺乏安全感。',
        M: '大体上是个好人，但在灰色地带有一定的灵活操作空间。',
        H: '原则性强，有自己坚守的底线，做事让人放心。',
    },
    funny: {
        L: '比较严肃正经，玩笑话到你这里往往会变成冷场。',
        M: '偶尔能接住梗，有自己的幽默节奏，但不会主动挑大梁。',
        H: '行走的笑点制造机，有你在的场合从不缺欢乐和意外。',
    },
};