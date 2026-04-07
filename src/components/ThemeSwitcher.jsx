const THEMES = [
  { id: 'linear', label: 'Linear' },
  { id: 'worldclock', label: 'World Clock' },
]

export default function ThemeSwitcher({ theme, isDark, onThemeChange, onDarkToggle }) {
  return (
    <div className="flex items-center gap-3">
      {/* Theme selector */}
      <div
        className="flex rounded-lg overflow-hidden border"
        style={{ borderColor: 'var(--border-color)' }}
      >
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => onThemeChange(t.id)}
            className="px-3 py-1.5 text-xs font-medium border-none cursor-pointer transition-all"
            style={{
              background: theme === t.id ? 'var(--accent)' : 'transparent',
              color: theme === t.id ? '#FFFFFF' : 'var(--text-secondary)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Dark/Light toggle */}
      <button
        onClick={onDarkToggle}
        className="w-9 h-9 flex items-center justify-center rounded-lg border cursor-pointer transition-all text-base"
        style={{
          borderColor: 'var(--border-color)',
          background: 'var(--bg-card)',
          color: 'var(--text-primary)',
        }}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </div>
  )
}
