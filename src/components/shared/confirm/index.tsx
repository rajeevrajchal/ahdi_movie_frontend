import React, { FC } from 'react';

interface ConfirmInterface {
  confirmAction: () => void;
  cancelAction: () => void;
}
const Confirm: FC<ConfirmInterface> = ({ confirmAction, cancelAction }) => {
  return (
    <div className="flex align-center items-center justify-center mt-lg">
      <div className="btn primary" onClick={() => cancelAction()}>
        Cancel
      </div>
      <div className="btn secondary ml-lg" onClick={() => confirmAction()}>
        Yes
      </div>
    </div>
  );
};

export default Confirm;
