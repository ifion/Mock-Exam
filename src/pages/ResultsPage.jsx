// ResultsPage.jsx
import { useState } from 'react'
import { getCorrectIndex, isCorrect, GRADE_LEVELS } from '../utils/quizLogic.js'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

// Section metadata in display order
const SECTIONS = [
  { key: 'PSR',  label: 'Public Service Rules',   short: 'PSR',  min: 1,   max: 50  },
  { key: 'GEN',  label: 'General Knowledge',       short: 'GEN',  min: 51,  max: 200 },
  { key: 'FR',   label: 'Financial Regulations',   short: 'FR',   min: 201, max: 350 },
  { key: 'ENG',  label: 'English Language',         short: 'ENG',  min: 351, max: 400 },
  { key: 'MATH', label: 'Mathematics',              short: 'MATH', min: 401, max: 450 },
]

function getSection(questionId) {
  return SECTIONS.find(s => questionId >= s.min && questionId <= s.max) ?? null
}

/** Build per-section stats from questions + userAnswers */
function buildSectionStats(questions, userAnswers) {
  const stats = {}

  questions.forEach(q => {
    const sec = getSection(q.id)
    if (!sec) return
    if (!stats[sec.key]) {
      stats[sec.key] = { ...sec, correct: 0, wrong: 0, skipped: 0, total: 0 }
    }
    stats[sec.key].total++
    const chosen = userAnswers[q.id]
    if (chosen === undefined || chosen === null) {
      stats[sec.key].skipped++
    } else if (isCorrect(q.id, chosen)) {
      stats[sec.key].correct++
    } else {
      stats[sec.key].wrong++
    }
  })

  // Return only sections that had questions, in canonical order
  return SECTIONS.map(s => stats[s.key]).filter(Boolean)
}

