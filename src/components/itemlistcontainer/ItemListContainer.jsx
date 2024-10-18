import ItemList from "./ItemList"
import hocFilterProductos from "../hoc/HocFilterProducts"
import ItemDetailContainer from "../itemDetail/ItemDetailContainer"
import "./itemlist.scss"

const ItemListContainer = ( {productos }) => {
  return (
    <div className="itemListContainer">
      <ItemList productos={productos}></ItemList>

      <ItemDetailContainer></ItemDetailContainer>
    </div>
  )
}

const ItemListContainerWithHoc = hocFilterProductos(ItemListContainer)
export default ItemListContainerWithHoc
