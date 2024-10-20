import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <div className="board-items">
      {
        productos.map((producto) => {
          return <Item producto={producto} key={producto.id}></Item>
        })
      }
    </div>
  )
}

export default ItemList;


