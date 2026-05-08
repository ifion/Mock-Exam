// QuizPage.jsx
import { useState, useEffect, useCallback, useRef } from 'react'
import { getCorrectIndex, isCorrect, GRADE_LEVELS } from '../utils/quizLogic.js'
import { saveCurrentSession } from '../utils/storage.js'

const OPTION_LABELS = ['A', 'B', 'C', 'D']
const TIMER_SECONDS = 20 * 60  // 20 minutes

/** Format seconds as MM:SS */
function formatTime(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

/** Derive timer urgency class from remaining seconds */
function timerClass(secs) {
  if (secs <= 60)  return 'quiz-timer quiz-timer--urgent'
  if (secs <= 300) return 'quiz-timer quiz-timer--warn'
  return 'quiz-timer'
}

/** Map a question ID to its section short-name */
function getSectionTag(id) {
  if (id >= 1   && id <= 50)  return 'PSR'
  if (id >= 51  && id <= 200) return 'GEN'
  if (id >= 201 && id <= 350) return 'FR'
  if (id >= 351 && id <= 400) return 'ENG'
  if (id >= 401 && id <= 450) return 'MATH'
  return ''
}

export default function QuizPage({ questions, mode, gradeLevelId, onFinish, onQuit }) {
  const [currentIdx, setCurrentIdx]   = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [revealed, setRevealed]       = useState(false)
  const [animating, setAnimating]     = useState(false)
  const [timeLeft, setTimeLeft]       = useState(TIMER_SECONDS)
  const [timeExpired, setTimeExpired] = useState(false)

  const finishRef = useRef(onFinish)
  finishRef.current = onFinish   // Keep ref current without resetting timer

  const question     = questions[currentIdx]
  const totalQ       = questions.length
  const progressPct  = ((currentIdx + 1) / totalQ) * 100
  const chosenIndex  = userAnswers[question?.id]
  const hasChosen    = chosenIndex !== undefined
  const correctIndex = getCorrectIndex(question?.id)
  const isImmediate  = mode === 'immediate'

  // Grade level display label
  const gradeLabel = GRADE_LEVELS.find(g => g.id === gradeLevelId)?.label ?? ''

  // ── Countdown timer ────────────────────────────────────────────
  useEffect(() => {
    if (timeExpired) return

    const id = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(id)
          setTimeExpired(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(id)
  }, [timeExpired])

  // Auto-submit when time expires (tiny delay lets state settle)
  useEffect(() => {
    if (!timeExpired) return
    const id = setTimeout(() => finishRef.current({ ...userAnswers }), 400)
    return () => clearTimeout(id)
  }, [timeExpired, userAnswers])

  // ── Persist session ────────────────────────────────────────────
  useEffect(() => {
    saveCurrentSession({ currentIdx, userAnswers, mode, gradeLevelId })
  }, [currentIdx, userAnswers, mode, gradeLevelId])

  // ── Interaction handlers ───────────────────────────────────────
  const handleOptionClick = useCallback((optIndex) => {
    if (!question) return
    if (isImmediate && revealed) return

    // End mode: tap same option to deselect
    if (!isImmediate && hasChosen && optIndex === chosenIndex) {
      setUserAnswers(prev => {
        const copy = { ...prev }
        delete copy[question.id]
        return copy
      })
      return
    }

    setUserAnswers(prev => ({ ...prev, [question.id]: optIndex }))
    if (isImmediate) setRevealed(true)
  }, [question, isImmediate, revealed, hasChosen, chosenIndex])

  const handleNext = useCallback(() => {
    if (animating) return
    if (currentIdx + 1 >= totalQ) {
      onFinish({ ...userAnswers })
      return
    }
    setAnimating(true)
    setTimeout(() => {
      setCurrentIdx(i => i + 1)
      setRevealed(false)
      setAnimating(false)
    }, 150)
  }, [animating, currentIdx, totalQ, userAnswers, onFinish])

  const handlePrev = useCallback(() => {
    if (animating || currentIdx === 0) return
    setAnimating(true)
    setTimeout(() => {
      setCurrentIdx(i => i - 1)
      setRevealed(
        isImmediate && userAnswers[questions[currentIdx - 1]?.id] !== undefined
      )
      setAnimating(false)
    }, 150)
  }, [animating, currentIdx, isImmediate, userAnswers, questions])

  function getOptionState(optIndex) {
    if (!hasChosen) return 'idle'
    if (isImmediate && revealed) {
      if (optIndex === correctIndex) return 'correct'
      if (optIndex === chosenIndex && chosenIndex !== correctIndex) return 'wrong'
      return 'dim'
    }
    if (optIndex === chosenIndex) return 'selected'
    return 'idle'
  }

  const answeredCount  = Object.keys(userAnswers).length
  const isLastQuestion = currentIdx + 1 >= totalQ
  const sectionTag     = getSectionTag(question?.id)

  // ── Time-expired overlay ───────────────────────────────────────
  if (timeExpired) {
    return (
      <div className="quiz-page">
        <div className="timeup-overlay">
          <div className="timeup-modal">
            <div className="timeup-label">Time Expired</div>
            <div className="timeup-title">20 minutes is up</div>
            <p className="timeup-body">
              Your test has been submitted automatically with{' '}
              {answeredCount} of {totalQ} questions answered.
              Calculating your results…
            </p>
            <div className="timeup-actions">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                Submitting…
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Render ─────────────────────────────────────────────────────
  return (
    <div className="quiz-page">

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="quiz-header">
        <button
          className="quit-btn"
          onClick={() => {
            if (confirm('Quit this test? Your progress will not be saved.')) {
              onQuit()
            }
          }}
        >
          ✕ Quit
        </button>

        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>

        <div className="quiz-counter">{currentIdx + 1}/{totalQ}</div>

        {/* Timer */}
        <div className={timerClass(timeLeft)}>
          ⏱ {formatTime(timeLeft)}
        </div>
      </header>

      {/* ── Info strip: grade · mode · answered ────────────────── */}
      <div className="mode-badge-strip">
        {gradeLabel && (
          <span className="grade-badge-strip">{gradeLabel}</span>
        )}
        <span className={`mode-badge ${isImmediate ? 'mode-badge--imm' : 'mode-badge--end'}`}>
          {isImmediate ? '⚡ Immediate' : '📋 End Results'}
        </span>
        <span className="answered-badge">{answeredCount}/{totalQ} answered</span>
      </div>

      {/* ── Main content ───────────────────────────────────────── */}
      <main className={`quiz-main ${animating ? 'fade-out' : 'fade-in'}`}>

        {/* Question card */}
        <div className="question-card">
          <div className="question-number">
            Question {currentIdx + 1}
            {sectionTag && (
              <span className="question-section-tag">{sectionTag}</span>
            )}
          </div>
          <p className="question-text">{question?.text}</p>
        </div>

        {/* Options */}
        <div className="options-list">
          {question?.options.map((opt, idx) => {
            const state = getOptionState(idx)
            return (
              <button
                key={idx}
                className={`option-toggle option-toggle--${state}`}
                onClick={() => handleOptionClick(idx)}
                disabled={isImmediate && revealed}
              >
                <span className="option-label">{OPTION_LABELS[idx]}</span>
                <span className="option-text">{opt}</span>
                {state === 'correct'  && <span className="option-icon">✓</span>}
                {state === 'wrong'    && <span className="option-icon">✗</span>}
                {state === 'selected' && <span className="option-icon">·</span>}
              </button>
            )
          })}
        </div>

        {/* Immediate-mode feedback banner */}
        {isImmediate && revealed && (
          <div
            className={`feedback-banner ${
              isCorrect(question.id, chosenIndex) ? 'feedback--correct' : 'feedback--wrong'
            }`}
          >
            {isCorrect(question.id, chosenIndex)
              ? `✓  Correct.`
              : `✗  Wrong. Correct answer: ${OPTION_LABELS[correctIndex]} — ${question.options[correctIndex]}`}
          </div>
        )}

      </main>

      {/* ── Footer nav ─────────────────────────────────────────── */}
      <footer className="quiz-footer">
        <button
          className="btn-nav"
          onClick={handlePrev}
          disabled={currentIdx === 0}
        >
          ← Prev
        </button>

        {isLastQuestion ? (
          <button className="btn-finish" onClick={handleNext}>
            Submit →
          </button>
        ) : (
          <button className="btn-nav-next" onClick={handleNext}>
            Next →
          </button>
        )}
      </footer>

    </div>
  )
}