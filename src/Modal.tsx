import React, { Dispatch, SetStateAction } from "react";

interface IModal {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ modal, setModal }: IModal) => {
  return (
    <div>
      (
      <div className={`overlay animated ${modal ? "show" : null}`}>
        <div className="modal">
          <svg onClick={() => setModal(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
      )
    </div>
  );
};

export default Modal;
