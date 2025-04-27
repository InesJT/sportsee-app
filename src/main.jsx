import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import UserContext from './context';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider value={12}>
      <App />
    </UserContext.Provider>
  </StrictMode>
);
