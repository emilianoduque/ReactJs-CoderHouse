import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <div>
      {
        productos.map((producto) => {
          return <Item producto={producto} key={producto.id}></Item>
        })
      }
    </div>
  )
}

export default ItemList;


