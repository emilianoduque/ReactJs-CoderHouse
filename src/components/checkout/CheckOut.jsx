import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext"
import db from "../../db/db";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import FormCheckOut from "./FormCheckOut";
import validarForm from "../../utils/ValidarForm";
import { toast } from "react-toastify";

const CheckOut = () => {
    const [idOrden, setIdOrden] = useState(null);
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    
    const { carrito, precioTotal, borrarCarrito} = useContext(CarritoContext);

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value});
    };

    const handleSubmitForm = (event) =>{
        event.preventDefault();

        const orden = {
            comprador: {...dataForm},
            productos: {...carrito},
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal()
        };

        validarForm(dataForm)
            .then((resp) => {
                if(resp.status === "error"){
                    throw new Error(resp.message);
                }
                toast.success("Subiendo orden...")
                return subirOrden(orden);
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const subirOrden = (nuevaOrden) => {
        const ordersRef = collection(db, "ordenes")
        addDoc(ordersRef, nuevaOrden)
            .then((resp) => setIdOrden(resp.id))
            .catch((error) => console.error(error))
            .finally(() => {
                actualizarStock();
            })
    }

    const actualizarStock = () => {
        carrito.map(({id, cantidad, ...dataProducto}) => {
            const productoRef = doc(db, "Productos", id)
            setDoc(productoRef, {...dataProducto, stock: dataProducto.stock - cantidad})
        })
        borrarCarrito();
    }

  return (
    <div>
    {
        idOrden === null ? (<FormCheckOut dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}></FormCheckOut>) : (
            <div>
                <h2>Gracias por tu compra!</h2>
                <p>Tu orden se subió correctamente 😃</p>
                <p>Guarda el numero de seguimiento: {idOrden}</p>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }
    </div>
  )
}

export default CheckOut