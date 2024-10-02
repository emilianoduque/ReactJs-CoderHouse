import NavBar from './components/navbar/NavBar'
import ItemListContainer
 from './components/itemlistcontainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer saludo= {"Bienvenido a SmartifyHome"}></ItemListContainer>
    </>
  )
}

export default App
