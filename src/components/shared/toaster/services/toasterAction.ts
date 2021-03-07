import { SET_TOASTER, ToasterStateInterface } from './toasterReducer';

export const setToasterState = (toasterData: ToasterStateInterface) => ({
  type: SET_TOASTER,
  payload: {
    appear: toasterData.appear,
    title: toasterData.title,
    name: toasterData.name,
    message: toasterData.message,
  },
});
