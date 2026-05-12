// GradeSelect.jsx
// Step 1 of the test flow: user picks their grade level.
// Rendered before ModeSelect. Passes the selected gradeLevel id upward.
// Per HOS Circular Ref.No: CIR/HOS/'26/005, dated 21 January 2026.
import { GRADE_LEVELS } from '../utils/quizLogic.js'

// Map grade id → badge label
const GRADE_BADGES = {
  gl08plus:  '08+',
  gl0607:    '06/07',
  gl0405:    '04/05',
  gl0203:    '02/03',
  secretary: 'SEC',
}

// Map grade id → which subjects are in the current question bank
// (used to show an "in bank" indicator on each bullet)
const IN_BANK = {
  gl08plus:  new Set(['Public Service Rules (PSR)', 'Financial Regulations (FR)', 'Common Law', 'Local Acts']),
  gl0607:    new Set(['Public Service Rules (PSR)', 'Financial Regulations (FR)']),
  gl0405:    new Set(['English Language', 'General Paper', 'Public Service Rules (PSR)', 'Financial Regulations (FR)']),
  gl0203:    new Set(['English Language', 'General Paper', 'Public Service Rules (PSR)', 'Financial Regulations (FR)', 'Mathematics']),
  secretary: new Set(['Public Service Rules (PSR)', 'Financial Regulations (FR)', 'Business Communication']),
}

export default function GradeSelect({ onSelect, onBack }) {
  return (
    <div className="mode-page">
      <div className="mode-inner">

        {/* Back navigation */}
        <button className="back-btn" onClick={onBack}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path
              d="M16 10H4M9 5l-5 5 5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>

        {/* Page header */}
        <div className="mode-header">
          <h2 className="mode-title">Select your grade level</h2>
          <p className="mode-sub">
            Per HOS Circular Ref.No: CIR/HOS/'26/005, your grade level determines which
            subjects appear in your test. Select the category that matches yours.
          </p>
        </div>

        {/* Grade level cards */}
        <div className="mode-cards">
          {GRADE_LEVELS.map((grade) => {
            const inBank = IN_BANK[grade.id] ?? new Set()
            const poolSize = grade.poolIds.length

            return (
              <button
                key={grade.id}
                className="mode-card"
                onClick={() => onSelect(grade.id)}
              >
                {/* Grade badge */}
                <div className="grade-badge-icon">
                  <span>{GRADE_BADGES[grade.id] ?? '—'}</span>
                </div>

                <div className="mode-body">
                  <h3>{grade.label}</h3>
                  <p className="mode-subtitle-text">{grade.subtitle}</p>

                  {/* Subject list with in-bank indicator */}
                  <ul className="mode-bullets">
                    {grade.subjects.map((subject) => {
                      const available = inBank.has(subject)
                      return (
                        <li key={subject} className={available ? 'subject-available' : 'subject-pending'}>
                          <span className="subject-dot">{available ? '✓' : '○'}</span>
                          {subject}
                          {!available && (
                            <span className="subject-tag-pending">coming soon</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>

                  {/* Pool size note */}
                  <p className="pool-size-note">
                    {poolSize} questions in pool · 50 per session
                  </p>

                  {/* Special note if some subjects aren't in bank yet */}
                  {grade.specialNote && (
                    <p className="grade-special-note">
                      ⚠ {grade.specialNote}
                    </p>
                  )}
                </div>

                <div className="mode-arrow">→</div>
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="grade-legend">
          <span className="legend-item">
            <span className="subject-dot subject-dot--avail">✓</span> In question bank
          </span>
          <span className="legend-item">
            <span className="subject-dot subject-dot--pending">○</span> Not yet available
          </span>
        </div>

        {/* Circular reference note */}
        <p className="circular-ref">
          Ref: CIR/HOS/'26/005 · 21 January 2026 · LSCS Confirmation/Compulsory Examination
        </p>

      </div>
    </div>
  )
}