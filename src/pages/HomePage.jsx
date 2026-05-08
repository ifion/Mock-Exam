// HomePage.jsx
import { getHistory, resetAllData, getPool } from '../utils/storage.js'
import { GRADE_LEVELS } from '../utils/quizLogic.js'

export default function HomePage({ onStart }) {
  const history = getHistory()

  // Show pool progress for the most recent session's grade level
  const lastSession  = history.length > 0 ? history[history.length - 1] : null
  const lastGradeId  = lastSession?.gradeLevelId ?? null
  const gradeConfig  = lastGradeId ? GRADE_LEVELS.find(g => g.id === lastGradeId) : null
  const pool         = gradeConfig ? getPool(`pool_${lastGradeId}`) : null
  const poolTotal    = gradeConfig ? gradeConfig.poolIds.length : 0
  const totalSeen    = pool !== null ? Math.max(0, poolTotal - pool.length) : 0
  const progressPct  = poolTotal > 0 ? Math.min(100, Math.round((totalSeen / poolTotal) * 100)) : 0

  function getGradeLabel(id) {
    return GRADE_LEVELS.find(g => g.id === id)?.label ?? id ?? '—'
  }

  function handleReset() {
    if (confirm('This will clear all your test history and reset all question pools. Continue?')) {
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
            Practice exam for the Lagos State Public Service Confirmation &amp;
            Compulsory Examination. Questions rotate by grade level — every question
            appears before any repeats.
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
                {Math.round(
                  history.reduce((a, s) => a + (s.score.correct / s.score.total) * 100, 0) /
                  history.length
                )}%
              </span>
              <span className="stat-label">Avg Score</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">
                {Math.max(...history.map(s => Math.round((s.score.correct / s.score.total) * 100)))}%
              </span>
              <span className="stat-label">Best Score</span>
            </div>
          </div>
        )}

        {/* Question pool progress — only if a grade pool exists */}
        {gradeConfig && (
          <div className="pool-progress">
            <div className="pool-header">
              <span className="pool-label">
                Question Coverage
                <span className="pool-grade-tag">{gradeConfig.label}</span>
              </span>
              <span className="pool-count">{totalSeen} / {poolTotal} seen</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <p className="pool-note">
              {pool === null || pool.length === poolTotal
                ? 'Fresh start — questions will be randomly shuffled.'
                : pool.length === 0
                ? `🎉 All ${poolTotal} questions covered! Pool will reset for next session.`
                : `${pool.length} of ${poolTotal} questions remaining in current cycle.`}
            </p>
          </div>
        )}

        {/* No pool yet (first visit) */}
        {!gradeConfig && (
          <div className="pool-progress">
            <div className="pool-header">
              <span className="pool-label">Question Coverage</span>
              <span className="pool-count">Not started</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '0%' }} />
            </div>
            <p className="pool-note">
              Select your grade level to begin. Questions rotate so every item is
              seen before any repeats.
            </p>
          </div>
        )}

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
                      <span className="history-grade">{getGradeLabel(s.gradeLevelId)}</span>
                      <span className="history-mode">
                        {s.mode === 'immediate' ? '⚡ Immediate' : '📋 End Result'}
                      </span>
                      <span className="history-date">
                        {new Date(s.date).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </span>
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
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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