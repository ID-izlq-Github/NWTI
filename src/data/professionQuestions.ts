import type { Question, ProfessionKey } from '../types';

/**
 * 专业题库：每专业 18 题（basic × 6 + medium × 6 + advanced × 6）
 * 测试时从各难度中各随机抽取 3 题，共 9 题
 */

// ========== 辅助函数 ==========

function opt(label: string, value: number) {
    return { label, value };
}

// ─────────────── 数理 (数学/物理) ───────────────
const MATH_Q: Question[] = [
    // basic — 下限保持，理解型基础
    { id: 'math_b1', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: 'lim<sub>x→0</sub> (sin x) / x = ?', options: [opt('0', 0), opt('1', 8), opt('∞', 0), opt('不存在', 0)] },
    { id: 'math_b2', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '变速运动中，速度对时间求导得到什么？', options: [opt('位移', 0), opt('加速度', 8), opt('动量', 0), opt('冲量', 0)] },
    { id: 'math_b3', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '在无外力系统中，哪个量守恒？', options: [opt('速度', 0), opt('动量', 8), opt('加速度', 0), opt('位移', 0)] },
    { id: 'math_b4', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '复数 i² 的值是？', options: [opt('1', 0), opt('-1', 8), opt('0', 0), opt('i', 0)] },
    { id: 'math_b5', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '两个非零向量点积为 0，说明它们？', options: [opt('平行', 0), opt('垂直', 8), opt('同向', 0), opt('反向', 0)] },
    { id: 'math_b6', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '匀速圆周运动中，加速度方向指向？', options: [opt('切线方向', 0), opt('圆心', 8), opt('运动方向', 0), opt('竖直向下', 0)] },

    // medium — 需要计算和概念辨析
    { id: 'math_m1', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '曲线 y = x³ - 3x² + 2 的拐点对应的 x 坐标是？', options: [opt('0', 0), opt('1', 8), opt('2', 0), opt('-1', 0)] },
    { id: 'math_m2', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '一物体沿斜面以恒定速度下滑，说明什么？', options: [opt('不受力', 0), opt('合力为零', 8), opt('仅受重力', 0), opt('加速度为 g', 0)] },
    { id: 'math_m3', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '∫<sub>0</sub><sup>π</sup> sin x dx 的值是？', options: [opt('0', 0), opt('2', 8), opt('π', 0), opt('-2', 0)] },
    { id: 'math_m4', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: 'd/dx (e<sup>x</sup>) 的结果是？', options: [opt('x·e<sup>x-1</sup>', 0), opt('e<sup>x</sup>', 8), opt('e<sup>x</sup> / x', 0), opt('ln x', 0)] },
    { id: 'math_m5', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '矩阵 [[a,b],[c,d]] 的行列式为？', options: [opt('a+b+c+d', 0), opt('ad - bc', 8), opt('ac - bd', 0), opt('ab - cd', 0)] },
    { id: 'math_m6', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '简谐运动 x = A cos(ωt + φ)，速度幅值为？', options: [opt('A', 0), opt('Aω', 8), opt('A/ω', 0), opt('ω²A', 0)] },

    // advanced — 上限拉高，IB HL / 大一级别
    { id: 'math_a1', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '级数 ∑<sub>n=1</sub><sup>∞</sup> 1/n² 的收敛值是？', options: [opt('发散', 0), opt('π²/6', 8), opt('π/2', 0), opt('2', 0)] },
    { id: 'math_a2', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '薛定谔方程 <i>iħ∂ψ/∂t = Ĥψ</i> 中，<i>ψ</i> 的物理意义是？', options: [opt('粒子轨迹', 0), opt('概率幅（波函数）', 8), opt('能量密度', 0), opt('电荷分布', 0)] },
    { id: 'math_a3', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '函数在某点可导是其连续的什么条件？', options: [opt('必要不充分', 0), opt('充分不必要', 8), opt('充要', 0), opt('既不充分也不必要', 0)] },
    { id: 'math_a4', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '麦克斯韦方程组描述的是什么？', options: [opt('引力场', 0), opt('电磁场', 8), opt('强相互作用', 0), opt('流体运动', 0)] },
    { id: 'math_a5', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '矩阵 A 的特征值 λ 满足哪个方程？', options: [opt('Ax = λb', 0), opt('det(A - λI) = 0', 8), opt('tr(A) = λ', 0), opt('Aᵀ = λA', 0)] },
    { id: 'math_a6', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '热力学第二定律的核心结论是？', options: [opt('能量守恒', 0), opt('孤立系统熵增', 8), opt('绝对零度不可达', 0), opt('内能是状态函数', 0)] },
];

