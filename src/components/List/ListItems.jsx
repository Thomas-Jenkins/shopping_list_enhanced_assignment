import ListItem from './ListItem';

export default function ListItems({ shoppingList }) {
  return (
    <>
      <ol>
        {shoppingList.map((item) => {
          return (
            <li key={item.id}>
              <ListItem item={item} />
            </li>
          );
        })}
      </ol>
    </>
      
            
  );
}
