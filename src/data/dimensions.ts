import type { DimId, Level } from '../types';

// ========== 维度元数据 ==========

export const DIM_NAMES: Record<DimId, string> = {
    professional: '学术力',
    responsibility: '靠谱程度',
    morality: '拟人程度',
    funny: '招笑程度',
};

export const DIM_ICONS: Record<DimId, string> = {
    professional: '📚',
    responsibility: '🤝',
    morality: '🧑',
    funny: '🤡',
};

export const DIM_DESCS: Record<DimId, string> = {
    professional: '肚子里面有没有货？业务能力是不是过关？',
    responsibility: '能不能扛事？遇到问题会不会甩锅，还是主动兜底？',
    morality: '像不像一个"人"？会不会干一些让人寒心的骚操作？',
    funny: '是不是那种"心里没数还要装一把"的显眼包？',
};

// ========== 等级解读 (L / M / H) ==========

export const LEVEL_LABELS: Record<Level, string> = {
    L: '低',
    M: '中',
    H: '高',
};

export const LEVEL_DESCRIPTIONS: Record<DimId, Record<Level, string>> = {
    professional: {
        L: '学术力堪忧，肚子里货不多。说出来的话翻来覆去就那么几句，遇到真问题就只能靠"大方向"搪塞过去。',
        M: '有一定基础，日常够用，但深水区容易露怯。属于"能应付，但你指着他挑大梁可能有点悬"的类型。',
        H: '业务扎实，有真才实学。关键时刻能拿出硬货，是那种"有问题找他就对了"的人。',
    },
    responsibility: {
        L: '摸鱼甩锅一把好手，万事不离"这不归我管"。事情做不做不重要，重要的是责任别落到自己头上。',
        M: '该配合的时候会配合，但主动揽活的积极性有限。不是不靠谱，是选择性靠谱。',
        H: '能扛事，不推诿。看到问题就忍不住上手管一管，是大家最想合作的那种人。',
    },
    morality: {
        L: '不拟人——整天整些让人心寒的骚操作。制度上可能挑不出毛病，但你心里明白：TA 不干人事。',
        M: '大体上是个正常人，大多数时候干人事。但偶尔也会有些让人摸不着头脑的操作。',
        H: '有人情味，能站在别人的角度想问题。底线清晰，做事让人心里踏实。',
    },
    funny: {
        L: '正常人类，不招笑。要么是真的有东西，要么至少懂得低调，不会出来丢人现眼。',
        M: '偶尔有点"装"的嫌疑，但还在可控范围内。有时候让人觉得"这人是不是有点太想表现了"。',
        H: '行走的显眼包——心里没数还非要装一把，结果大家都知道你几斤几两。小丑竟是你自己。',
    },
};