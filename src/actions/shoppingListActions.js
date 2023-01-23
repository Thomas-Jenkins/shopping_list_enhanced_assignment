export const shoppingListLoadAction = (shoppingList) => {
  return {
    type: 'shopping-list-load',
    shoppingList,
  };
};
