import type { Question, ProfessionKey } from '../types';

/**
 * 专业题库：每专业 18 题（basic × 6 + medium × 6 + advanced × 6）
 * 实际考试从对应专业抽 9 题（每难度随机抽 3 题）
 */

// ─────────────── 数理 (数学/物理) ───────────────
const MATH_Q: Question[] = [
    // basic
    { id: 'math_b1', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '若 3x + 5 = 20，则 x = ?', options: [{ label: '3', value: 0 }, { label: '5', value: 2 }, { label: '7', value: 0 }, { label: '5/3', value: 0 }] },
    { id: 'math_b2', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '三角形内角和是多少？', options: [{ label: '90°', value: 0 }, { label: '180°', value: 2 }, { label: '270°', value: 0 }, { label: '360°', value: 0 }] },
    { id: 'math_b3', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '2³ × 2² 等于？', options: [{ label: '2⁵', value: 4 }, { label: '2⁶', value: 0 }, { label: '4⁵', value: 0 }, { label: '12', value: 0 }] },
    { id: 'math_b4', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '重力加速度 g 约等于？', options: [{ label: '3.0 m/s²', value: 0 }, { label: '9.8 m/s²', value: 4 }, { label: '15 m/s²', value: 0 }, { label: '1.6 m/s²', value: 0 }] },
    { id: 'math_b5', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '下列哪个是质数？', options: [{ label: '15', value: 0 }, { label: '21', value: 0 }, { label: '17', value: 4 }, { label: '27', value: 0 }] },
    { id: 'math_b6', dim: 'professional', difficulty: 'basic', profession: '数理 (数学/物理)' as ProfessionKey, text: '光在真空中的速度约为？', options: [{ label: '3×10⁶ m/s', value: 0 }, { label: '3×10⁸ m/s', value: 4 }, { label: '3×10¹⁰ m/s', value: 0 }, { label: '340 m/s', value: 0 }] },
    // medium
    { id: 'math_m1', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '∫₀¹ x² dx 的值是？', options: [{ label: '1/3', value: 6 }, { label: '1/2', value: 0 }, { label: '1', value: 0 }, { label: '2/3', value: 0 }] },
    { id: 'math_m2', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '质量为 2kg 的物体受 10N 恒力，加速度为？', options: [{ label: '2 m/s²', value: 0 }, { label: '5 m/s²', value: 6 }, { label: '10 m/s²', value: 0 }, { label: '20 m/s²', value: 0 }] },
    { id: 'math_m3', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '矩阵 [[1,2],[3,4]] 的行列式为？', options: [{ label: '10', value: 0 }, { label: '-2', value: 6 }, { label: '2', value: 0 }, { label: '-10', value: 0 }] },
    { id: 'math_m4', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: 'k=200 N/m 的弹簧被压 0.1m，弹性势能为？', options: [{ label: '1 J', value: 6 }, { label: '2 J', value: 0 }, { label: '10 J', value: 0 }, { label: '0.5 J', value: 0 }] },
    { id: 'math_m5', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: 'x² - 5x + 6 = 0 的解为？', options: [{ label: 'x=1,6', value: 0 }, { label: 'x=2,3', value: 6 }, { label: 'x=-2,-3', value: 0 }, { label: 'x=1.5,4', value: 0 }] },
    { id: 'math_m6', dim: 'professional', difficulty: 'medium', profession: '数理 (数学/物理)' as ProfessionKey, text: '匀速圆周运动中，哪个量在变化？', options: [{ label: '速率', value: 0 }, { label: '角速度', value: 0 }, { label: '速度方向', value: 6 }, { label: '周期', value: 0 }] },
    // advanced
    { id: 'math_a1', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: 'f(x)=x³-3x 在 x=1 处切线斜率为？', options: [{ label: '0', value: 8 }, { label: '3', value: 0 }, { label: '-3', value: 0 }, { label: '1', value: 0 }] },
    { id: 'math_a2', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '薛定谔方程描述什么尺度的物理规律？', options: [{ label: '宏观天体', value: 0 }, { label: '微观粒子', value: 8 }, { label: '流体力学', value: 0 }, { label: '热传导', value: 0 }] },
    { id: 'math_a3', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '函数在某点可导是其连续的什么条件？', options: [{ label: '必要不充分', value: 0 }, { label: '充分不必要', value: 8 }, { label: '充要', value: 0 }, { label: '都不', value: 0 }] },
    { id: 'math_a4', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '戴维南定理用于简化什么？', options: [{ label: '电磁场', value: 0 }, { label: '线性电路', value: 8 }, { label: '热力学', value: 0 }, { label: '流体', value: 0 }] },
    { id: 'math_a5', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '正则方程中 H 代表什么？', options: [{ label: '哈密顿量', value: 8 }, { label: '拉格朗日量', value: 0 }, { label: '熵', value: 0 }, { label: '焓', value: 0 }] },
    { id: 'math_a6', dim: 'professional', difficulty: 'advanced', profession: '数理 (数学/物理)' as ProfessionKey, text: '量子力学中归一化条件的作用是？', options: [{ label: '保证能量守恒', value: 0 }, { label: '保证概率总和为1', value: 8 }, { label: '保证能量最低', value: 0 }, { label: '保证唯一解', value: 0 }] },
];

