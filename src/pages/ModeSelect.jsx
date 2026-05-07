// ModeSelect.jsx
export default function ModeSelect({ onSelect, onBack }) {
  return (
    <div className="mode-page">
      <div className="mode-inner">
        <button className="back-btn" onClick={onBack}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M16 10H4M9 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        <div className="mode-header">
          <h2 className="mode-title">How would you like<br />to take this test?</h2>
          <p className="mode-sub">Choose your preferred feedback style. You can always switch next session.</p>
        </div>

        <div className="mode-cards">
          {/* Immediate feedback */}
          <button
            className="mode-card"
            onClick={() => onSelect('immediate')}
          >
            <div className="mode-icon mode-icon--immediate">⚡</div>
            <div className="mode-body">
              <h3>See Answers as I Go</h3>
              <p>
                After each question you'll instantly see whether your answer was correct
                or wrong — with the correct answer highlighted.
              </p>
              <ul className="mode-bullets">
                <li>✓ Learn from mistakes immediately</li>
                <li>✓ Great for study sessions</li>
                <li>✓ Detailed per-question feedback</li>
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
              <h3>Show Results After Test</h3>
              <p>
                Answer all 50 questions first, then see your full score and a
                breakdown of correct and incorrect answers at the end.
              </p>
              <ul className="mode-bullets">
                <li>✓ Simulates real exam conditions</li>
                <li>✓ Tests time management</li>
                <li>✓ Full review at the end</li>
              </ul>
            </div>
            <div className="mode-arrow">→</div>
          </button>
        </div>
      </div>
    </div>
  )
}