# Fiona Mwose Flower Universe

A premium romantic landing page built as a private digital bouquet for Fiona Mwose. It uses React, Vite, Tailwind CSS, Framer Motion, and Lucide React to create a dreamy cosmic flower garden with live time, floating petals, sparkles, rotating flower cards, and heartfelt notes.

## Features

- Responsive luxury landing page
- Live time and date card that updates every second
- Cinematic coder terminal intro before the universe opens
- Optional flower-emergence audio from `public/love-me-not.mp3`
- Time-of-day romantic message
- Animated realistic flower showcase
- Germinate, sprout, and bloom transition for each active flower
- Floating love notes, sparkles, and falling petals
- Emotional letter and motivational section
- Netlify-ready static deployment

## Local Setup

```bash
npm install
npm run dev
```

Vite will print a local URL, usually:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Netlify Deployment

This project includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

On Netlify, use:

- Build command: `npm run build`
- Publish directory: `dist`

## Project Structure

```text
src/
  App.jsx
  data.js
  main.jsx
  styles.css
  components/
    Hero.jsx
    LiveTime.jsx
    FlowerShowcase.jsx
    FloatingNotes.jsx
    FeelingLetter.jsx
    MotivationSection.jsx
    Footer.jsx
```

## Notes

Flower images are loaded from remote Unsplash image URLs and styled with responsive `object-cover` presentation. The animations are intentionally gentle so the page remains smooth on mobile.
