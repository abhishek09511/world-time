import ThemeSwitcher from './ThemeSwitcher'

export default function Header({
  theme,
  isDark,
  onThemeChange,
  onDarkToggle,
  onAddClick,
  use12Hour,
  onToggle12Hour,
}) {
  return (
    <header
      className="w-full px-6 py-4 flex items-center justify-between border-b"
      style={{
        borderColor: 'var(--border-color)',
        background: 'var(--bg-secondary)',
      }}
    >
      {/* Logo / Title */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">🌍</span>
        <h1
          className="text-xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          World Time
        </h1>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* 12/24 hour toggle */}
        <button
          onClick={onToggle12Hour}
          className="px-3 py-1.5 text-xs font-medium rounded-lg border cursor-pointer transition-all"
          style={{
            borderColor: 'var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-secondary)',
          }}
        >
          {use12Hour ? '12H' : '24H'}
        </button>

        <ThemeSwitcher
          theme={theme}
          isDark={isDark}
          onThemeChange={onThemeChange}
          onDarkToggle={onDarkToggle}
        />

        {/* Add timezone button */}
        <button
          onClick={onAddClick}
          className="px-4 py-2 rounded-lg border-none cursor-pointer font-medium text-sm transition-all flex items-center gap-2"
          style={{
            background: 'var(--accent)',
            color: '#FFFFFF',
          }}
          onMouseEnter={(e) => (e.target.style.background = 'var(--accent-hover)')}
          onMouseLeave={(e) => (e.target.style.background = 'var(--accent)')}
        >
          <span className="text-lg leading-none">+</span>
          Add Zone
        </button>
      </div>
    </header>
  )
}
