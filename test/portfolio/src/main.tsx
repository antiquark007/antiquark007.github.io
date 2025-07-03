import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// StrictMode is a React development tool that:
// 1. Identifies components with unsafe lifecycles
// 2. Warns about legacy string ref API usage  
// 3. Warns about deprecated findDOMNode usage
// 4. Detects unexpected side effects by double-invoking functions
// 5. Detects legacy context API usage
// 6. Ensures reusable state and helps catch state-related bugs

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
