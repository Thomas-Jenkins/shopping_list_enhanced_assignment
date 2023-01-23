import { client, checkError } from './client.js';

export async function getShoppingListItems() {
  const response = await client
    .from('anon-shopping-list-items')
    .select(`
      *
`)
    .order('created_at', { ascending: false })
  ;
  console.log(response);
  return checkError(response);
}

export async function getShoppingListItem(shoppingListItemId) {
  const response = await client
    .from('anon-shopping-list-items')
    .select(`
      *
`)
    .match({ id: shoppingListItemId })
    .single()
  ;
  return checkError(response);
}

export async function createShoppingListItem(
  item_name,
  quantity,
  done = false) {
  const response = await client
    .from('anon-shopping-list-items')
    .insert({
      item_name,
      quantity,
      done
    })
  ;
  return checkError(response);
}

export async function updateShoppingItem(shoppingItemId, fields) {
  const response = await client
    .from('anon-shopping-list-items')
    .update({
      ...fields,
    })
    .eq('id', shoppingItemId)
  ;
  return checkError(response);
}

export async function deleteShoppingItem(shoppingItemId) {
  const response = await client
    .from('anon-shopping-list-items')
    .delete()
    .eq('id', shoppingItemId)
  ;
  return checkError(response);
}
