import React, { FC, useContext } from 'react';
import { Context } from '../../../../../context';
import { openModal } from '../../../../../components/shared/modal/services/modalAction';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';

interface BreadcrumbInterface {
  isBack?: boolean;
  screen: MOVIESCREEN;
  setScreen: (screen: MOVIESCREEN) => void;
}

const Breadcrumb: FC<BreadcrumbInterface> = (props) => {
  const { isBack, setScreen, screen } = props;
  const { dispatch } = useContext(Context);
  const handleModal = () => {
    const modalData = {
      show: true,
      mode: 'new_movie',
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
        <h2> Movie</h2>
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
