import { shoppingListLoadAction } from '../actions/shoppingListActions';
import { getShoppingListItems } from '../services/shopping-list-items';


export const getListEffect = async (dispatch) => {
  const items = await getShoppingListItems();
  console.log('items', items);
  dispatch(shoppingListLoadAction(items));
};
