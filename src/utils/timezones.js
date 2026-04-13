// Default time zones shown on first load
export const DEFAULT_TIMEZONES = [
  { id: 'Asia/Seoul', city: 'Seoul', country: 'Korea', utcLabel: 'UTC+9', key: 'Seoul-Asia/Seoul' },
  { id: 'Asia/Dubai', city: 'Dubai', country: 'UAE', utcLabel: 'UTC+4', key: 'Dubai-Asia/Dubai' },
  { id: 'Asia/Kolkata', city: 'India', country: 'IST', utcLabel: 'UTC+5:30', key: 'India-Asia/Kolkata' },
  { id: 'America/Los_Angeles', city: 'San Francisco', country: 'USA', utcLabel: 'UTC-8', key: 'San Francisco-America/Los_Angeles' },
  { id: 'Europe/Paris', city: 'Paris', country: 'France', utcLabel: 'UTC+1', key: 'Paris-Europe/Paris' },
]

// Comprehensive list of IANA timezones with friendly names
export const ALL_TIMEZONES = [
  // UTC-11 to UTC-9
  { id: 'Pacific/Midway', city: 'Midway Island', country: 'US Minor Outlying Islands', utcLabel: 'UTC-11' },
  { id: 'Pacific/Honolulu', city: 'Honolulu', country: 'Hawaii, USA', utcLabel: 'UTC-10' },
  { id: 'America/Anchorage', city: 'Anchorage', country: 'Alaska, USA', utcLabel: 'UTC-9' },

  // UTC-8: US/Canada Pacific
  { id: 'America/Los_Angeles', city: 'Los Angeles', country: 'California, USA', utcLabel: 'UTC-8' },
  { id: 'America/Los_Angeles', city: 'San Francisco', country: 'California, USA', utcLabel: 'UTC-8' },
  { id: 'America/Los_Angeles', city: 'Seattle', country: 'Washington, USA', utcLabel: 'UTC-8' },
  { id: 'America/Vancouver', city: 'Vancouver', country: 'Canada', utcLabel: 'UTC-8' },
  { id: 'America/Tijuana', city: 'Tijuana', country: 'Mexico', utcLabel: 'UTC-8' },

  // UTC-7: US Mountain
  { id: 'America/Denver', city: 'Denver', country: 'Colorado, USA', utcLabel: 'UTC-7' },
  { id: 'America/Phoenix', city: 'Phoenix', country: 'Arizona, USA', utcLabel: 'UTC-7' },
  { id: 'America/Edmonton', city: 'Edmonton', country: 'Canada', utcLabel: 'UTC-7' },

  // UTC-6: US Central / Mexico
  { id: 'America/Chicago', city: 'Chicago', country: 'Illinois, USA', utcLabel: 'UTC-6' },
  { id: 'America/Mexico_City', city: 'Mexico City', country: 'Mexico', utcLabel: 'UTC-6' },

  // UTC-5: US Eastern / Colombia / Peru
  { id: 'America/New_York', city: 'New York', country: 'USA', utcLabel: 'UTC-5' },
  { id: 'America/New_York', city: 'Miami', country: 'Florida, USA', utcLabel: 'UTC-5' },
  { id: 'America/Toronto', city: 'Toronto', country: 'Canada', utcLabel: 'UTC-5' },
  { id: 'America/Bogota', city: 'Bogota', country: 'Colombia', utcLabel: 'UTC-5' },
  { id: 'America/Lima', city: 'Lima', country: 'Peru', utcLabel: 'UTC-5' },

  // UTC-4: Atlantic / Caribbean / Chile
  { id: 'America/Caracas', city: 'Caracas', country: 'Venezuela', utcLabel: 'UTC-4' },
  { id: 'America/Halifax', city: 'Halifax', country: 'Canada', utcLabel: 'UTC-4' },
  { id: 'America/Santiago', city: 'Santiago', country: 'Chile', utcLabel: 'UTC-4' },

  // UTC-3:30 to UTC-1
  { id: 'America/St_Johns', city: "St. John's", country: 'Canada', utcLabel: 'UTC-3:30' },
  { id: 'America/Sao_Paulo', city: 'São Paulo', country: 'Brazil', utcLabel: 'UTC-3' },
  { id: 'America/Argentina/Buenos_Aires', city: 'Buenos Aires', country: 'Argentina', utcLabel: 'UTC-3' },
  { id: 'Atlantic/South_Georgia', city: 'South Georgia', country: 'UK', utcLabel: 'UTC-2' },
  { id: 'Atlantic/Azores', city: 'Azores', country: 'Portugal', utcLabel: 'UTC-1' },
  { id: 'Atlantic/Cape_Verde', city: 'Cape Verde', country: 'Cape Verde', utcLabel: 'UTC-1' },

  // UTC+0: UK / Morocco
  { id: 'UTC', city: 'UTC', country: 'Coordinated Universal Time', utcLabel: 'UTC+0' },
  { id: 'Europe/London', city: 'London', country: 'United Kingdom', utcLabel: 'UTC+0' },
  { id: 'Africa/Casablanca', city: 'Casablanca', country: 'Morocco', utcLabel: 'UTC+0' },

  // UTC+1: Central Europe / West Africa
  { id: 'Europe/Paris', city: 'Paris', country: 'France', utcLabel: 'UTC+1' },
  { id: 'Europe/Berlin', city: 'Berlin', country: 'Germany', utcLabel: 'UTC+1' },
  { id: 'Europe/Madrid', city: 'Madrid', country: 'Spain', utcLabel: 'UTC+1' },
  { id: 'Europe/Rome', city: 'Rome', country: 'Italy', utcLabel: 'UTC+1' },
  { id: 'Europe/Amsterdam', city: 'Amsterdam', country: 'Netherlands', utcLabel: 'UTC+1' },
  { id: 'Europe/Brussels', city: 'Brussels', country: 'Belgium', utcLabel: 'UTC+1' },
  { id: 'Europe/Zurich', city: 'Zurich', country: 'Switzerland', utcLabel: 'UTC+1' },
  { id: 'Europe/Stockholm', city: 'Stockholm', country: 'Sweden', utcLabel: 'UTC+1' },
  { id: 'Europe/Warsaw', city: 'Warsaw', country: 'Poland', utcLabel: 'UTC+1' },
  { id: 'Africa/Lagos', city: 'Lagos', country: 'Nigeria', utcLabel: 'UTC+1' },

  // UTC+2: Eastern Europe / Southern Africa
  { id: 'Europe/Athens', city: 'Athens', country: 'Greece', utcLabel: 'UTC+2' },
  { id: 'Europe/Bucharest', city: 'Bucharest', country: 'Romania', utcLabel: 'UTC+2' },
  { id: 'Europe/Helsinki', city: 'Helsinki', country: 'Finland', utcLabel: 'UTC+2' },
  { id: 'Africa/Cairo', city: 'Cairo', country: 'Egypt', utcLabel: 'UTC+2' },
  { id: 'Africa/Johannesburg', city: 'Johannesburg', country: 'South Africa', utcLabel: 'UTC+2' },
  { id: 'Asia/Jerusalem', city: 'Tel Aviv', country: 'Israel', utcLabel: 'UTC+2' },

  // UTC+3: Turkey / Russia / Middle East / East Africa
  { id: 'Europe/Istanbul', city: 'Istanbul', country: 'Turkey', utcLabel: 'UTC+3' },
  { id: 'Europe/Moscow', city: 'Moscow', country: 'Russia', utcLabel: 'UTC+3' },
  { id: 'Africa/Nairobi', city: 'Nairobi', country: 'Kenya', utcLabel: 'UTC+3' },
  { id: 'Asia/Riyadh', city: 'Riyadh', country: 'Saudi Arabia', utcLabel: 'UTC+3' },
  { id: 'Asia/Baghdad', city: 'Baghdad', country: 'Iraq', utcLabel: 'UTC+3' },

  // UTC+3:30: Iran
  { id: 'Asia/Tehran', city: 'Tehran', country: 'Iran', utcLabel: 'UTC+3:30' },

  // UTC+4: Gulf / Caucasus
  { id: 'Asia/Dubai', city: 'Dubai', country: 'UAE', utcLabel: 'UTC+4' },
  { id: 'Asia/Dubai', city: 'Abu Dhabi', country: 'UAE', utcLabel: 'UTC+4' },
  { id: 'Asia/Muscat', city: 'Muscat', country: 'Oman', utcLabel: 'UTC+4' },
  { id: 'Asia/Baku', city: 'Baku', country: 'Azerbaijan', utcLabel: 'UTC+4' },

  // UTC+4:30 to UTC+5
  { id: 'Asia/Kabul', city: 'Kabul', country: 'Afghanistan', utcLabel: 'UTC+4:30' },
  { id: 'Asia/Karachi', city: 'Karachi', country: 'Pakistan', utcLabel: 'UTC+5' },
  { id: 'Asia/Tashkent', city: 'Tashkent', country: 'Uzbekistan', utcLabel: 'UTC+5' },

  // UTC+5:30: India / Sri Lanka
  { id: 'Asia/Kolkata', city: 'Mumbai', country: 'India', utcLabel: 'UTC+5:30' },
  { id: 'Asia/Kolkata', city: 'New Delhi', country: 'India', utcLabel: 'UTC+5:30' },
  { id: 'Asia/Kolkata', city: 'Bangalore', country: 'India', utcLabel: 'UTC+5:30' },
  { id: 'Asia/Colombo', city: 'Colombo', country: 'Sri Lanka', utcLabel: 'UTC+5:30' },

  // UTC+5:45 to UTC+6:30
  { id: 'Asia/Kathmandu', city: 'Kathmandu', country: 'Nepal', utcLabel: 'UTC+5:45' },
  { id: 'Asia/Dhaka', city: 'Dhaka', country: 'Bangladesh', utcLabel: 'UTC+6' },
  { id: 'Asia/Almaty', city: 'Almaty', country: 'Kazakhstan', utcLabel: 'UTC+6' },
  { id: 'Asia/Yangon', city: 'Yangon', country: 'Myanmar', utcLabel: 'UTC+6:30' },

  // UTC+7: Southeast Asia
  { id: 'Asia/Bangkok', city: 'Bangkok', country: 'Thailand', utcLabel: 'UTC+7' },
  { id: 'Asia/Jakarta', city: 'Jakarta', country: 'Indonesia', utcLabel: 'UTC+7' },
  { id: 'Asia/Ho_Chi_Minh', city: 'Ho Chi Minh City', country: 'Vietnam', utcLabel: 'UTC+7' },

  // UTC+8: China / SE Asia / Australia West
  { id: 'Asia/Shanghai', city: 'Shanghai', country: 'China', utcLabel: 'UTC+8' },
  { id: 'Asia/Shanghai', city: 'Beijing', country: 'China', utcLabel: 'UTC+8' },
  { id: 'Asia/Shanghai', city: 'Shenzhen', country: 'China', utcLabel: 'UTC+8' },
  { id: 'Asia/Hong_Kong', city: 'Hong Kong', country: 'China', utcLabel: 'UTC+8' },
  { id: 'Asia/Taipei', city: 'Taipei', country: 'Taiwan', utcLabel: 'UTC+8' },
  { id: 'Asia/Singapore', city: 'Singapore', country: 'Singapore', utcLabel: 'UTC+8' },
  { id: 'Asia/Kuala_Lumpur', city: 'Kuala Lumpur', country: 'Malaysia', utcLabel: 'UTC+8' },
  { id: 'Asia/Manila', city: 'Manila', country: 'Philippines', utcLabel: 'UTC+8' },
  { id: 'Australia/Perth', city: 'Perth', country: 'Australia', utcLabel: 'UTC+8' },

  // UTC+9: Japan / Korea
  { id: 'Asia/Seoul', city: 'Seoul', country: 'South Korea', utcLabel: 'UTC+9' },
  { id: 'Asia/Tokyo', city: 'Tokyo', country: 'Japan', utcLabel: 'UTC+9' },

  // UTC+9:30 to UTC+10: Australia / Pacific
  { id: 'Australia/Darwin', city: 'Darwin', country: 'Australia', utcLabel: 'UTC+9:30' },
  { id: 'Australia/Adelaide', city: 'Adelaide', country: 'Australia', utcLabel: 'UTC+9:30' },
  { id: 'Australia/Sydney', city: 'Sydney', country: 'Australia', utcLabel: 'UTC+10' },
  { id: 'Australia/Melbourne', city: 'Melbourne', country: 'Australia', utcLabel: 'UTC+10' },
  { id: 'Australia/Brisbane', city: 'Brisbane', country: 'Australia', utcLabel: 'UTC+10' },
  { id: 'Pacific/Guam', city: 'Guam', country: 'US Territory', utcLabel: 'UTC+10' },

  // UTC+11 to UTC+13
  { id: 'Pacific/Noumea', city: 'Noumea', country: 'New Caledonia', utcLabel: 'UTC+11' },
  { id: 'Pacific/Auckland', city: 'Auckland', country: 'New Zealand', utcLabel: 'UTC+12' },
  { id: 'Pacific/Fiji', city: 'Fiji', country: 'Fiji', utcLabel: 'UTC+12' },
  { id: 'Pacific/Tongatapu', city: 'Nuku\'alofa', country: 'Tonga', utcLabel: 'UTC+13' },
].map((tz) => ({ ...tz, key: `${tz.city}-${tz.id}` }))