export default function ResultsPage({ questions, userAnswers, mode, score, gradeLevelId, onRetake, onHome }) {
  const [showReview, setShowReview] = useState(false)
  const pct = Math.round((score.correct / score.total) * 100)

  const grade      = pct >= 70 ? 'pass' : pct >= 50 ? 'fair' : 'fail'
  const gradeLabel = pct >= 70 ? 'Excellent' : pct >= 50 ? 'Fair' : 'Needs Work'
  const gradeEmoji = pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚'

  const gradeLevel   = GRADE_LEVELS.find(g => g.id === gradeLevelId)
  const sectionStats = buildSectionStats(questions, userAnswers)

  return (
    <div className="results-page">
      <div className="results-inner">

        {/* ── Grade level label ─────────────────────────────────── */}
        {gradeLevel && (
          <div className="results-grade-label">
            {gradeLevel.label}
          </div>
        )}

        {/* ── Score hero ────────────────────────────────────────── */}
        <div className={`score-hero score-hero--${grade}`}>
          <div className="score-emoji">{gradeEmoji}</div>
          <div className="score-pct">{pct}%</div>
          <div className="score-grade">{gradeLabel}</div>
          <div className="score-fraction">
            {score.correct} correct out of {score.total}
          </div>
        </div>

        {/* ── Overall breakdown ─────────────────────────────────── */}
        <div className="breakdown-row">
          <div className="breakdown-card breakdown-card--correct">
            <span className="breakdown-num">{score.correct}</span>
            <span className="breakdown-label">Correct</span>
          </div>
          <div className="breakdown-card breakdown-card--wrong">
            <span className="breakdown-num">{score.wrong}</span>
            <span className="breakdown-label">Wrong</span>
          </div>
          <div className="breakdown-card breakdown-card--skipped">
            <span className="breakdown-num">{score.skipped}</span>
            <span className="breakdown-label">Skipped</span>
          </div>
        </div>

        {/* ── Score bar ─────────────────────────────────────────── */}
        <div className="score-bar-wrap">
          <div className="score-bar-track">
            <div
              className={`score-bar-fill score-bar-fill--${grade}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="score-bar-labels">
            <span>0%</span><span>50%</span><span>70%</span><span>100%</span>
          </div>
        </div>

        {/* ── Per-section breakdown ─────────────────────────────── */}
        {sectionStats.length > 1 && (
          <div className="section-breakdown">
            <h3 className="section-breakdown-title">Results by Subject</h3>
            <div className="section-table">
              {/* Header */}
              <div className="section-row section-row--head">
                <span className="sc-subject">Subject</span>
                <span className="sc-col">Qs</span>
                <span className="sc-col sc-correct">✓</span>
                <span className="sc-col sc-wrong">✗</span>
                <span className="sc-col sc-skip">—</span>
                <span className="sc-col sc-pct">Score</span>
              </div>

              {sectionStats.map(s => {
                const sPct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
                const sGrade = sPct >= 70 ? 'pass' : sPct >= 50 ? 'fair' : 'fail'
                return (
                  <div key={s.key} className="section-row">
                    <span className="sc-subject">
                      <span className="sc-badge">{s.short}</span>
                      {s.label}
                    </span>
                    <span className="sc-col">{s.total}</span>
                    <span className="sc-col sc-correct">{s.correct}</span>
                    <span className="sc-col sc-wrong">{s.wrong}</span>
                    <span className="sc-col sc-skip">{s.skipped}</span>
                    <span className={`sc-col sc-pct sc-pct--${sGrade}`}>{sPct}%</span>
                  </div>
                )
              })}

              {/* Totals row */}
              <div className="section-row section-row--total">
                <span className="sc-subject">Total</span>
                <span className="sc-col">{score.total}</span>
                <span className="sc-col sc-correct">{score.correct}</span>
                <span className="sc-col sc-wrong">{score.wrong}</span>
                <span className="sc-col sc-skip">{score.skipped}</span>
                <span className={`sc-col sc-pct sc-pct--${grade}`}>{pct}%</span>
              </div>
            </div>

            {/* Per-section mini bars */}
            <div className="section-bars">
              {sectionStats.map(s => {
                const sPct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
                const sGrade = sPct >= 70 ? 'pass' : sPct >= 50 ? 'fair' : 'fail'
                return (
                  <div key={s.key} className="section-bar-item">
                    <div className="section-bar-label">
                      <span className="sc-badge">{s.short}</span>
                      <span className="section-bar-name">{s.label}</span>
                      <span className={`section-bar-pct sc-pct--${sGrade}`}>{sPct}%</span>
                    </div>
                    <div className="score-bar-track">
                      <div
                        className={`score-bar-fill score-bar-fill--${sGrade}`}
                        style={{ width: `${sPct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── Review toggle ─────────────────────────────────────── */}
        <button
          className="btn-secondary review-toggle"
          onClick={() => setShowReview(v => !v)}
        >
          {showReview ? '▲ Hide Review' : '▼ Review All Answers'}
        </button>

        {/* ── Answer review ─────────────────────────────────────── */}
        {showReview && (
          <div className="review-list">
            {questions.map((q, idx) => {
              const chosen    = userAnswers[q.id]
              const correct   = getCorrectIndex(q.id)
              const status    = chosen === undefined ? 'skipped' : isCorrect(q.id, chosen) ? 'correct' : 'wrong'
              const sec       = getSection(q.id)

              return (
                <div key={q.id} className={`review-item review-item--${status}`}>
                  <div className="review-meta">
                    <span className="review-num">Q{idx + 1}</span>
                    {sec && <span className="sc-badge review-sec-badge">{sec.short}</span>}
                    <span className={`review-status review-status--${status}`}>
                      {status === 'correct' ? '✓ Correct' : status === 'wrong' ? '✗ Wrong' : '— Skipped'}
                    </span>
                  </div>
                  <p className="review-question">{q.text}</p>
                  <div className="review-options">
                    {q.options.map((opt, i) => {
                      const isChosen    = i === chosen
                      const isCorrectOpt = i === correct
                      let cls = 'review-opt'
                      if (isCorrectOpt) cls += ' review-opt--correct'
                      else if (isChosen && !isCorrectOpt) cls += ' review-opt--wrong'
                      return (
                        <div key={i} className={cls}>
                          <span className="review-opt-label">{OPTION_LABELS[i]}</span>
                          <span className="review-opt-text">{opt}</span>
                          {isCorrectOpt && (
                            <span className="review-opt-tag">✓ Answer</span>
                          )}
                          {isChosen && !isCorrectOpt && (
                            <span className="review-opt-tag review-opt-tag--wrong">✗ Yours</span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ── Actions ───────────────────────────────────────────── */}
        <div className="results-actions">
          <button className="btn-primary" onClick={onRetake}>
            Take Another Test →
          </button>
          <button className="btn-ghost" onClick={onHome}>
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  )
}