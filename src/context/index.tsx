import React, { createContext, useReducer } from 'react';
import { ContextDevTool } from 'react-context-devtool';

import { $CHILDREN, $FIXME } from '../constants';
import { toasterReducer } from '../components/shared/toaster/services/toasterReducer';
interface ContextProviderInterface {
  children: $CHILDREN;
}

export const initialState = {
  isLoggedIn: false,
  user: {},
  toaster: {
    appear: false,
    title: '',
    name: '',
    message: '',
  },
};

export const Context = createContext<$FIXME>({});

const combineReducers = (...reducers: $FIXME) => (
  state: $FIXME,
  action: $FIXME
) => {
  for (let i = 0; i < reducers.length; i++) {
    state = reducers[i](state, action);
  }
  return state;
};

export const Provider: React.FC<ContextProviderInterface> = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(toasterReducer),
    initialState
  );
  const value = { state, dispatch };
  return (
    <Context.Provider value={value}>
      <ContextDevTool
        context={Context}
        id="33c1fb2c59925f5adb813f338f5ff294"
        displayName="RentDodo Context"
      />
      {children}
    </Context.Provider>
  );
};
