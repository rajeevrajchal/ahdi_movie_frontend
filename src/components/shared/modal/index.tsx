import React, { FC, useContext } from 'react';
import './modal.scss';
import { Context } from '../../../context';
import { closeModal } from './services/modalAction';
import { $CHILDREN } from '../../../constants';

interface ModalInterface {
  children: $CHILDREN;
  title: string;
}

const Modal: FC<ModalInterface> = (props) => {
  const { children, title } = props;
  const { state, dispatch } = useContext(Context);
  const { show } = state.modal;
  return (
    <>
      {show && (
        <div className="modal flex-centered">
          <div
            className="modal-backdrop full-width full-height"
            onClick={() => dispatch(closeModal())}
          />
          <div className="modal-body card outline">
            <div className="header flex justify-between ">
              <div className="modal-header title-xs bold text-primary">
                {title}
              </div>
              <div className="modal-close flex-centered">
                <i
                  className="material-icons"
                  onClick={() => dispatch(closeModal())}
                >
                  clear
                </i>
              </div>
            </div>
            <div className="modal-elements">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
