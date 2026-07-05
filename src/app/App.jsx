import { useEffect } from 'react';

import { OpeningFlow } from '../screens/OpeningFlow/OpeningFlow.jsx';
import { openTelegramFullscreen } from './telegramViewport.js';

import './App.css';

export function App() {
  useEffect(() => {
    openTelegramFullscreen();
  }, []);

  return (
    <main className="app-shell" aria-label="Назови Собой">
      <OpeningFlow />
    </main>
  );
}
