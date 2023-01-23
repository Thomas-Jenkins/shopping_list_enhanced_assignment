import { shoppingListLoadAction } from '../actions/shoppingListActions';
import { getShoppingListItems } from '../services/shopping-list-items';


export const getListEffect = async (dispatch) => {
  const data = await getShoppingListItems();
  dispatch(shoppingListLoadAction(data));
};
