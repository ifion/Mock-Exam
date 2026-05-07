// HomePage.jsx
import { getHistory, clearHistory, resetAllData } from '../utils/storage.js'
import { getPool } from '../utils/storage.js'

export default function HomePage({ onStart }) {
  const history = getHistory()
  const pool = getPool()
  const totalSeen = pool ? 200 - pool.length : 0
  const progressPct = Math.min(100, Math.round((totalSeen / 200) * 100))

  function handleReset() {
    if (confirm('This will clear all your test history and reset the question pool. Continue?')) {
      resetAllData()
      window.location.reload()
    }
  }

  return (
    <div className="home-page">
      <div className="home-inner">
        {/* Brand */}
        <div className="brand-block">
          <div className="brand-badge">LSCS PREP</div>
          <h1 className="home-title">Lagos State Civil<br />Service CBT</h1>
          <p className="home-subtitle">
            Practice exam for Lagos State Public Service. 200 questions across
            4 sessions — every question appears before any repeats.
          </p>
        </div>

        {/* Stats row */}
        {history.length > 0 && (
          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-num">{history.length}</span>
              <span className="stat-label">Sessions Taken</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">
                {history.length > 0
                  ? Math.round(history.reduce((a, s) => a + (s.score.correct / s.score.total) * 100, 0) / history.length)
                  : 0}%
              </span>
              <span className="stat-label">Avg Score</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">
                {history.length > 0 ? Math.max(...history.map(s => Math.round((s.score.correct / s.score.total) * 100))) : 0}%
              </span>
              <span className="stat-label">Best Score</span>
            </div>
          </div>
        )}

        {/* Question pool progress */}
        <div className="pool-progress">
          <div className="pool-header">
            <span className="pool-label">Question Coverage</span>
            <span className="pool-count">{Math.min(totalSeen, 200)} / 200 seen</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="pool-note">
            {pool === null || pool.length === 200
              ? 'Fresh start — questions will be randomly shuffled.'
              : pool.length === 0
              ? '🎉 All 200 questions covered! Pool will reset for next session.'
              : `${pool.length} questions remaining in current cycle.`}
          </p>
        </div>

        {/* Recent sessions */}
        {history.length > 0 && (
          <div className="history-block">
            <h3 className="history-title">Recent Sessions</h3>
            <div className="history-list">
              {[...history].reverse().slice(0, 5).map((s, i) => {
                const pct = Math.round((s.score.correct / s.score.total) * 100)
                return (
                  <div key={i} className="history-item">
                    <div className="history-left">
                      <span className="history-mode">
                        {s.mode === 'immediate' ? '⚡ Immediate' : '📋 End Result'}
                      </span>
                      <span className="history-date">{new Date(s.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="history-right">
                      <span className={`history-score ${pct >= 70 ? 'pass' : pct >= 50 ? 'fair' : 'fail'}`}>
                        {s.score.correct}/{s.score.total} · {pct}%
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="cta-block">
          <button className="btn-primary btn-xl" onClick={onStart}>
            <span>Take Test</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {history.length > 0 && (
            <button className="btn-ghost btn-sm" onClick={handleReset}>
              Reset all data
            </button>
          )}
        </div>
      </div>
    </div>
  )
}