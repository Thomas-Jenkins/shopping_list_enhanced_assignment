import ListItem from './ListItem';

export default function ListItems({ 
  shoppingList,
  onItemDoneChanged, 
}) {
  return (
    <>
      <ol>
        {shoppingList.map((item) => {
          return (
            <li key={item.id}>
              <ListItem item={item} onItemDoneChanged={(done) => {
                onItemDoneChanged(item.id, done);
              }} />
            </li>
          );
        })}
      </ol>
    </>
      
            
  );
}
