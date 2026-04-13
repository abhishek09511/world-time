import { useRef } from 'react'

function formatOffset(minutes) {
  if (minutes === 0) return 'Now'
  const sign = minutes > 0 ? '+' : '-'
  const abs = Math.abs(minutes)
  const h = Math.floor(abs / 60)
  const m = abs % 60
  if (h === 0) return `${sign}${m}m`
  if (m === 0) return `${sign}${h}h`
  return `${sign}${h}h ${m}m`
}

export default function TimeOffsetSlider({ value, onChange }) {
  const isDraggingRef = useRef(false)
  const prevRawRef = useRef(0)

  const reset = () => {
    isDraggingRef.current = false
    prevRawRef.current = 0
    onChange(0)
  }

  const percent = ((value + 720) / 1440) * 100

  return (
    <div className="time-offset-slider-wrap">
      <div className="time-offset-slider-inner">
        <div className="time-offset-slider-label-row">
          <span className="time-offset-slider-end">-12h</span>
          <span
            className="time-offset-slider-value"
            style={{
              left: `${percent}%`,
              opacity: value === 0 ? 0 : 1,
            }}
          >
            {formatOffset(value)}
          </span>
          <span className="time-offset-slider-end">+12h</span>
        </div>
        <input
          type="range"
          className="time-offset-slider"
          min={-720}
          max={720}
          step={1}
          value={value}
          onChange={(e) => {
            isDraggingRef.current = true
            const raw = parseInt(e.target.value, 10)
            const prev = prevRawRef.current
            prevRawRef.current = raw

            if (raw === 0) {
              onChange(0)
              return
            }

            const currentMinute = new Date().getMinutes()
            const target = currentMinute + raw
            const direction = raw > prev ? 1 : raw < prev ? -1 : (raw > 0 ? 1 : -1)
            const snappedTarget =
              direction > 0
                ? Math.ceil(target / 5) * 5
                : Math.floor(target / 5) * 5
            onChange(snappedTarget - currentMinute)
          }}
          onPointerUp={reset}
          onPointerCancel={reset}
          onMouseUp={reset}
          onTouchEnd={reset}
          onTouchCancel={reset}
          onBlur={() => {
            if (value !== 0) onChange(0)
          }}
          onKeyUp={reset}
          aria-label="Time offset preview slider"
        />
      </div>
    </div>
  )
}
