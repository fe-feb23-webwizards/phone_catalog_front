import React, { memo } from 'react';
import './ThankYouPage.scss';

type Modal = {
  setModalIsOpen: (value: boolean) => void;
};

export const ThankYouPage: React.FC<Modal> = memo(({ setModalIsOpen }) => {
  return (
    <div className="content">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <h1 id="mainText">Thank you !</h1>
          <p>let your new gadget bring only joy!</p>
          <button
            className="go-home"
            type="button"
            onClick={() => setModalIsOpen(false)}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
});
