export const initialState = () => {
  return {
    shoppingList: [],
    item_name: '',
    quantity: 0,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'shopping-list-load':
      return {
        ...state,
        shoppingList: action.shoppingList,
      };
    case 'shopping-list-item-add': 
      return {
        ...state,
        item_name: action.item_name,
      };
    case 'shopping-list-item-quantity-add':
      return {
        ...state,
        quantity: action.quantity,
      };
    default:
      return state;
  }
};
