import { useState, useEffect } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { getTimeData, getCurrentUtcOffset } from '../utils/timezones'

export default function ClockCard({ timezone, isSelected, onSelect, onRemove, use12Hour, dragId, offsetMinutes = 0 }) {
  const [timeData, setTimeData] = useState(() => getTimeData(timezone.id))

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: dragId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 'auto',
  }

  useEffect(() => {
    if (offsetMinutes === 0) {
      setTimeData(getTimeData(timezone.id))
      const interval = setInterval(() => {
        setTimeData(getTimeData(timezone.id))
      }, 1000)
      return () => clearInterval(interval)
    } else {
      const ref = new Date(Date.now() + offsetMinutes * 60000)
      ref.setSeconds(0, 0)
      setTimeData(getTimeData(timezone.id, ref))
    }
  }, [timezone.id, offsetMinutes])

  const currentOffset = getCurrentUtcOffset(timezone.id)

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`clock-card card-enter ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(timezone.key)}
    >
      <button
        className="remove-btn"
        onClick={(e) => {
          e.stopPropagation()
          onRemove(timezone.key)
        }}
        onPointerDown={(e) => e.stopPropagation()}
        title="Remove timezone"
      >
        ✕
      </button>

      {/* Header: City name + UTC offset */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="card-text-primary text-lg font-semibold">
            {timezone.city}
          </h3>
          <p className="card-text-secondary text-sm">
            {timezone.country}
          </p>
        </div>
        <span
          className="card-text-muted text-xs font-medium px-2 py-1 rounded"
          style={{ background: 'var(--accent-glow)' }}
        >
          {currentOffset}
        </span>
      </div>

      {/* Time display */}
      <div className="my-4">
        <p
          className="card-text-primary font-bold tracking-tight leading-none"
          style={{
            fontSize: 'clamp(36px, 4vw, 64px)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {use12Hour ? (
            <>
              {timeData.time12}
              <span
                className="card-text-muted"
                style={{
                  fontSize: '0.32em',
                  fontWeight: 500,
                  marginLeft: '6px',
                  display: 'inline-block',
                  transform: 'translateY(-0.5em)',
                  letterSpacing: '0.05em',
                }}
              >
                {timeData.ampm.toLowerCase()}
              </span>
            </>
          ) : (
            timeData.time24
          )}
        </p>
      </div>

      {/* Date */}
      <p className="card-text-secondary text-sm mb-2">
        {timeData.dateShort}
      </p>

      {/* Day/Night indicator */}
      <div className="flex items-center gap-1.5">
        <span style={{ fontSize: '16px' }}>
          {timeData.isDay ? '☀️' : '🌙'}
        </span>
        <span
          className="card-text-muted text-xs font-medium"
          style={{ color: timeData.isDay ? 'var(--day-color)' : 'var(--night-color)' }}
        >
          {timeData.isDay ? 'Day' : 'Night'}
        </span>
      </div>
    </div>
  )
}
