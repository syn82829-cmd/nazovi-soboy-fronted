import './FloatingPhrase.css';

export function FloatingPhrase({ children, x = '50%', y = '90%', duration = 24, delay = 0 }) {
  const style = {
    '--phrase-x': x,
    '--phrase-y': y,
    '--phrase-duration': `${duration}s`,
    '--phrase-delay': `${delay}s`
  };

  return (
    <div className="floating-phrase" style={style}>
      {children}
    </div>
  );
}