// ─────────────── 生化 (化学/生物) ───────────────
const BIO_Q: Question[] = [
    // basic — 下限保持
    { id: 'bio_b1', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '水的化学式是？', options: [opt('H₂O', 8), opt('CO₂', 0), opt('NaCl', 0), opt('CH₄', 0)] },
    { id: 'bio_b2', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: 'DNA 的全称是什么？', options: [opt('脱氧核糖核酸', 8), opt('核糖核酸', 0), opt('氨基酸', 0), opt('脂肪酸', 0)] },
    { id: 'bio_b3', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: 'pH=7 的溶液是？', options: [opt('酸性', 0), opt('碱性', 0), opt('中性', 8), opt('不确定', 0)] },
    { id: 'bio_b4', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '人体正常体温约？', options: [opt('35°C', 0), opt('37°C', 8), opt('39°C', 0), opt('42°C', 0)] },
    { id: 'bio_b5', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '光合作用发生在细胞的哪个结构？', options: [opt('线粒体', 0), opt('叶绿体', 8), opt('细胞核', 0), opt('高尔基体', 0)] },
    { id: 'bio_b6', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '元素周期表中水平行称为？', options: [opt('族', 0), opt('周期', 8), opt('区', 0), opt('层', 0)] },

    // medium
    { id: 'bio_m1', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '三羧酸循环（TCA）发生在线粒体的哪里？', options: [opt('外膜', 0), opt('基质', 8), opt('嵴膜', 0), opt('膜间隙', 0)] },
    { id: 'bio_m2', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '下列哪个是芳香烃？', options: [opt('甲烷', 0), opt('苯', 8), opt('乙醇', 0), opt('丙酮', 0)] },
    { id: 'bio_m3', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: 'PCR 技术用于什么？', options: [opt('蛋白质纯化', 0), opt('DNA 扩增', 8), opt('细胞培养', 0), opt('色谱分析', 0)] },
    { id: 'bio_m4', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '酶的化学本质主要是？', options: [opt('糖类', 0), opt('蛋白质', 8), opt('脂质', 0), opt('核酸', 0)] },
    { id: 'bio_m5', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '有丝分裂后期，什么结构被拉向两极？', options: [opt('同源染色体', 0), opt('姐妹染色单体', 8), opt('中心粒', 0), opt('核膜碎片', 0)] },
    { id: 'bio_m6', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: 'H₂O 中氧原子的氧化数是？', options: [opt('0', 0), opt('-2', 8), opt('+2', 0), opt('-1', 0)] },

    // advanced — 上限拉高
    { id: 'bio_a1', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'CRISPR-Cas9 中 Cas9 是什么？', options: [opt('RNA 分子', 0), opt('核酸内切酶', 8), opt('病毒载体', 0), opt('质粒', 0)] },
    { id: 'bio_a2', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'sp³ 杂化的键角约为？', options: [opt('180°', 0), opt('120°', 0), opt('109.5°', 8), opt('90°', 0)] },
    { id: 'bio_a3', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'Western Blot 用于检测什么？', options: [opt('DNA', 0), opt('特定蛋白质', 8), opt('RNA', 0), opt('代谢物', 0)] },
    { id: 'bio_a4', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: '米氏方程 V = V<sub>max</sub>[S] / (K<sub>m</sub> + [S]) 中 K<sub>m</sub> 表示？', options: [opt('最大反应速率', 0), opt('半饱和常数', 8), opt('底物浓度', 0), opt('抑制常数', 0)] },
    { id: 'bio_a5', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: '一个碳原子连接四个不同基团，该碳称为？', options: [opt('伯碳', 0), opt('手性碳', 8), opt('季碳', 0), opt('羰基碳', 0)] },
    { id: 'bio_a6', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'Southern Blot 检测的目标分子是？', options: [opt('蛋白质', 0), opt('DNA', 8), opt('RNA', 0), opt('脂质', 0)] },
];

