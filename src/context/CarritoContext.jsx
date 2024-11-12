import { createContext, useState } from "react";

const CarritoContext = createContext();

const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addProductoCarrito = (nuevoProducto) => {
        const condicion = estaEnCarrito(nuevoProducto.id)

        if(condicion){
            const tempCarrito = [...carrito]
            const findIndex = tempCarrito.findIndex((productoCarrito) => productoCarrito.id === nuevoProducto.id)
            tempCarrito[findIndex].cantidad = tempCarrito[findIndex].cantidad + nuevoProducto.cantidad

            setCarrito(tempCarrito);
        } else {
            setCarrito([...carrito, nuevoProducto])
        }
    };

    const estaEnCarrito = (idProducto) => {
        return carrito.some((productoCarrito) => productoCarrito.id === idProducto);
    };

    const cantidadTotal = () =>{
        const cantidad = carrito.reduce((acc, productoCarrito)=> acc += productoCarrito.cantidad, 0);
        return cantidad;
    };

    const precioTotal = ()=> {
      const precio = carrito.reduce((acc, productoCarrito) => acc + (productoCarrito.cantidad * productoCarrito.precio), 0)
      return precio;
    };

    const borrarCarrito = () => {
        setCarrito([]);
    }

    const borrarProductoPorId = (idProducto) => {
        const findIndex = carrito.findIndex((productoCarrito) => productoCarrito.id === idProducto);
        const tempCarrito = [...carrito];

        if( tempCarrito[findIndex].cantidad > 1){
            tempCarrito[findIndex].cantidad = tempCarrito[findIndex].cantidad - 1;
            setCarrito(tempCarrito);
        } else if(tempCarrito[findIndex].cantidad === 1){
            const filterProductos = carrito.filter((productoCarrtio) => productoCarrtio.id !== idProducto);
            setCarrito(filterProductos);
        }
    }

    return (
        <CarritoContext.Provider value={{carrito, addProductoCarrito, cantidadTotal, precioTotal, borrarCarrito, borrarProductoPorId}}>
            {children}
        </CarritoContext.Provider>
    )

}

export {CarritoContext, CarritoProvider}