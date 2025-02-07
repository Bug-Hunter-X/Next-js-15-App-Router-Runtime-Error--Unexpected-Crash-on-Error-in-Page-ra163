```javascript
// app/layout.js
import './globals.css';
import { ErrorBoundary } from 'next/error-boundary';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}

export default RootLayout;
```
```javascript
// pages/about.js

export default function About() {
  // This will now be caught by the error boundary
  throw new Error('This is an error!');
}
```