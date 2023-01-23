import ListItems from '../List/ListItems';
import { useContext, useEffect } from 'react';
import { Context } from '../ShoppingListProvider';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { shoppingListLoadAction } from '../../actions/shoppingListActions';

import { getListEffect } from '../../effects/list-effects';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  console.log('state: ', state);
  useEffect(() => {
  
    getListEffect(dispatch);
    
  }, []);

  return <>
    <div>
      <h1>My Shopping List</h1>    
      <ListItems shoppingList={state.shoppingList} />
    </div>
  </>;
}
