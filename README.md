# Next.js 15 App Router Runtime Error

This repository demonstrates a runtime error in Next.js 15's App Router. Throwing an error in a page component causes a full application crash, bypassing any error boundaries.

## Bug Description

When an error is thrown within a page component, the App Router doesn't gracefully handle it. Instead of displaying an error boundary or gracefully degrading, the entire application crashes, providing a poor user experience.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.  You will see the app crash.

## Solution

While using try...catch might seem like a solution, it is not recommended as a solution for Next.js 15 app router errors.  The ideal solution is to handle errors at a higher level using proper error boundaries provided by the Next.js framework in combination with the app router.  This demonstrates a better way to handle such errors using error boundaries and more graceful application behavior.
