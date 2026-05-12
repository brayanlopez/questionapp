# QuestionApp

A React-based study application for mathematical topics, designed to help university students prepare for exams.

## Features

- Math topic sections with questions
- Exam simulation with countdown timer
- Multiple subject areas (Algebra, Arithmetic, Physics)
- MathJax integration for rendering mathematical expressions
- Dark theme support

## Tech Stack

- React 19 + TypeScript
- Vite
- MUI (Material-UI) + Emotion
- React Router
- Vitest (testing)

## Project Structure

```txt
src/
├── components/       # Reusable UI components
│   ├── Navigation/   # App navigation
│   ├── Exam.component.tsx
│   ├── Question.component.tsx
│   └── Section.component.tsx
├── views/            # Page views
│   ├── HomePage/
│   ├── MathPage/
│   ├── InfoPage/
│   └── ErrorPage/
├── utils/            # Utilities and hooks
└── mocks/            # Mock data
    ├── math/         # Algebra, Arithmetic
    └── physics/
```

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run test       # Run tests
npm run test:coverage  # Run tests with coverage
```

## TODO

- create a better dark theme
- add more questions and sections about math topics
- implement redux flow
- implement quiz option
