import { useCallback } from 'react';
import { useTest } from '../../context/TestContext';
import { DIM_NAMES, DIM_ICONS } from '../../data/dimensions';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

interface Phase {
    label: string;
    start: number;
    end: number;
}

function getPhases(): { phases: Phase[]; phaseByIndex: Map<number, number> } {
    const phases: Phase[] = [
        { label: '专业选择', start: 0, end: 0 },
        { label: '自评', start: 1, end: 3 },
        { label: DIM_ICONS.professional + ' ' + DIM_NAMES.professional, start: 4, end: 6 },
        { label: '📋 综合评估', start: 7, end: 33 },
    ];
    const phaseByIndex = new Map<number, number>();
    for (const [pi, p] of phases.entries()) {
        for (let i = p.start; i <= p.end; i++) {
            phaseByIndex.set(i, pi);
        }
    }
    return { phases, phaseByIndex };
}

const { phases, phaseByIndex } = getPhases();

export function TestScreen() {
    const {
        state,
        answer,
        goBack,
        submit,
        totalCount,
        answeredCount,
        allAnswered,
    } = useTest();

    const { questions, answers, currentIndex } = state;

    const currentQuestion = questions[currentIndex] ?? null;
    const progress = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;
    const currentPhaseIdx = currentIndex !== null ? (phaseByIndex.get(currentIndex) ?? -1) : -1;

    const handleOptionClick = useCallback(
        (optionValue: number) => {
            if (!currentQuestion) return;
            answer(currentQuestion.id, optionValue);
        },
        [answer, currentQuestion],
    );

    const handleNavDot = useCallback(
        (idx: number) => {
            goBack(idx);
        },
        [goBack],
    );

    if (!currentQuestion) {
        return (
            <div className="test-screen">
                <div className="empty-state">题目加载中...</div>
            </div>
        );
    }

    const currentAnswer = answers[currentQuestion.id];

    return (
        <div className="test-screen">
            {/* 进度条 */}
            <div className="progress-section">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="progress-text">
                    {answeredCount} / {totalCount}
                </span>
            </div>

            {/* 阶段指示器 */}
            <div className="phase-indicator">
                {phases.map((p, pi) => (
                    <div
                        key={pi}
                        className={`phase-chip ${pi === currentPhaseIdx ? 'active' : ''} ${pi < currentPhaseIdx ? 'done' : ''}`}
                    >
                        {p.label}
                    </div>
                ))}
            </div>

            {/* 题号导航 */}
            <div className="question-nav">
                {questions.map((q, qi) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isActive = qi === currentIndex;
                    return (
                        <button
                            key={q.id}
                            className={`nav-dot ${isActive ? 'active' : ''} ${isAnswered ? 'answered' : ''}`}
                            onClick={() => handleNavDot(qi)}
                            title={`第 ${qi + 1} 题${isAnswered ? ' (已答)' : ''}`}
                        >
                            {qi + 1}
                        </button>
                    );
                })}
            </div>

            {/* 题目内容 */}
            <div className="question-card">
                <div className="question-meta">
                    <span className="question-number">第 {currentIndex + 1} 题</span>
                    {currentQuestion.dim === 'professional' ? (
                        <span className="question-dim">
                            {DIM_ICONS[currentQuestion.dim]} {DIM_NAMES[currentQuestion.dim]}
                        </span>
                    ) : (
                        <span className="question-dim obscure">
                            📋 综合评估
                        </span>
                    )}
                    {currentQuestion.difficulty && (
                        <span className={`difficulty-badge ${currentQuestion.difficulty}`}>
                            {currentQuestion.difficulty === 'basic' ? '基础' :
                                currentQuestion.difficulty === 'medium' ? '中等' : '困难'}
                        </span>
                    )}
                </div>
                <h2
                    className="question-text"
                    dangerouslySetInnerHTML={{
                        __html: currentQuestion.text
                            .replace(/<sup>/g, '<sup>')
                            .replace(/<\/sup>/g, '</sup>')
                            .replace(/<sub>/g, '<sub>')
                            .replace(/<\/sub>/g, '</sub>'),
                    }}
                />

                <div className="options-list">
                    {currentQuestion.options.map((opt, oi) => {
                        const isSelected = currentAnswer === opt.value;
                        return (
                            <button
                                key={`${currentQuestion.id}-${oi}`}
                                className={`option-btn ${isSelected ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(opt.value)}
                            >
                                <span className="option-label">{OPTION_LABELS[oi] ?? oi + 1}</span>
                                <span
                                    className="option-text"
                                    dangerouslySetInnerHTML={{
                                        __html: opt.label
                                            .replace(/<sup>/g, '<sup>')
                                            .replace(/<\/sup>/g, '</sup>')
                                            .replace(/<sub>/g, '<sub>')
                                            .replace(/<\/sub>/g, '</sub>'),
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 底部操作 */}
            <div className="action-bar">
                <button
                    className="btn-secondary"
                    onClick={() => handleNavDot(currentIndex - 1)}
                    disabled={currentIndex === 0}
                >
                    ← 上一题
                </button>

                <div className="action-center">
                    {allAnswered ? (
                        <button className="btn-primary" onClick={submit}>
                            查看结果 ✨
                        </button>
                    ) : (
                        <span className="action-hint">
                            全部答完后即可查看结果
                        </span>
                    )}
                </div>

                <button
                    className="btn-secondary"
                    onClick={() => handleNavDot(currentIndex + 1)}
                    disabled={currentIndex >= totalCount - 1}
                >
                    下一题 →
                </button>
            </div>
        </div>
    );
}