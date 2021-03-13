import { CLOSE_MODAL, OPEN_MODAL, ModalStateInterface } from './modalReducer';

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openModal = (modalData: ModalStateInterface) => ({
  type: OPEN_MODAL,
  payload: {
    show: modalData.mode,
    mode: modalData.mode,
  },
});
