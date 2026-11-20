# Roshni's 18th Birthday Scrapbook

A personal birthday website for Roshni, with a Nepali and English greeting, an opening envelope, a story from Class 10 to Class 12, a love letter, poems, a photo gallery, 18 birthday messages, surprise notes, confetti, and a closing birthday wish. Visitors can also play background music and open the photos for a closer look.

## Run locally

Prerequisite: Node.js 20.19 or newer, or Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Vite serves the site at `http://localhost:3000`. To create a production build, run `npm run build`; to preview it locally, run `npm run preview`.

## Deploy

The production build is a static site written to `dist/`. The included Vercel
configuration builds with `npm run build` and serves that directory. The site
does not need API keys or environment variables. Google Fonts are loaded from
Google Fonts when available, with system font fallbacks.

## Personalize the site

- Edit the recipient's name, birthday text, story, letter, poems, gallery captions, and other messages in [`src/config/birthdayConfig.ts`](src/config/birthdayConfig.ts).
- Add a portrait and gallery photos in [`public/images/README.txt`](public/images/README.txt).
- Replace the looping background MP3 using the instructions in [`public/music/README.txt`](public/music/README.txt).
- Built-in animated stickers are implemented in `src/components/Stickers.tsx`.

The site includes bundled fallback artwork for the portrait and some gallery entries. Missing gallery images without a bundled fallback display a decorative scrapbook placeholder.
