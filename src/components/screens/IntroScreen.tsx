import { useRef } from 'react';
import { useTest } from '../../context/TestContext';
import { DIM_NAMES, DIM_ICONS, DIM_DESCS } from '../../data/dimensions';
import type { DimId, TestResult } from '../../types';

const DIM_ORDER: DimId[] = ['professional', 'responsibility', 'morality', 'funny'];

export function IntroScreen() {
    const { startTest, loadResult } = useTest();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const parsed = JSON.parse(evt.target?.result as string) as TestResult;
                if (!parsed.dimResults || !Array.isArray(parsed.dimResults)) {
                    alert('无效的结果文件格式');
                    return;
                }
                loadResult(parsed);
            } catch {
                alert('无法解析 JSON 文件，请确认文件格式正确');
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    };

    return (
        <div className="intro-screen">
            <div className="intro-header">
                <h1 className="intro-title">NW人格测试</h1>
                <p className="intro-subtitle">
                    看看你最像NW里面的谁（意味深
                </p>
            </div>

            {/* 维度卡片 */}
            <div className="intro-dimensions">
                <h3>测试维度</h3>
                <div className="dimension-grid">
                    {DIM_ORDER.map(dimId => (
                        <div key={dimId} className="dimension-card">
                            <span className="dimension-icon">{DIM_ICONS[dimId]}</span>
                            <div className="dimension-body">
                                <strong>{DIM_NAMES[dimId]}</strong>
                                <p>{DIM_DESCS[dimId]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 测试规则 */}
            <div className="intro-rules">
                <h3>测试规则</h3>
                <ul>
                    <li>共计 <strong>40</strong> 道题目，约 5-8 分钟完成</li>
                    <li>第一题为专业选择，后续包含自评、专业题和综合情景题</li>
                    <li>请根据你的真实想法作答，无需多虑</li>
                    <li>你可以随时返回修改之前的答案</li>
                    <li>完成所有题目后自动生成你的专属人格报告</li>
                </ul>
            </div>

            {/* 开始测试 + 导入结果 */}
            <div className="intro-start">
                <button className="btn-primary btn-start" onClick={startTest}>
                    开始测试 →
                </button>
                <button className="btn-outline" onClick={handleImportClick}>
                    📤 导入结果
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    style={{ display: 'none' }}
                    onChange={handleImport}
                />
            </div>
        </div>
    );
}
