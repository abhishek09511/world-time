import { useState, useRef, useEffect } from 'react'
import { ALL_TIMEZONES } from '../utils/timezones'

export default function AddTimezoneModal({ onAdd, onClose, existingKeys }) {
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const filtered = ALL_TIMEZONES.filter((tz) => {
    // Don't show already-added timezones (by unique key)
    if (existingKeys.includes(tz.key)) return false
    const q = search.toLowerCase()
    return (
      tz.city.toLowerCase().includes(q) ||
      tz.country.toLowerCase().includes(q) ||
      tz.id.toLowerCase().includes(q) ||
      tz.utcLabel.toLowerCase().includes(q)
    )
  })

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            Add Time Zone
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg border-none cursor-pointer text-base"
            style={{ color: 'var(--text-muted)', background: 'transparent' }}
          >
            ✕
          </button>
        </div>

        <input
          ref={inputRef}
          className="modal-input"
          type="text"
          placeholder="Search cities, countries, or timezones..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="modal-list">
          {filtered.length === 0 ? (
            <p className="text-center py-8 text-sm" style={{ color: 'var(--text-muted)' }}>
              No timezones found
            </p>
          ) : (
            filtered.map((tz) => (
              <div
                key={tz.key}
                className="modal-list-item"
                onClick={() => {
                  onAdd(tz)
                  onClose()
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{tz.city}</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {tz.utcLabel}
                  </span>
                </div>
                <div className="modal-list-item-sub">{tz.country} &middot; {tz.id}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