// ─────────────── 商科/计算机 ───────────────
const CS_Q: Question[] = [
    // basic — 下限保持
    { id: 'cs_b1', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: '二进制 1010 的十进制是？', options: [opt('8', 0), opt('10', 8), opt('12', 0), opt('14', 0)] },
    { id: 'cs_b2', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: '一个字节 byte 由多少 bit 组成？', options: [opt('4', 0), opt('8', 8), opt('16', 0), opt('32', 0)] },
    { id: 'cs_b3', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: 'SQL 中 SELECT ... FROM 的作用是？', options: [opt('插入数据', 0), opt('查询数据', 8), opt('删除数据', 0), opt('创建表', 0)] },
    { id: 'cs_b4', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: 'HTML 的全称是？', options: [opt('HyperText Markup Language', 8), opt('High Tech Modern Language', 0), opt('HyperTransfer Mode Link', 0), opt('Home Tool Markup Logic', 0)] },
    { id: 'cs_b5', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: 'IPv4 地址由多少位二进制组成？', options: [opt('16 位', 0), opt('32 位', 8), opt('64 位', 0), opt('128 位', 0)] },
    { id: 'cs_b6', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: 'ROI 是什么的缩写？', options: [opt('Return On Investment', 8), opt('Rate Of Interest', 0), opt('Risk Of Inflation', 0), opt('Revenue Over Income', 0)] },

    // medium
    { id: 'cs_m1', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: '时间复杂度 O(n log n) 属于哪种排序？', options: [opt('冒泡排序', 0), opt('归并排序', 8), opt('插入排序', 0), opt('选择排序', 0)] },
    { id: 'cs_m2', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: 'NPV（净现值）为负时，项目应该？', options: [opt('立即投资', 0), opt('不建议投资', 8), opt('增加杠杆', 0), opt('无法判断', 0)] },
    { id: 'cs_m3', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: '栈 Stack 的特点是？', options: [opt('FIFO', 0), opt('LIFO', 8), opt('随机存取', 0), opt('按索引', 0)] },
    { id: 'cs_m4', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: 'CAPM 模型中 β 系数衡量的是？', options: [opt('总风险', 0), opt('系统性风险', 8), opt('非系统性风险', 0), opt('流动性风险', 0)] },
    { id: 'cs_m5', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: '二分查找的前提条件是什么？', options: [opt('链表存储', 0), opt('数组有序', 8), opt('数据量小于 100', 0), opt('使用递归', 0)] },
    { id: 'cs_m6', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: '哈希表（Hash Table）的平均查找时间复杂度是？', options: [opt('O(n)', 0), opt('O(1)', 8), opt('O(log n)', 0), opt('O(n²)', 0)] },

    // advanced — 上限拉高
    { id: 'cs_a1', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: 'TCP 三次握手中第二次包带什么标志？', options: [opt('SYN', 0), opt('SYN+ACK', 8), opt('ACK', 0), opt('FIN', 0)] },
    { id: 'cs_a2', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: 'Black-Scholes 模型用于？', options: [opt('用户行为预测', 0), opt('期权定价', 8), opt('信用评分', 0), opt('库存管理', 0)] },
    { id: 'cs_a3', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: 'Redis 的持久化机制 RDB 是指？', options: [opt('追加日志', 0), opt('内存快照', 8), opt('主从复制', 0), opt('数据结构编码', 0)] },
    { id: 'cs_a4', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: '分布式 CAP 定理中的 P 代表什么？', options: [opt('性能 (Performance)', 0), opt('分区容错 (Partition Tolerance)', 8), opt('持久性 (Persistence)', 0), opt('并行 (Parallelism)', 0)] },
    { id: 'cs_a5', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: 'B+树中，所有实际数据存储在？', options: [opt('内部节点', 0), opt('叶子节点', 8), opt('根节点', 0), opt('索引节点', 0)] },
    { id: 'cs_a6', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: '死锁的四个必要条件不包括？', options: [opt('互斥条件', 0), opt('优先级抢占', 8), opt('持有并等待', 0), opt('循环等待', 0)] },
];

