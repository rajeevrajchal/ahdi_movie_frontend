import React, { FC } from 'react';

interface ConfirmInterface {
  confirmAction: () => void;
  cancelAction: () => void;
}
const Confirm: FC<ConfirmInterface> = ({ confirmAction, cancelAction }) => {
  return (
    <div className="flex">
      <div className="btn primary" onClick={() => cancelAction()}>
        Cancel
      </div>
      <div className="btn secondary" onClick={() => confirmAction()}>
        Yes
      </div>
    </div>
  );
};

export default Confirm;
