export default function ListItem({
  item,
  onItemDoneChanged,
}) {
  return (
    <div>
      {item.item_name}
      {item.quantity}
      <input type="checkbox" value={item.done} onChange={() => {
        onItemDoneChanged(!item.done);
      }}/>
    </div>
  );
}
