import { useTest } from '../../context/TestContext';

export function DonateScreen() {
    const { goReturn } = useTest();

    return (
        <div className="donate-screen">
            <header className="donate-header">
                <h1 className="result-type-name">🎁 支持 NWTI</h1>
                <p className="donate-subtitle">
                    如果你觉得这个测试有点意思，欢迎支持一下～
                </p>
            </header>

            {/* 关于本项目 */}
            <div className="donate-card">
                <h3>📖 关于本项目</h3>
                <p>
                    <strong>NWTI (NW Type Indicator)</strong>{' '}
                    是一套基于 NW 人物特点构建的人格匹配测试。
                    通过学术力、靠谱程度、拟人程度、招笑程度四个维度，
                    （并不）科学地把你映射到 NW 存在或曾经存在的某个知名人物。
                </p>
                <p className="donate-tech">
                    技术栈：React + TypeScript + Vite　·　纯前端，无后端，无数据收集
                </p>
            </div>

            {/* GitHub 开源 */}
            <div className="donate-card donate-star-card">
                <h3>⭐ 开源地址</h3>
                <p>
                    项目完全开源，欢迎来 GitHub 看看源码、提 issue、发 PR～
                </p>
                <a
                    className="donate-star-btn"
                    href="https://github.com/ID-izlq-Github/NWTI"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg height="20" viewBox="0 0 16 16" width="20" className="github-icon">
                        <path
                            fill="currentColor"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        />
                    </svg>
                    去 GitHub ⭐ Star 一下～
                </a>
            </div>

            {/* 打赏二维码 */}
            <div className="donate-card">
                <h3>💝 打赏作者</h3>
                <p>如果觉得够有乐子，欢迎请作者喝杯奶茶 ☕</p>
                <div className="donate-qr-wrapper">
                    <img
                        src={import.meta.env.BASE_URL + 'donate-qr.png'}
                        alt="打赏二维码"
                        className="donate-qr-img"
                    />
                </div>
            </div>

            {/* 返回按钮 */}
            <div className="donate-actions">
                <button className="btn btn-secondary donate-back-btn" onClick={goReturn}>
                    ← 返回
                </button>
            </div>
        </div>
    );
}
