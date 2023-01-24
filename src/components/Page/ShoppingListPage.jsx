import ListItems from '../List/ListItems';

import { useContext, useEffect } from 'react';

import { Context } from '../ShoppingListProvider';

import { 
  createShoppingListItem, updateShoppingItem, 
// getShoppingListItems, 
} from '../../services/shopping-list-items';

import { 
  shoppingListItemAdd,
  shoppingListItemDoneChange,
  shoppingListItemQuantityAdd,
  // shoppingListLoadAction
} from '../../actions/shoppingListActions';

import { getListEffect } from '../../effects/list-effects';
import ListItemForm from '../List/listItemForm';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getListEffect(dispatch);
  }, []);

  const onItemChanged = (item_name) => {
    dispatch(shoppingListItemAdd(item_name));
  };

  const onQuantityChanged = (quantity) => {
    dispatch(shoppingListItemQuantityAdd(quantity));
  };

  const onItemDoneChanged = (itemId, done) => {
    dispatch(shoppingListItemDoneChange(done));
  };

  return <>
    <section>
      <h1>My Shopping List</h1>    
      <ListItems 
        shoppingList={state.shoppingList}
        onItemDoneChanged={async (itemId, done) => {
          await updateShoppingItem(itemId, done);
          onItemDoneChanged(itemId, done);
        }} />
    </section>
    <section>
      <h1>Shopping List Item Input</h1>
      <ListItemForm 
        item_name={state.item_name}
        quantity={state.quantity}
        onItemChanged={onItemChanged}
        onQuantityChanged={onQuantityChanged}
        onSubmit={async (item_name, quantity) => {
          await createShoppingListItem(item_name, quantity);

          dispatch(shoppingListItemAdd);
          dispatch(shoppingListItemQuantityAdd);
        }}
      />
    </section>
  </>;
}
