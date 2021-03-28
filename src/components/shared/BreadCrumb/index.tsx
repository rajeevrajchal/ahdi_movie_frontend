import React, { FC, useContext } from 'react';
import { $FIXME } from '../../../constants';
import { Context } from '../../../context';
import { openModal } from '../modal/services/modalAction';

interface BreadcrumbInterface {
  isBack?: boolean;
  screen?: $FIXME;
  title: string;
  modal_mode: string;
  setScreen: (screen: $FIXME) => void | $FIXME;
}

const Breadcrumb: FC<BreadcrumbInterface> = (props) => {
  const { isBack, setScreen, screen, title, modal_mode } = props;
  const { dispatch } = useContext(Context);
  const handleModal = () => {
    const modalData = {
      show: true,
      mode: modal_mode,
    };
    dispatch(openModal(modalData));
  };
  return (
    <div className="breadcrumb flex justify-between align-center items-center">
      <div
        className="btn primary bold flex align-center items-center"
        onClick={() => handleModal()}
      >
        <h3>
          <i className="fa fa-plus mr-md" aria-hidden="true"></i>
        </h3>
        <h2> {title} </h2>
      </div>
      <div className="icon" onClick={() => setScreen(screen)}>
        <i
          className={`fa ${isBack ? 'fa-arrow-left' : 'fa-list'}`}
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Breadcrumb;