// Get current time data for a timezone
export function getTimeData(timezoneId, refDate) {
  const now = refDate ?? new Date()

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezoneId,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const time12Formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezoneId,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezoneId,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezoneId,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  const hourFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezoneId,
    hour: 'numeric',
    hour12: false,
  })

  const hour = parseInt(hourFormatter.format(now), 10)
  const isDay = hour >= 6 && hour < 18

  // Split 12h time into time part and AM/PM
  const time12Full = time12Formatter.format(now)
  const time12Match = time12Full.match(/^([\d:]+)\s*(AM|PM)$/i)
  const time12 = time12Match ? time12Match[1] : time12Full
  const ampm = time12Match ? time12Match[2] : ''

  return {
    time24: timeFormatter.format(now),
    time12,
    ampm,
    dateLong: dateFormatter.format(now),
    dateShort: shortDateFormatter.format(now),
    isDay,
    hour,
  }
}

// Get the actual current UTC offset for a timezone (accounts for DST)
export function getCurrentUtcOffset(timezoneId) {
  const now = new Date()
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezoneId }))
  const diffMinutes = (tzDate - utcDate) / 60000

  const hours = Math.floor(Math.abs(diffMinutes) / 60)
  const minutes = Math.abs(diffMinutes) % 60
  const sign = diffMinutes >= 0 ? '+' : '-'

  if (minutes === 0) {
    return `UTC${sign}${hours}`
  }
  return `UTC${sign}${hours}:${String(minutes).padStart(2, '0')}`
}

