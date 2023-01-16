import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducers/shoppingListItemReducer';

export const Context =  createContext({
  state: initialState(),
  reducer,
});

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  const contextObject = { state, dispatch };
  return (
    <Context.Provider value={contextObject}>
      {children}
    </Context.Provider>
  );
};
