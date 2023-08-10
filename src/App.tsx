import { useState } from "react";
import "./index.scss";
import Modal from "./Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [modalAnimated, setModalAnimated] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModal(true)} className="open-modal-btn">
        ✨ Открыть окно без анимации
      </button>
      {modal && <Modal modal={modal} setModal={setModal} />}
      <button onClick={() => setModalAnimated(true)} className="open-modal-btn">
        ✨ Открыть окно с анимацией
      </button>
      <Modal modal={modalAnimated} setModal={setModalAnimated} />
    </div>
  );
}

export default App;
