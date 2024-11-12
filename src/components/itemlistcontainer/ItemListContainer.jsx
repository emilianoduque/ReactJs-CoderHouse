import ItemList from "./ItemList"
import hocFilterProductos from "../hoc/HocFilterProducts"
import "./itemlist.scss"


const ItemListContainer = ( { productos }) => {
  return (
    <div className="itemListContainer">
      <ItemList productos={productos}></ItemList>
    </div>
  )
}
const ItemListContainerWithHoc = hocFilterProductos((ItemListContainer))
export default ItemListContainerWithHoc


