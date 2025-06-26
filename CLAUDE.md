# CLAUDE.md - Development Context

## Project Overview
This is a Next.js application that provides an interactive flashcard system for studying US citizenship test questions. The app displays official USCIS civics questions with a card-flipping interface and keyboard navigation.

## Key Features
- Interactive flashcard interface with 3D flip animations
- Full keyboard navigation support (arrow keys)
- Progress tracking with visual progress bar
- Contains all official USCIS civics questions and answers
- Responsive design with inline CSS-in-JS styling

## Development Commands
- `npm run dev` - Start development server (uses Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint linting

## Architecture Notes
- **Framework**: Next.js 15.3.4 with App Router
- **Force Dynamic**: Uses `export const dynamic = 'force-dynamic'` for SSR behavior
- **State Management**: React hooks (useState, useEffect)
- **Styling**: Inline styles with CSS-in-JS approach
- **TypeScript**: Fully typed with strict configuration

## File Structure
- `src/app/page.tsx` - Main application component with all flashcard logic
- `src/app/layout.tsx` - Root layout component
- `src/app/globals.css` - Global CSS styles
- `package.json` - Dependencies and scripts

## Key Components
- **CITIZENSHIP_QUESTIONS**: Array of 100+ official questions and answers
- **Card Flip Logic**: 3D CSS transforms with transition animations
- **Keyboard Handlers**: Arrow key navigation and card flipping
- **Progress Tracking**: Visual progress bar and percentage display

## Dependencies
- React 19.0.0
- Next.js 15.3.4
- TypeScript 5.x
- Tailwind CSS 4.x (configured but using inline styles)
- ESLint with Next.js config

## Deployment
- Optimized for Vercel deployment
- Uses force-dynamic for proper SSR behavior
- No external APIs or database dependencies