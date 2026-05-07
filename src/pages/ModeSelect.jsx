// ModeSelect.jsx
export default function ModeSelect({ onSelect, onBack }) {
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
          <h2 className="mode-title">Choose a test mode</h2>
          <p className="mode-sub">
            Select how you want to receive feedback. You can switch modes any time before starting.
          </p>
        </div>

        {/* Mode option cards — grouped in a bordered container */}
        <div className="mode-cards">

          {/* Immediate feedback */}
          <button
            className="mode-card"
            onClick={() => onSelect('immediate')}
          >
            <div className="mode-icon mode-icon--immediate">⚡</div>
            <div className="mode-body">
              <h3>Immediate Feedback</h3>
              <p>
                See whether your answer is correct after each question.
                The correct answer is highlighted before you move on.
              </p>
              <ul className="mode-bullets">
                <li>— Learn from mistakes immediately</li>
                <li>— Best for active study sessions</li>
                <li>— Per-question explanation</li>
              </ul>
            </div>
            <div className="mode-arrow">→</div>
          </button>

          {/* End results */}
          <button
            className="mode-card"
            onClick={() => onSelect('end')}
          >
            <div className="mode-icon mode-icon--end">📋</div>
            <div className="mode-body">
              <h3>Results at End</h3>
              <p>
                Answer all 50 questions without interruption, then review
                your full score and a breakdown at the end.
              </p>
              <ul className="mode-bullets">
                <li>— Simulates real exam conditions</li>
                <li>— Tests time management under pressure</li>
                <li>— Full annotated review after submission</li>
              </ul>
            </div>
            <div className="mode-arrow">→</div>
          </button>

        </div>
      </div>
    </div>
  )
}