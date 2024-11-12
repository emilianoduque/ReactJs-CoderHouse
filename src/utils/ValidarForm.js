import { mixed, object, string } from "yup";

let userEsquema = object({
    fullname: string().required("El campo de nombre es requerido"),
    phone: mixed().required("El campo de teléfono es requerido"),
    email: string().email("El campo email, debe tener un @")
})

const validarForm = (dataForm) => {
    return userEsquema.validate(dataForm)
        .then(() => {
            return { status: "success"};
        })
        .catch((error) => {
            return {status: "error", message: error.message};
        })
}

export default validarForm