# World Time

A sleek web application that displays multiple time zones with live digital clocks, an interactive world map, and multiple themes.

## Features

- **Live Clocks**: Real-time digital clocks updating every second
- **Multiple Themes**: Linear (dark/light) and World Clock (dark/light) themes
- **Add/Remove Timezones**: Searchable modal to add any IANA timezone
- **Interactive World Map**: Click a clock card to highlight its location on the map
- **12/24 Hour Toggle**: Switch between 12-hour and 24-hour time formats
- **Persistent Preferences**: All settings saved to localStorage

## Tech Stack

- React (Vite)
- Tailwind CSS
- react-simple-maps (SVG world map)
- Intl.DateTimeFormat (timezone calculations)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Firebase Deployment

Firebase hosting is pre-configured. To deploy:

```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Update .firebaserc with your project ID
# Then deploy:
firebase deploy --only hosting
```

The `firebase.json` is configured to serve from the `dist/` directory with SPA rewrites.
