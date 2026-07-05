import './NameConfirm.css';

export function NameConfirm({ onYes, onNo }) {
  return (
    <div className="name-confirm">
      <p className="name-confirm__title">Назваться Собой?</p>
      <div className="name-confirm__actions">
        <button className="name-confirm__button" type="button" onClick={onYes}>Да</button>
        <button className="name-confirm__button" type="button" onClick={onNo}>Нет</button>
      </div>
    </div>
  );
}
