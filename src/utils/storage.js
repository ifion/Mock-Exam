// storage.js — All localStorage interactions for the CBT app

const KEYS = {
  POOL: 'cbt_question_pool',          // remaining IDs to show
  HISTORY: 'cbt_session_history',     // array of past session result objects
  CURRENT: 'cbt_current_session',     // in-progress session state (if any)
}

// ─── Pool Management ───────────────────────────────────────────────────────────

export function getPool() {
  try {
    const raw = localStorage.getItem(KEYS.POOL)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function savePool(pool) {
  localStorage.setItem(KEYS.POOL, JSON.stringify(pool))
}

export function clearPool() {
  localStorage.removeItem(KEYS.POOL)
}

// ─── Session History ────────────────────────────────────────────────────────────

export function getHistory() {
  try {
    const raw = localStorage.getItem(KEYS.HISTORY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function addSessionToHistory(session) {
  const history = getHistory()
  history.push(session)
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(history))
}

export function clearHistory() {
  localStorage.removeItem(KEYS.HISTORY)
}

// ─── Current Session ────────────────────────────────────────────────────────────

export function getCurrentSession() {
  try {
    const raw = localStorage.getItem(KEYS.CURRENT)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveCurrentSession(session) {
  localStorage.setItem(KEYS.CURRENT, JSON.stringify(session))
}

export function clearCurrentSession() {
  localStorage.removeItem(KEYS.CURRENT)
}

// ─── Full Reset ─────────────────────────────────────────────────────────────────

export function resetAllData() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k))
}