import { Message } from '../../components/Message/Message.jsx';
import { NameConfirm } from '../../components/NameConfirm/NameConfirm.jsx';

import './Dialogue.css';

export function Dialogue() {
  return (
    <section className="dialogue" aria-label="Диалог">
      <Message from="ai">Как ты это понимаешь?</Message>
      <Message from="ai">Я услышал.</Message>
      <NameConfirm />
    </section>
  );
}
