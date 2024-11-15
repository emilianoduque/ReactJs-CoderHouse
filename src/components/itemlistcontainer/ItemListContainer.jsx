import ItemList from "./ItemList"
import hocFilterProductos from "../hoc/HocFilterProducts"
import "./itemlist.scss"
import Loading from "../loading/Loading"

const ItemListContainer = ( { productos, cargando }) => {
  return (
    <>
      {
          cargando === true ? (<Loading></Loading>) :
         <div className="itemListContainer"><ItemList productos={productos}></ItemList></div>
      }
    </>
  
  )
}
const ItemListContainerWithHoc = hocFilterProductos((ItemListContainer))
export default ItemListContainerWithHoc
