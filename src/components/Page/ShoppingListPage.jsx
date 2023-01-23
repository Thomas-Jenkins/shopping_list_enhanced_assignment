import ListItems from '../List/ListItems';
import { useContext, useEffect } from 'react';
import { Context } from '../ShoppingListProvider';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { shoppingListLoadAction } from '../../actions/shoppingListActions';



export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  console.log('state: ', state);
  useEffect(() => {
    (async () => {
      const shoppingItems = await getShoppingListItems(); 
      console.log('shoppingListPage:', shoppingItems);
      dispatch(shoppingListLoadAction(shoppingItems));
    });
  }, []);

  return <>
    <div>
      <h1>My Shopping List</h1>    
      <ListItems shoppingList={state.shoppingList} />
    </div>
  </>;
}
