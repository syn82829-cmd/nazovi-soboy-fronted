import { useEffect } from 'react';

import { OpeningFlow } from '../screens/OpeningFlow/OpeningFlow.jsx';
import { openTelegramFullscreen } from './telegramViewport.js';
import { bindVisualViewport } from './visualViewport.js';

import './App.css';

export function App() {
  useEffect(() => {
    const unbindVisualViewport = bindVisualViewport();
    openTelegramFullscreen();

    return () => {
      unbindVisualViewport();
    };
  }, []);

  return (
    <main className="app-shell" aria-label="Назови Собой">
      <OpeningFlow />
    </main>
  );
}
