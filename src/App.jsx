import NavBar from './components/navbar/NavBar'
import ItemListCotainerWithHoc from "./components/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainerWithHoc from './components/itemlistcontainer/ItemListContainer'


function App() {
  return (
    <>
      <BrowserRouter>
      
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={ <ItemListCotainerWithHoc></ItemListCotainerWithHoc>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainerWithHoc></ItemListContainerWithHoc>}/>
        <Route path='detalle/:idProducto' element={<ItemDetailContainer></ItemDetailContainer>}/>
      </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

