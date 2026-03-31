# CareerOS

A career planning web app built for TechFest 2026. CareerOS helps users build a professional profile, discover relevant job opportunities, and follow a structured career development roadmap.

## Features

- **Authentication** — Email/password login and signup via Firebase Auth
- **Career DNA** — Build a profile with your education, skills, and career preferences
- **Job Intelligence** — Browse job roles matched to your profile
- **Roadmap** — Three-phase career guide from foundation to active job search
- **Actions** — Tools for resume building, application tracking, and networking

## Tech Stack

- React 19 + TypeScript
- Vite
- Firebase (Auth + Firestore)
- React Router

## Getting Started

1. Clone the repo
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root with your Firebase config:
   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```
4. Start the dev server:
   ```
   npm run dev
   ```

## License

Copyright 2026 Darryl. All rights reserved.
