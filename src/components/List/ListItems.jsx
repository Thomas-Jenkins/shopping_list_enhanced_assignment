import ListItem from './ListItem';

export default function ListItems({ list }) {
  return (
    <>
      <ol>
        {list.map((item) => {
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