// ─────────────── 生化 (化学/生物) ───────────────
const BIO_Q: Question[] = [
    // basic
    { id: 'bio_b1', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '水的化学式是？', options: [{ label: 'H₂O', value: 2 }, { label: 'CO₂', value: 0 }, { label: 'NaCl', value: 0 }, { label: 'CH₄', value: 0 }] },
    { id: 'bio_b2', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: 'DNA 的全称是什么？', options: [{ label: '脱氧核糖核酸', value: 2 }, { label: '核糖核酸', value: 0 }, { label: '氨基酸', value: 0 }, { label: '脂肪酸', value: 0 }] },
    { id: 'bio_b3', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '光合作用需要什么气体？', options: [{ label: '氧气', value: 0 }, { label: '二氧化碳', value: 4 }, { label: '氮气', value: 0 }, { label: '氢气', value: 0 }] },
    { id: 'bio_b4', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: 'pH=7 的溶液是？', options: [{ label: '酸性', value: 0 }, { label: '碱性', value: 0 }, { label: '中性', value: 4 }, { label: '不确定', value: 0 }] },
    { id: 'bio_b5', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '人体最大的器官是？', options: [{ label: '肝脏', value: 0 }, { label: '皮肤', value: 4 }, { label: '大脑', value: 0 }, { label: '心脏', value: 0 }] },
    { id: 'bio_b6', dim: 'professional', difficulty: 'basic', profession: '生化 (化学/生物)' as ProfessionKey, text: '原子序数代表什么粒子数量？', options: [{ label: '中子', value: 0 }, { label: '质子', value: 4 }, { label: '电子', value: 0 }, { label: '光子', value: 0 }] },
    // medium
    { id: 'bio_m1', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '三羧酸循环（TCA）发生在线粒体的哪里？', options: [{ label: '外膜', value: 0 }, { label: '基质', value: 6 }, { label: '嵴膜', value: 0 }, { label: '膜间隙', value: 0 }] },
    { id: 'bio_m2', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '下列哪个是芳香烃？', options: [{ label: '甲烷', value: 0 }, { label: '苯', value: 6 }, { label: '乙醇', value: 0 }, { label: '丙酮', value: 0 }] },
    { id: 'bio_m3', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: 'PCR 技术用于什么？', options: [{ label: '蛋白质纯化', value: 0 }, { label: 'DNA 扩增', value: 6 }, { label: '细胞培养', value: 0 }, { label: '色谱分析', value: 0 }] },
    { id: 'bio_m4', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '氧化剂在反应中会？', options: [{ label: '失去电子', value: 0 }, { label: '得到电子', value: 6 }, { label: '释放质子', value: 0 }, { label: '释放中子', value: 0 }] },
    { id: 'bio_m5', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '真核与原核的主要区别是有无？', options: [{ label: '细胞壁', value: 0 }, { label: '核膜包被的细胞核', value: 6 }, { label: '核糖体', value: 0 }, { label: '细胞膜', value: 0 }] },
    { id: 'bio_m6', dim: 'professional', difficulty: 'medium', profession: '生化 (化学/生物)' as ProfessionKey, text: '催化剂的作用是？', options: [{ label: '增加反应物浓度', value: 0 }, { label: '降低活化能', value: 6 }, { label: '改变平衡常数', value: 0 }, { label: '提高温度', value: 0 }] },
    // advanced
    { id: 'bio_a1', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'CRISPR-Cas9 中 Cas9 是什么？', options: [{ label: 'RNA 分子', value: 0 }, { label: '核酸内切酶', value: 8 }, { label: '病毒载体', value: 0 }, { label: '质粒', value: 0 }] },
    { id: 'bio_a2', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'sp³ 杂化的键角约为？', options: [{ label: '180°', value: 0 }, { label: '120°', value: 0 }, { label: '109.5°', value: 8 }, { label: '90°', value: 0 }] },
    { id: 'bio_a3', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'Western Blot 用于检测什么？', options: [{ label: 'DNA', value: 0 }, { label: '特定蛋白质', value: 8 }, { label: 'RNA', value: 0 }, { label: '代谢物', value: 0 }] },
    { id: 'bio_a4', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'ΔG < 0 表示反应？', options: [{ label: '非自发', value: 0 }, { label: '自发', value: 8 }, { label: '平衡', value: 0 }, { label: '需催化剂', value: 0 }] },
    { id: 'bio_a5', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: '离子通道门控机制不包括？', options: [{ label: '电压门控', value: 0 }, { label: '配体门控', value: 0 }, { label: '温度门控', value: 0 }, { label: '质量门控', value: 8 }] },
    { id: 'bio_a6', dim: 'professional', difficulty: 'advanced', profession: '生化 (化学/生物)' as ProfessionKey, text: 'NMR 谱图中化学位移的单位是？', options: [{ label: 'Hz', value: 0 }, { label: 'ppm', value: 8 }, { label: 'T', value: 0 }, { label: 'J/mol', value: 0 }] },
];

