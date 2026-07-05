import './SearchLine.css';

export function SearchLine({ value, onChange, onSubmit }) {
  return (
    <form className="search-line" onSubmit={onSubmit}>
      <span className="search-line__prefix">Я</span>
      <input
        className="search-line__input"
        value={value}
        onChange={onChange}
        aria-label="Продолжить Я"
        autoComplete="off"
        autoCapitalize="none"
        spellCheck="false"
      />
      {!value && <span className="search-line__ghost">...</span>}
    </form>
  );
}
