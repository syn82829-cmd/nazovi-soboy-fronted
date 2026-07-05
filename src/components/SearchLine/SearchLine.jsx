import './SearchLine.css';

export function SearchLine({ value, onChange, onSubmit, onSearchIntent }) {
  return (
    <form className="search-line" onSubmit={onSubmit} onClick={onSearchIntent}>
      <span className="search-line__ghost">я...</span>

      <input
        className="search-line__input"
        value={value}
        onChange={onChange}
        onFocus={onSearchIntent}
        aria-label="Продолжить я"
        autoComplete="off"
        autoCapitalize="none"
        spellCheck="false"
      />
    </form>
  );
}
