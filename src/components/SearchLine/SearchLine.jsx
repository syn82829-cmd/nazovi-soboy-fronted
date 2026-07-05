import './SearchLine.css';

export function SearchLine({ value, onChange, onSubmit, onSearchIntent, inputRef, isOpen }) {
  function handlePointerDown(event) {
    if (isOpen) {
      return;
    }

    event.preventDefault();
    onSearchIntent();
  }

  return (
    <form className="search-line" onSubmit={onSubmit} onPointerDown={handlePointerDown}>
      {!value && <span className="search-line__ghost">я...</span>}

      <input
        ref={inputRef}
        className="search-line__input"
        value={value}
        onChange={onChange}
        readOnly={!isOpen}
        aria-label="Продолжить я"
        autoComplete="off"
        autoCapitalize="none"
        spellCheck="false"
      />
    </form>
  );
}