// ─────────────── 文史政 (历史/政治) ───────────────
const HIS_Q: Question[] = [
    // basic — 下限保持
    { id: 'his_b1', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '中国第一个大一统王朝是？', options: [opt('商朝', 0), opt('秦朝', 8), opt('周朝', 0), opt('汉朝', 0)] },
    { id: 'his_b2', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '《红楼梦》的作者是？', options: [opt('施耐庵', 0), opt('曹雪芹', 8), opt('罗贯中', 0), opt('吴承恩', 0)] },
    { id: 'his_b3', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '以下哪个是三权分立中的三权之一？', options: [opt('立法权', 8), opt('征税权', 0), opt('战争权', 0), opt('教育权', 0)] },
    { id: 'his_b4', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '第二次世界大战结束于哪一年？', options: [opt('1943', 0), opt('1945', 8), opt('1947', 0), opt('1950', 0)] },
    { id: 'his_b5', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '文艺复兴的发源地是？', options: [opt('法国', 0), opt('意大利', 8), opt('英国', 0), opt('德国', 0)] },
    { id: 'his_b6', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '联合国总部设在哪个城市？', options: [opt('日内瓦', 0), opt('纽约', 8), opt('巴黎', 0), opt('伦敦', 0)] },

    // medium
    { id: 'his_m1', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '《社会契约论》的作者是？', options: [opt('孟德斯鸠', 0), opt('卢梭', 8), opt('伏尔泰', 0), opt('狄德罗', 0)] },
    { id: 'his_m2', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '唐朝由盛转衰的标志性事件是？', options: [opt('黄巾起义', 0), opt('安史之乱', 8), opt('澶渊之盟', 0), opt('陈桥兵变', 0)] },
    { id: 'his_m3', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '布雷顿森林体系确立了哪种货币的国际地位？', options: [opt('英镑', 0), opt('美元', 8), opt('日元', 0), opt('欧元', 0)] },
    { id: 'his_m4', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '霍布斯在《利维坦》中主张什么？', options: [opt('三权分立', 0), opt('绝对君主制（社会契约论）', 8), opt('直接民主', 0), opt('无政府主义', 0)] },
    { id: 'his_m5', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '冷战开始的标志性事件是？', options: [opt('柏林墙修建', 0), opt('杜鲁门主义出台', 8), opt('古巴导弹危机', 0), opt('朝鲜战争', 0)] },
    { id: 'his_m6', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '王安石变法发生在哪个朝代？', options: [opt('唐朝', 0), opt('北宋', 8), opt('南宋', 0), opt('明朝', 0)] },

    // advanced — 上限拉高
    { id: 'his_a1', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '福柯在《规训与惩罚》中提出的核心概念是？', options: [opt('社会契约', 0), opt('全景敞视主义', 8), opt('阶级意识', 0), opt('科层制', 0)] },
    { id: 'his_a2', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '三十年战争结束后签订的条约是？', options: [opt('乌德勒支条约', 0), opt('威斯特伐利亚和约', 8), opt('明斯特和约', 0), opt('巴黎和约', 0)] },
    { id: 'his_a3', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '汉娜·阿伦特提出的"平庸之恶"针对的是？', options: [opt('极端主义', 0), opt('官僚体制中的麻木服从', 8), opt('战争罪行', 0), opt('意识形态冲突', 0)] },
    { id: 'his_a4', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '萨义德《东方学》的核心论点是？', options: [opt('东方文明优于西方', 0), opt('"东方"是被西方话语建构出来的', 8), opt('东西方文明必然冲突', 0), opt('东方应全盘西化', 0)] },
    { id: 'his_a5', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '年鉴学派代表人物布罗代尔提出的核心概念是？', options: [opt('阶级斗争', 0), opt('长时段（longue durée）', 8), opt('文明冲突', 0), opt('历史终结论', 0)] },
    { id: 'his_a6', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '罗尔斯《正义论》中"无知之幕"的目的是？', options: [opt('隐藏真实身份以逃避责任', 0), opt('在不知道自身处境的前提下设计公正规则', 8), opt('政府信息不公开', 0), opt('战争时期的情报封锁', 0)] },
];

// ─────────────── 导出 ───────────────

export const PROFESSION_BANKS: Record<ProfessionKey, Question[]> = {
    '数理 (数学/物理)': MATH_Q,
    '生化 (化学/生物)': BIO_Q,
    '商科/计算机': CS_Q,
    '文史政 (历史/政治)': HIS_Q,
};

/**
 * 从 18 题题库中，按 basic / medium / advanced 各随机抽取 3 题，共返回 9 题
 */
export function pickQuestions(profession: ProfessionKey): Question[] {
    const pool = PROFESSION_BANKS[profession] ?? [];

    const basic = pool.filter(q => q.difficulty === 'basic');
    const medium = pool.filter(q => q.difficulty === 'medium');
    const advanced = pool.filter(q => q.difficulty === 'advanced');

    const shuffle = (arr: Question[]) => [...arr].sort(() => Math.random() - 0.5);

    return [
        ...shuffle(basic).slice(0, 3),
        ...shuffle(medium).slice(0, 3),
        ...shuffle(advanced).slice(0, 3),
    ];
}