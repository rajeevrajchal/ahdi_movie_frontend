import React, { useContext, useEffect } from 'react';
import './toaster.scss';
import { Context } from '../../../context';
import { ToasterStateInterface } from './services/toasterReducer';
import { setToasterState } from './services/toasterAction';

const Toaster = () => {
  const { state, dispatch } = useContext(Context);
  const { appear, title, name, message } = state.toaster;
  console.log(state.toaster);
  useEffect(() => {
    const timer = setTimeout(() => {
      const toasterData: ToasterStateInterface = {
        appear: false,
        title: '',
        name: '',
        message: '',
      };
      dispatch(setToasterState(toasterData));
    }, 3000);
    return () => clearTimeout(timer);
  }, [appear]);
  return (
    <div className={`toaster ${appear ? 'on' : 'off'} ${title.toLowerCase()}`}>
      <div className="toaster-title bold">{name}</div>
      <div className="toaster-description mt-xs">{message}</div>
    </div>
  );
};

export default Toaster;
