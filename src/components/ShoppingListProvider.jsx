import { 
  createContext, 
  useReducer 
} from 'react';
import { 
  initialState, 
  reducer 
} from './reducers/shoppingListItemReducer';  
import { reducerLogger } from './reducers/reducer-logger';

export const Context =  createContext({
  state: initialState(),
  reducer,
});

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerLogger(reducer),
    initialState()
  );

  const contextObject = { state, dispatch };
  return (
    <Context.Provider value={contextObject}>
      {children}
    </Context.Provider>
  );
};
