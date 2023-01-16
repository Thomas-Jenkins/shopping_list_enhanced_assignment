export default function ShoppingListItem({ item }) {
  return (
    <main>
      {item.item_name}
      {item.quantity}
      <input type="checkbox" value={item.done} />
            
    </main>
  );
}
