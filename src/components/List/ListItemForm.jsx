export default function ListItemForm({
  item_name,
  quantity,
  onItemChanged,
  onQuantityChanged,
  onSubmit,
}) {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(item_name, quantity);
      }}>
      <textarea value={item_name} onChange={(e) => {
        onItemChanged(e.target.value);
      }}/>
      <input 
        type="number"
        value={quantity}
        onChange={(e) => {
          onQuantityChanged(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
