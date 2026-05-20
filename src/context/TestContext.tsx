import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';
import type { TestState, Question, ProfessionKey, DimId } from '../types';
import { PROF_Q, SELF_EVAL_QS, RESP_QS, MORAL_QS, FUNNY_QS } from '../data/questions';
import { pickQuestions } from '../data/professionQuestions';
import { calcResults } from '../engine/scoring';
import { PROFESSION_LABELS } from '../types';

// ========== 从 Q1 答案值推断专业 ==========

function professionFromQ1Value(value: number): ProfessionKey | null {
    const idx = Math.round(value);
    if (idx >= 0 && idx < PROFESSION_LABELS.length) {
        return PROFESSION_LABELS[idx];
    }
    return null;
}

// ========== 题目构建 (不含 Q1) ==========

function buildRemainingQuestions(profession: ProfessionKey): Question[] {
    const profQs = pickQuestions(profession);
    return [
        ...SELF_EVAL_QS, // Q2-Q4: 自评 (维度 2/3/4)
        ...profQs,       // 9 题专业 (3 难度 × 3 题)
        ...RESP_QS,      // 9 题责任
        ...MORAL_QS,     // 9 题道德
        ...FUNNY_QS,     // 9 题乐子
    ];
}

// ========== Actions ==========

type TestAction =
    | { type: 'START_TEST' }
    | { type: 'ANSWER'; questionId: string; value: number }
    | { type: 'GO_BACK'; targetIndex: number }
    | { type: 'SUBMIT' }
    | { type: 'RESTART' }
    | { type: 'LOAD_RESULT'; result: TestState['result'] };

// ========== Initial State ==========

const initialState: TestState = {
    screen: 'intro',
    profession: null,
    currentIndex: 0,
    answers: {},
    questions: [],
    result: null,
};

// ========== Reducer ==========

function testReducer(state: TestState, action: TestAction): TestState {
    switch (action.type) {
        case 'START_TEST':
            return {
                ...state,
                screen: 'test',
                profession: null,
                currentIndex: 0,
                questions: [PROF_Q], // 只有 Q1
                answers: {},
                result: null,
            };

        case 'ANSWER': {
            const newAnswers = { ...state.answers, [action.questionId]: action.value };

            // Q1 回答后：根据选择的专业动态构建剩余题目
            if (action.questionId === PROF_Q.id && state.questions.length === 1) {
                const profession = professionFromQ1Value(action.value);
                if (profession) {
                    const remainingQs = buildRemainingQuestions(profession);
                    const fullQuestions = [PROF_Q, ...remainingQs];
                    return {
                        ...state,
                        profession,
                        questions: fullQuestions,
                        answers: newAnswers,
                        currentIndex: 1, // 自动跳到下一题
                    };
                }
            }

            // 答完一题后自动跳到下一个未答的题
            const nextUnanswered = state.questions.findIndex((_q, i) => i > state.currentIndex && newAnswers[state.questions[i].id] === undefined);
            const nextIndex = nextUnanswered !== -1 ? nextUnanswered : state.questions.length - 1;

            return {
                ...state,
                answers: newAnswers,
                currentIndex: nextIndex,
            };
        }

        case 'GO_BACK': {
            const { questions } = state;
            const targetIndex = action.targetIndex;
            if (targetIndex < 0 || targetIndex >= questions.length) return state;

            const targetId = questions[targetIndex]?.id;
            if (!targetId) return state;

            // 如果回到 Q1 且题目已动态加载 → 回退到只有 Q1，清除后续答案
            if (targetIndex === 0 && state.questions.length > 1) {
                return {
                    ...state,
                    profession: null,
                    currentIndex: 0,
                    questions: [PROF_Q],
                    answers: { [PROF_Q.id]: state.answers[PROF_Q.id] ?? undefined as unknown as number },
                };
            }

            // 保留 0 到 targetIndex 的答案，清除之后的
            const newAnswers: Record<string, number> = {};
            for (let i = 0; i <= targetIndex; i++) {
                const qId = questions[i].id;
                if (state.answers[qId] !== undefined) {
                    newAnswers[qId] = state.answers[qId];
                }
            }

            return { ...state, currentIndex: targetIndex, answers: newAnswers };
        }

        case 'SUBMIT': {
            const dimAnswers: Record<DimId, Record<string, number>> = {
                professional: {},
                responsibility: {},
                morality: {},
                funny: {},
            };

            // Q1 和自评题(Q2-Q4)不参与维度分数计算
            const excludeIds = new Set([
                PROF_Q.id,
                ...SELF_EVAL_QS.map(q => q.id),
            ]);

            for (const q of state.questions) {
                const score = state.answers[q.id];
                if (score !== undefined && !excludeIds.has(q.id)) {
                    dimAnswers[q.dim][q.id] = score;
                }
            }

            // 提取自评答案 (Q2-Q4)
            const selfEvalAnswers = SELF_EVAL_QS
                .filter(se => state.answers[se.id] !== undefined)
                .map(se => ({ dimId: se.dim, value: state.answers[se.id] }));

            const result = calcResults({ dimAnswers, selfEvalAnswers });
            return { ...state, screen: 'result', result };
        }

        case 'RESTART':
            return { ...initialState };

        case 'LOAD_RESULT':
            return { ...state, screen: 'result', result: action.result };

        default:
            return state;
    }
}

// ========== Context ==========

interface TestContextValue {
    state: TestState;
    startTest: () => void;
    answer: (questionId: string, value: number) => void;
    goBack: (targetIndex: number) => void;
    submit: () => void;
    restart: () => void;
    loadResult: (result: TestState['result']) => void;
    totalCount: number;
    answeredCount: number;
    allAnswered: boolean;
}

const TestContext = createContext<TestContextValue | null>(null);

export function TestProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(testReducer, initialState);

    const startTest = useCallback(
        () => dispatch({ type: 'START_TEST' }),
        [],
    );
    const answer = useCallback(
        (questionId: string, value: number) => dispatch({ type: 'ANSWER', questionId, value }),
        [],
    );
    const goBack = useCallback(
        (targetIndex: number) => dispatch({ type: 'GO_BACK', targetIndex }),
        [],
    );
    const submit = useCallback(() => dispatch({ type: 'SUBMIT' }), []);
    const restart = useCallback(() => dispatch({ type: 'RESTART' }), []);
    const loadResult = useCallback(
        (result: TestState['result']) => dispatch({ type: 'LOAD_RESULT', result }),
        [],
    );

    const totalCount = state.questions.length;
    const answeredCount = useMemo(
        () => state.questions.filter(q => state.answers[q.id] !== undefined).length,
        [state.questions, state.answers],
    );
    // 只有 Q1 时（动态题目未加载）不算全部完成，必须回到完整题目列表才允许结算
    const isFullTest = state.questions.length > 1;
    const allAnswered = isFullTest && answeredCount >= totalCount;

    const value: TestContextValue = {
        state,
        startTest,
        answer,
        goBack,
        submit,
        restart,
        loadResult,
        totalCount,
        answeredCount,
        allAnswered,
    };

    return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

export function useTest(): TestContextValue {
    const ctx = useContext(TestContext);
    if (!ctx) {
        throw new Error('useTest must be used within <TestProvider>');
    }
    return ctx;
}