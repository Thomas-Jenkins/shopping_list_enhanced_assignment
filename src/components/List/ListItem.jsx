export default function ListItem({ item }) {
  return (
    <div>
      {item.item_name}
      {item.quantity}
      <input type="checkbox" value={item.done} />
    </div>
  );
}
