import { memo, useMemo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { TIMEZONE_COORDINATES } from '../utils/timezones'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

function WorldMap({ selectedTimezoneId, timezones }) {
  const selectedCoords = useMemo(() => {
    if (!selectedTimezoneId) return null
    return TIMEZONE_COORDINATES[selectedTimezoneId] || null
  }, [selectedTimezoneId])

  // All active timezone markers
  const markers = useMemo(() => {
    return timezones
      .filter((tz) => TIMEZONE_COORDINATES[tz.id])
      .map((tz) => ({
        id: tz.id,
        city: tz.city,
        coordinates: [TIMEZONE_COORDINATES[tz.id][1], TIMEZONE_COORDINATES[tz.id][0]],
        isSelected: tz.id === selectedTimezoneId,
      }))
  }, [timezones, selectedTimezoneId])

  return (
    <div
      className="w-full px-6 py-8"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <h2
        className="text-lg font-semibold mb-4 px-2"
        style={{ color: 'var(--text-primary)' }}
      >
        World Map
      </h2>
      <div
        className="rounded-xl overflow-hidden border"
        style={{ borderColor: 'var(--border-color)' }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 140,
            center: [10, 30],
          }}
          style={{
            width: '100%',
            height: 'auto',
            background: 'var(--bg-primary)',
            marginTop: '-200px',
            marginBottom: '-160px',
          }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rpiKey || geo.properties.name}
                  geography={geo}
                  fill="var(--map-land)"
                  stroke="var(--map-border)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: 'var(--map-land)' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Timezone markers */}
          {markers.map((marker) => (
            <Marker key={marker.id} coordinates={marker.coordinates}>
              {/* Pulse ring for selected */}
              {marker.isSelected && (
                <circle
                  r={12}
                  fill="var(--map-highlight)"
                  opacity={0.2}
                >
                  <animate
                    attributeName="r"
                    from="8"
                    to="18"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.3"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                r={marker.isSelected ? 6 : 4}
                fill={marker.isSelected ? 'var(--map-highlight)' : 'var(--text-muted)'}
                stroke={marker.isSelected ? 'var(--map-highlight)' : 'transparent'}
                strokeWidth={marker.isSelected ? 2 : 0}
                opacity={marker.isSelected ? 1 : 0.7}
              />
              {marker.isSelected && (
                <text
                  textAnchor="middle"
                  y={-14}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    fill: 'var(--map-highlight)',
                  }}
                >
                  {marker.city}
                </text>
              )}
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  )
}

export default memo(WorldMap)
