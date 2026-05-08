// GradeSelect.jsx
// Step 1 of the test flow: user picks their grade level.
// Rendered before ModeSelect. Passes the selected gradeLevel id upward.
import { GRADE_LEVELS } from '../utils/quizLogic.js'

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
            Per HOS Circular Ref.No: CIR/HOS/'26/005, your grade level determines
            which subjects appear in your test. Select the category that matches yours.
          </p>
        </div>

        {/* Grade level cards */}
        <div className="mode-cards">
          {GRADE_LEVELS.map((grade) => (
            <button
              key={grade.id}
              className="mode-card"
              onClick={() => onSelect(grade.id)}
            >
              {/* Grade badge instead of emoji icon */}
              <div className="grade-badge-icon">
                {grade.id === 'gl08plus'  && <span>08+</span>}
                {grade.id === 'gl0607'    && <span>06/07</span>}
                {grade.id === 'gl0405'    && <span>04/05</span>}
                {grade.id === 'gl0203'    && <span>02/03</span>}
                {grade.id === 'secretary' && <span>SEC</span>}
              </div>

              <div className="mode-body">
                <h3>{grade.label}</h3>
                <p>{grade.subtitle}</p>
                <ul className="mode-bullets">
                  {grade.subjects.map((s) => (
                    <li key={s}>— {s}</li>
                  ))}
                </ul>
              </div>

              <div className="mode-arrow">→</div>
            </button>
          ))}
        </div>

        {/* Circular reference note */}
        <p
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            lineHeight: 1.6,
          }}
        >
          Ref: CIR/HOS/'26/005 · 21 January 2026 · LSCS Confirmation/Compulsory Examination
        </p>

      </div>
    </div>
  )
}