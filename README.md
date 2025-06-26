# US Citizenship Test for Elly

An interactive flashcard application for studying the official USCIS civics questions for the US citizenship test. Built with Next.js and featuring a smooth card-flipping interface with keyboard navigation.

## Features

- **Interactive Flashcards**: Click or use keyboard shortcuts to flip between questions and answers
- **Keyboard Navigation**: Use arrow keys to navigate (← → for previous/next, ↑↓ for flip)
- **Progress Tracking**: Visual progress bar showing completion percentage
- **Official Content**: All 100+ official USCIS civics questions and approved answers
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Card flip animations and transitions

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Navigate**: Use ← → arrow keys or click Previous/Next buttons
- **Flip Cards**: Click the card or press ↑/↓ arrow keys to reveal answers
- **Reset**: Click the reset button (↻) to return to question 1
- **Progress**: Track your progress with the progress bar at the bottom

## Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Inline styles with CSS-in-JS
- **Build Tool**: Turbopack (development)
- **Linting**: ESLint with Next.js config

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application with flashcard logic
└── tailwind.config.js       # Tailwind configuration
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/citizenship-test-nextjs)

## License

MIT