// ─────────────── 商科/计算机 ───────────────
const CS_Q: Question[] = [
    // basic
    { id: 'cs_b1', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: '二进制 1010 的十进制是？', options: [{ label: '8', value: 0 }, { label: '10', value: 2 }, { label: '12', value: 0 }, { label: '14', value: 0 }] },
    { id: 'cs_b2', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: 'Excel 求和函数是？', options: [{ label: 'AVERAGE', value: 0 }, { label: 'SUM', value: 2 }, { label: 'COUNT', value: 0 }, { label: 'MAX', value: 0 }] },
    { id: 'cs_b3', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: '<h1> 标签在 HTML 中表示？', options: [{ label: '段落', value: 0 }, { label: '一级标题', value: 4 }, { label: '链接', value: 0 }, { label: '图片', value: 0 }] },
    { id: 'cs_b4', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: '一个字节 byte 由多少 bit 组成？', options: [{ label: '4', value: 0 }, { label: '8', value: 4 }, { label: '16', value: 0 }, { label: '32', value: 0 }] },
    { id: 'cs_b5', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: '供给曲线通常向哪个方向倾斜？', options: [{ label: '向右上方', value: 4 }, { label: '向右下方', value: 0 }, { label: '水平', value: 0 }, { label: '垂直', value: 0 }] },
    { id: 'cs_b6', dim: 'professional', difficulty: 'basic', profession: '商科/计算机' as ProfessionKey, text: 'SQL 中 SELECT...FROM 的作用是？', options: [{ label: '插入数据', value: 0 }, { label: '查询数据', value: 4 }, { label: '删除数据', value: 0 }, { label: '创建表', value: 0 }] },
    // medium
    { id: 'cs_m1', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: '时间复杂度 O(n log n) 属于哪种排序？', options: [{ label: '冒泡', value: 0 }, { label: '归并排序', value: 6 }, { label: '插入', value: 0 }, { label: '选择', value: 0 }] },
    { id: 'cs_m2', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: 'NPV（净现值）为负时，项目应该？', options: [{ label: '立即投资', value: 0 }, { label: '不建议投资', value: 6 }, { label: '增加杠杆', value: 0 }, { label: '无法判断', value: 0 }] },
    { id: 'cs_m3', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: '栈 Stack 的特点是？', options: [{ label: 'FIFO', value: 0 }, { label: 'LIFO', value: 6 }, { label: '随机存取', value: 0 }, { label: '按索引', value: 0 }] },
    { id: 'cs_m4', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: '边际成本等于边际收益时，企业达到？', options: [{ label: '亏损最大', value: 0 }, { label: '利润最大', value: 6 }, { label: '收入最小', value: 0 }, { label: '收支平衡', value: 0 }] },
    { id: 'cs_m5', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: 'RESTful API 中 GET 请求用于？', options: [{ label: '创建资源', value: 0 }, { label: '获取资源', value: 6 }, { label: '更新资源', value: 0 }, { label: '删除资源', value: 0 }] },
    { id: 'cs_m6', dim: 'professional', difficulty: 'medium', profession: '商科/计算机' as ProfessionKey, text: 'CAP 定理中，P 代表什么？', options: [{ label: '性能', value: 0 }, { label: '分区容忍性', value: 6 }, { label: '一致性', value: 0 }, { label: '持久化', value: 0 }] },
    // advanced
    { id: 'cs_a1', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: '哈希冲突的开放寻址法属于？', options: [{ label: '链表法', value: 0 }, { label: '线性探测', value: 8 }, { label: '布隆过滤', value: 0 }, { label: 'LRU 缓存', value: 0 }] },
    { id: 'cs_a2', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: 'Black-Scholes 模型用于？', options: [{ label: '用户行为预测', value: 0 }, { label: '期权定价', value: 8 }, { label: '信用评分', value: 0 }, { label: '库存管理', value: 0 }] },
    { id: 'cs_a3', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: 'TCP 三次握手中第二次包带什么标志？', options: [{ label: 'SYN', value: 0 }, { label: 'SYN+ACK', value: 8 }, { label: 'ACK', value: 0 }, { label: 'FIN', value: 0 }] },
    { id: 'cs_a4', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: '费雪方程式 MV=PY 中 M 是？', options: [{ label: '通货膨胀率', value: 0 }, { label: '货币供给量', value: 8 }, { label: '实际产出', value: 0 }, { label: '流通速度', value: 0 }] },
    { id: 'cs_a5', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: 'Redis 的持久化机制 RDB 是指？', options: [{ label: '追加日志', value: 0 }, { label: '内存快照', value: 8 }, { label: '主从复制', value: 0 }, { label: '数据结构编码', value: 0 }] },
    { id: 'cs_a6', dim: 'professional', difficulty: 'advanced', profession: '商科/计算机' as ProfessionKey, text: '詹森指数（Jensen\'s alpha）衡量什么？', options: [{ label: '波动率', value: 0 }, { label: '超额收益能力', value: 8 }, { label: '夏普比率', value: 0 }, { label: '贝塔系数', value: 0 }] },
];

