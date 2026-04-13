import { useState, useCallback, useEffect } from 'react'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import Header from './components/Header'
import ClockCard from './components/ClockCard'
import AddTimezoneModal from './components/AddTimezoneModal'
import WorldMap from './components/WorldMap'
import TimeOffsetSlider from './components/TimeOffsetSlider'
import { DEFAULT_TIMEZONES } from './utils/timezones'

const STORAGE_KEY_ZONES = 'worldtime-zones'
const STORAGE_KEY_THEME = 'worldtime-theme'
const STORAGE_KEY_DARK = 'worldtime-dark'
const STORAGE_KEY_12H = 'worldtime-12h'

// Ensure all loaded timezones have a key field (migration from old format)
function ensureKeys(zones) {
  return zones.map((tz) => ({
    ...tz,
    key: tz.key || `${tz.city}-${tz.id}`,
  }))
}

function loadTimezones() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_ZONES)
    if (stored) return ensureKeys(JSON.parse(stored))
  } catch {}
  return DEFAULT_TIMEZONES
}

function loadTheme() {
  return localStorage.getItem(STORAGE_KEY_THEME) || 'linear'
}

function loadDark() {
  const stored = localStorage.getItem(STORAGE_KEY_DARK)
  if (stored !== null) return stored === 'true'
  return true
}

function load12Hour() {
  return localStorage.getItem(STORAGE_KEY_12H) === 'true'
}

export default function App() {
  const [timezones, setTimezones] = useState(loadTimezones)
  const [selectedKey, setSelectedKey] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [theme, setTheme] = useState(loadTheme)
  const [isDark, setIsDark] = useState(loadDark)
  const [use12Hour, setUse12Hour] = useState(load12Hour)
  const [offsetMinutes, setOffsetMinutes] = useState(0)

  // Drag sensor with activation distance to distinguish click from drag
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  )

  useEffect(() => {
    const themeValue = `${theme}-${isDark ? 'dark' : 'light'}`
    document.documentElement.setAttribute('data-theme', themeValue)
  }, [theme, isDark])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ZONES, JSON.stringify(timezones))
  }, [timezones])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_THEME, theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_DARK, String(isDark))
  }, [isDark])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_12H, String(use12Hour))
  }, [use12Hour])

  const handleAdd = useCallback((tz) => {
    setTimezones((prev) => {
      if (prev.some((t) => t.key === tz.key)) return prev
      return [...prev, tz]
    })
  }, [])

  const handleRemove = useCallback((key) => {
    setTimezones((prev) => prev.filter((t) => t.key !== key))
    setSelectedKey((prev) => (prev === key ? null : prev))
  }, [])

  const handleSelect = useCallback((key) => {
    setSelectedKey((prev) => (prev === key ? null : key))
  }, [])

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setTimezones((prev) => {
        const oldIndex = prev.findIndex((t) => t.key === active.id)
        const newIndex = prev.findIndex((t) => t.key === over.id)
        return arrayMove(prev, oldIndex, newIndex)
      })
    }
  }, [])

  // Find the selected timezone's IANA id for the map
  const selectedTz = timezones.find((t) => t.key === selectedKey)
  const selectedTimezoneId = selectedTz?.id || null

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      <Header
        theme={theme}
        isDark={isDark}
        onThemeChange={setTheme}
        onDarkToggle={() => setIsDark((d) => !d)}
        onAddClick={() => setShowModal(true)}
        use12Hour={use12Hour}
        onToggle12Hour={() => setUse12Hour((h) => !h)}
      />

      {/* Clock cards grid */}
      <main className="flex-1 w-full px-6 py-8">
        {timezones.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <span className="text-4xl">🌍</span>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              No time zones added
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 rounded-lg border-none cursor-pointer font-medium text-sm"
              style={{ background: 'var(--accent)', color: '#FFFFFF' }}
            >
              + Add Time Zone
            </button>
          </div>
        ) : (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={timezones.map((t) => t.key)} strategy={rectSortingStrategy}>
              <div
                className="grid gap-5 w-full"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                }}
              >
                {timezones.map((tz) => (
                  <ClockCard
                    key={tz.key}
                    dragId={tz.key}
                    timezone={tz}
                    isSelected={selectedKey === tz.key}
                    onSelect={handleSelect}
                    onRemove={handleRemove}
                    use12Hour={use12Hour}
                    offsetMinutes={offsetMinutes}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </main>

      {/* Time offset slider */}
      {timezones.length > 0 && (
        <TimeOffsetSlider value={offsetMinutes} onChange={setOffsetMinutes} />
      )}

      {/* World Map */}
      <WorldMap selectedTimezoneId={selectedTimezoneId} timezones={timezones} />

      {/* Add timezone modal */}
      {showModal && (
        <AddTimezoneModal
          onAdd={handleAdd}
          onClose={() => setShowModal(false)}
          existingKeys={timezones.map((t) => t.key)}
        />
      )}
    </div>
  )
}
