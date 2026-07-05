import './FloatingPhrase.css';

export function FloatingPhrase({ children, lane = 0, speed = 'medium', delay = 0 }) {
  const style = {
    '--phrase-lane': lane,
    '--phrase-delay': `${delay}s`
  };

  return (
    <div className={`floating-phrase floating-phrase--${speed}`} style={style}>
      {children}
    </div>
  );
}
