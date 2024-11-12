import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainerWithHoc from './components/itemlistcontainer/ItemListContainer'
import { CarritoProvider } from './context/CarritoContext'
import Carrito from './components/Carrito/Carrito'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CheckOut from './components/checkout/CheckOut'

function App() {
  return (
    <>
      <BrowserRouter>
      
      <CarritoProvider>
      <NavBar></NavBar>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<ItemListContainerWithHoc></ItemListContainerWithHoc>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainerWithHoc></ItemListContainerWithHoc>}/>
        <Route path='detalle/:idProducto' element={<ItemDetailContainer></ItemDetailContainer>}/>
        <Route path='/carrito' element={<Carrito></Carrito>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
      </Routes>

      </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App