// Map timezone IDs to approximate geographic coordinates for the world map
export const TIMEZONE_COORDINATES = {
  'Pacific/Midway': [-28.2, -177.4],
  'Pacific/Honolulu': [21.3, -157.8],
  'America/Anchorage': [61.2, -149.9],
  'America/Los_Angeles': [34.1, -118.2],
  'America/Vancouver': [49.3, -123.1],
  'America/Tijuana': [32.5, -117.0],
  'America/Denver': [39.7, -105.0],
  'America/Phoenix': [33.4, -112.1],
  'America/Edmonton': [53.5, -113.5],
  'America/Chicago': [41.9, -87.6],
  'America/Mexico_City': [19.4, -99.1],
  'America/New_York': [40.7, -74.0],
  'America/Toronto': [43.7, -79.4],
  'America/Bogota': [4.7, -74.1],
  'America/Lima': [-12.0, -77.0],
  'America/Caracas': [10.5, -66.9],
  'America/Halifax': [44.6, -63.6],
  'America/Santiago': [-33.4, -70.6],
  'America/St_Johns': [47.6, -52.7],
  'America/Sao_Paulo': [-23.5, -46.6],
  'America/Argentina/Buenos_Aires': [-34.6, -58.4],
  'Atlantic/South_Georgia': [-54.3, -36.5],
  'Atlantic/Azores': [38.7, -27.2],
  'Atlantic/Cape_Verde': [15.0, -23.6],
  'UTC': [51.5, -0.1],
  'Europe/London': [51.5, -0.1],
  'Africa/Casablanca': [33.6, -7.6],
  'Europe/Paris': [48.9, 2.3],
  'Europe/Berlin': [52.5, 13.4],
  'Europe/Madrid': [40.4, -3.7],
  'Europe/Rome': [41.9, 12.5],
  'Europe/Amsterdam': [52.4, 4.9],
  'Europe/Brussels': [50.8, 4.4],
  'Europe/Zurich': [47.4, 8.5],
  'Europe/Stockholm': [59.3, 18.1],
  'Europe/Warsaw': [52.2, 21.0],
  'Africa/Lagos': [6.5, 3.4],
  'Europe/Athens': [38.0, 23.7],
  'Europe/Bucharest': [44.4, 26.1],
  'Europe/Helsinki': [60.2, 24.9],
  'Europe/Istanbul': [41.0, 29.0],
  'Africa/Cairo': [30.0, 31.2],
  'Africa/Johannesburg': [-26.2, 28.0],
  'Asia/Jerusalem': [32.1, 34.8],
  'Europe/Moscow': [55.8, 37.6],
  'Africa/Nairobi': [-1.3, 36.8],
  'Asia/Riyadh': [24.7, 46.7],
  'Asia/Baghdad': [33.3, 44.4],
  'Asia/Tehran': [35.7, 51.4],
  'Asia/Dubai': [25.3, 55.3],
  'Asia/Muscat': [23.6, 58.5],
  'Asia/Baku': [40.4, 49.9],
  'Asia/Kabul': [34.5, 69.2],
  'Asia/Karachi': [24.9, 67.0],
  'Asia/Tashkent': [41.3, 69.3],
  'Asia/Kolkata': [19.1, 72.9],
  'Asia/Colombo': [6.9, 79.9],
  'Asia/Kathmandu': [27.7, 85.3],
  'Asia/Dhaka': [23.8, 90.4],
  'Asia/Almaty': [43.2, 76.9],
  'Asia/Yangon': [16.9, 96.2],
  'Asia/Bangkok': [13.8, 100.5],
  'Asia/Jakarta': [-6.2, 106.8],
  'Asia/Ho_Chi_Minh': [10.8, 106.7],
  'Asia/Shanghai': [31.2, 121.5],
  'Asia/Hong_Kong': [22.3, 114.2],
  'Asia/Taipei': [25.0, 121.6],
  'Asia/Singapore': [1.4, 103.8],
  'Asia/Kuala_Lumpur': [3.1, 101.7],
  'Asia/Manila': [14.6, 121.0],
  'Australia/Perth': [-31.9, 115.9],
  'Asia/Seoul': [37.6, 127.0],
  'Asia/Tokyo': [35.7, 139.7],
  'Australia/Darwin': [-12.5, 130.8],
  'Australia/Adelaide': [-34.9, 138.6],
  'Australia/Sydney': [-33.9, 151.2],
  'Australia/Melbourne': [-37.8, 145.0],
  'Australia/Brisbane': [-27.5, 153.0],
  'Pacific/Guam': [13.4, 144.8],
  'Pacific/Noumea': [-22.3, 166.5],
  'Pacific/Auckland': [-36.8, 174.8],
  'Pacific/Fiji': [-18.1, 178.4],
  'Pacific/Tongatapu': [-21.2, -175.2],
}
