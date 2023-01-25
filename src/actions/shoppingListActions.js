export const shoppingListLoadAction = (shoppingList) => {
  return {
    type: 'shopping-list-load',
    shoppingList,
  };
};

export const shoppingListItemAdd = (item_name) => {
  return {
    item_name,
    type: 'shopping-list-item-add',
  };
};

export const shoppingListItemQuantityAdd = (quantity) => {
  return {
    quantity,
    type: 'shopping-list-item-quantity-add',
  };
};

export const shoppingListItemDoneChange = (done) => {
  return {
    done,
    type: 'shopping-list-item-done-change'
  };
};