// ─────────────── 文史政 (历史/政治) ───────────────
const HIS_Q: Question[] = [
    // basic
    { id: 'his_b1', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '中国第一个统一王朝是？', options: [{ label: '商朝', value: 0 }, { label: '秦朝', value: 2 }, { label: '周朝', value: 0 }, { label: '汉朝', value: 0 }] },
    { id: 'his_b2', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '《红楼梦》的作者是？', options: [{ label: '施耐庵', value: 0 }, { label: '曹雪芹', value: 2 }, { label: '罗贯中', value: 0 }, { label: '吴承恩', value: 0 }] },
    { id: 'his_b3', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '二战中诺曼底登陆发生在哪一年？', options: [{ label: '1942', value: 0 }, { label: '1944', value: 4 }, { label: '1943', value: 0 }, { label: '1945', value: 0 }] },
    { id: 'his_b4', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '以下哪个是三权分立中的三权之一？', options: [{ label: '立法权', value: 4 }, { label: '征税权', value: 0 }, { label: '战争权', value: 0 }, { label: '教育权', value: 0 }] },
    { id: 'his_b5', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: '文艺复兴发源于哪个国家？', options: [{ label: '法国', value: 0 }, { label: '意大利', value: 4 }, { label: '英国', value: 0 }, { label: '德国', value: 0 }] },
    { id: 'his_b6', dim: 'professional', difficulty: 'basic', profession: '文史政 (历史/政治)' as ProfessionKey, text: 'UN 安理会常任理事国不包括？', options: [{ label: '法国', value: 0 }, { label: '英国', value: 0 }, { label: '德国', value: 4 }, { label: '俄罗斯', value: 0 }] },
    // medium
    { id: 'his_m1', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '《社会契约论》的作者是？', options: [{ label: '孟德斯鸠', value: 0 }, { label: '卢梭', value: 6 }, { label: '伏尔泰', value: 0 }, { label: '狄德罗', value: 0 }] },
    { id: 'his_m2', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '唐朝由盛转衰的标志性事件是？', options: [{ label: '黄巾起义', value: 0 }, { label: '安史之乱', value: 6 }, { label: '澶渊之盟', value: 0 }, { label: '陈桥兵变', value: 0 }] },
    { id: 'his_m3', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '布雷顿森林体系确立了哪种货币的国际地位？', options: [{ label: '英镑', value: 0 }, { label: '美元', value: 6 }, { label: '日元', value: 0 }, { label: '欧元', value: 0 }] },
    { id: 'his_m4', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '以下哪个不属于唐宋八大家？', options: [{ label: '苏轼', value: 0 }, { label: '欧阳修', value: 0 }, { label: '李清照', value: 6 }, { label: '柳宗元', value: 0 }] },
    { id: 'his_m5', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '威斯特伐利亚体系确立了国际关系中的什么原则？', options: [{ label: '霸权', value: 0 }, { label: '主权平等', value: 6 }, { label: '均势', value: 0 }, { label: '集体安全', value: 0 }] },
    { id: 'his_m6', dim: 'professional', difficulty: 'medium', profession: '文史政 (历史/政治)' as ProfessionKey, text: '史记的作者是？', options: [{ label: '班固', value: 0 }, { label: '司马迁', value: 6 }, { label: '范晔', value: 0 }, { label: '陈寿', value: 0 }] },
    // advanced
    { id: 'his_a1', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '福柯在《规训与惩罚》中提出的核心概念是？', options: [{ label: '社会契约', value: 0 }, { label: '全景敞视主义', value: 8 }, { label: '阶级意识', value: 0 }, { label: '科层制', value: 0 }] },
    { id: 'his_a2', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '春秋三传不包括？', options: [{ label: '左传', value: 0 }, { label: '公羊传', value: 0 }, { label: '周礼', value: 8 }, { label: '谷梁传', value: 0 }] },
    { id: 'his_a3', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '三十年战争结束后签订的条约是？', options: [{ label: '乌德勒支条约', value: 0 }, { label: '威斯特伐利亚和约', value: 8 }, { label: '明斯特和约', value: 0 }, { label: '巴黎和约', value: 0 }] },
    { id: 'his_a4', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '胡适提出的文学革命主张是？', options: [{ label: '文言复兴', value: 0 }, { label: '八不主义', value: 8 }, { label: '民族主义', value: 0 }, { label: '浪漫主义', value: 0 }] },
    { id: 'his_a5', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '柏拉图《理想国》中卫道士阶层的美德是？', options: [{ label: '智慧', value: 8 }, { label: '勇气', value: 0 }, { label: '节制', value: 0 }, { label: '正义', value: 0 }] },
    { id: 'his_a6', dim: 'professional', difficulty: 'advanced', profession: '文史政 (历史/政治)' as ProfessionKey, text: '汉娜·阿伦特提出的"平庸之恶"针对的是？', options: [{ label: '极端主义', value: 0 }, { label: '官僚体制中的麻木服从', value: 8 }, { label: '战争罪行', value: 0 }, { label: '意识形态冲突', value: 0 }] },
];

// ─────────────── 导出 ───────────────

export const PROFESSION_BANKS: Record<ProfessionKey, Question[]> = {
    '数理 (数学/物理)': MATH_Q,
    '生化 (化学/生物)': BIO_Q,
    '商科/计算机': CS_Q,
    '文史政 (历史/政治)': HIS_Q,
};

/**
 * 从题库中为指定专业抽取 9 题（每难度 3 题，shuffle 后取前 3）
 */
export function pickQuestions(profession: ProfessionKey, countPerDifficulty = 3): Question[] {
    const pool = PROFESSION_BANKS[profession] ?? [];
    const difficulties = ['basic', 'medium', 'advanced'] as const;
    const result: Question[] = [];

    for (const diff of difficulties) {
        const candidates = pool.filter(q => q.difficulty === diff);
        const shuffled = [...candidates].sort(() => Math.random() - 0.5);
        result.push(...shuffled.slice(0, countPerDifficulty));
    }

    return result;
}