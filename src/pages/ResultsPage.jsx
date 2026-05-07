// ResultsPage.jsx
import { useState } from 'react'
import { getCorrectIndex, isCorrect } from '../utils/quizLogic.js'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function ResultsPage({ questions, userAnswers, mode, score, onRetake, onHome }) {
  const [showReview, setShowReview] = useState(false)
  const pct = Math.round((score.correct / score.total) * 100)

  const grade = pct >= 70 ? 'pass' : pct >= 50 ? 'fair' : 'fail'
  const gradeLabel = pct >= 70 ? 'Excellent' : pct >= 50 ? 'Fair' : 'Needs Work'
  const gradeEmoji = pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚'

  return (
    <div className="results-page">
      <div className="results-inner">
        {/* Score hero */}
        <div className={`score-hero score-hero--${grade}`}>
          <div className="score-emoji">{gradeEmoji}</div>
          <div className="score-pct">{pct}%</div>
          <div className="score-grade">{gradeLabel}</div>
          <div className="score-fraction">
            {score.correct} correct out of {score.total}
          </div>
        </div>

        {/* Breakdown */}
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

        {/* Score bar */}
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

        {/* Review toggle */}
        <button
          className="btn-secondary review-toggle"
          onClick={() => setShowReview(v => !v)}
        >
          {showReview ? '▲ Hide Review' : '▼ Review All Answers'}
        </button>

        {/* Answer review */}
        {showReview && (
          <div className="review-list">
            {questions.map((q, idx) => {
              const chosen = userAnswers[q.id]
              const correct = getCorrectIndex(q.id)
              const status = chosen === undefined ? 'skipped'
                : isCorrect(q.id, chosen) ? 'correct' : 'wrong'

              return (
                <div key={q.id} className={`review-item review-item--${status}`}>
                  <div className="review-meta">
                    <span className="review-num">Q{idx + 1}</span>
                    <span className={`review-status review-status--${status}`}>
                      {status === 'correct' ? '✓ Correct'
                        : status === 'wrong' ? '✗ Wrong'
                        : '— Skipped'}
                    </span>
                  </div>
                  <p className="review-question">{q.text}</p>
                  <div className="review-options">
                    {q.options.map((opt, i) => {
                      const isChosen = i === chosen
                      const isCorrectOpt = i === correct
                      let cls = 'review-opt'
                      if (isCorrectOpt) cls += ' review-opt--correct'
                      else if (isChosen && !isCorrectOpt) cls += ' review-opt--wrong'
                      return (
                        <div key={i} className={cls}>
                          <span className="review-opt-label">{OPTION_LABELS[i]}</span>
                          <span className="review-opt-text">{opt}</span>
                          {isCorrectOpt && <span className="review-opt-tag">✓ Answer</span>}
                          {isChosen && !isCorrectOpt && <span className="review-opt-tag review-opt-tag--wrong">✗ Yours</span>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Actions */}
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