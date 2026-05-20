import { useRef } from 'react';
import { useTest } from '../../context/TestContext';
import {
    DIM_NAMES,
    DIM_ICONS,
    LEVEL_LABELS,
} from '../../data/dimensions';
import type { Level, DimResult, TestResult } from '../../types';

const LEVEL_COLORS: Record<Level, string> = { H: '#4caf50', M: '#ff9800', L: '#f44336' };

function ScoreBar({ dr }: { dr: DimResult }) {
    const pct = Math.round((dr.finalScore / 8) * 100);
    const penaltyText =
        dr.penalty && dr.penalty > 0
            ? ` (自评偏差扣 ${dr.penalty} 分)`
            : '';

    return (
        <div className="result-dim-row">
            <div className="result-dim-header">
                <span className="result-dim-name">
                    {DIM_ICONS[dr.dimId]} {dr.dimName}
                </span>
                <span
                    className="result-dim-level"
                    style={{ color: LEVEL_COLORS[dr.level] }}
                >
                    {LEVEL_LABELS[dr.level]}
                </span>
            </div>
            <div className="dim-bar-track">
                <div
                    className="dim-bar-fill"
                    style={{
                        width: `${pct}%`,
                        backgroundColor: LEVEL_COLORS[dr.level],
                    }}
                />
            </div>
            <div className="result-dim-meta">
                <span>
                    原始分 {dr.rawScore} → 最终 {dr.finalScore}/8
                </span>
                {dr.selfEval && (
                    <span>
                        | 自评: {LEVEL_LABELS[dr.selfEval]}
                    </span>
                )}
                {penaltyText && (
                    <span className="penalty-text">{penaltyText}</span>
                )}
            </div>
            <p className="result-dim-desc">{dr.description}</p>
        </div>
    );
}

export function ResultScreen() {
    const { state, restart, loadResult } = useTest();
    const { result } = state;
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleExport = () => {
        if (!result) return;
        const exportData: TestResult = result;
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nwti-result-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

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
                // 基本校验
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

        // 重置 input 以允许重复导入同一文件
        e.target.value = '';
    };

    if (!result) {
        return (
            <div className="result-screen">
                <div className="empty-state">结果加载中...</div>
            </div>
        );
    }

    const { dimResults, matchedEntry } = result;

    return (
        <div className="result-screen">
            {/* 头部：人格类型 */}
            <div className="result-header">
                <div className="result-badge">
                    {matchedEntry ? '🎉' : '📊'}
                </div>
                <h1 className="result-type-name">
                    {matchedEntry?.result ?? '未知类型'}
                </h1>
                {matchedEntry?.comment && (
                    <p className="result-type-subtitle">{matchedEntry.comment}</p>
                )}
            </div>

            {/* 4 维等级总览 */}
            <div className="result-levels-strip">
                {dimResults.map(dr => (
                    <div key={dr.dimId} className="level-strip-item">
                        <span className="strip-icon">{DIM_ICONS[dr.dimId]}</span>
                        <span className="strip-label">{DIM_NAMES[dr.dimId]}</span>
                        <span
                            className="strip-level"
                            style={{ color: LEVEL_COLORS[dr.level] }}
                        >
                            {LEVEL_LABELS[dr.level]}
                        </span>
                    </div>
                ))}
            </div>

            {/* 维度画像：条形图 + 解读 */}
            <div className="dimension-chart">
                <h3>维度画像</h3>
                {dimResults.map(dr => (
                    <ScoreBar key={dr.dimId} dr={dr} />
                ))}
            </div>

            {/* 导出 / 导入 */}
            <div className="result-actions">
                <div className="result-actions-row">
                    <button className="btn-outline" onClick={handleExport}>
                        📥 导出结果
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

            {/* 重新测试 */}
            <div className="result-actions">
                <button className="btn-primary" onClick={restart}>
                    重新测试
                </button>
            </div>
        </div>
    );
}