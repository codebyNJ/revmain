import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css';

// Ensure DOM is loaded before creating root
const initializeApp = () => {
  const container = document.getElementById('root');
  
  if (!container) {
    throw new Error('Root element not found. Make sure there is a div with id="root" in your HTML.');
  }

  const root = createRoot(container);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
