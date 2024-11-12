const FormCheckOut = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <form onSubmit={handleSubmitForm}>
        <label>Nombre Completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>

        <label>Teléfono</label>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>

        <label>Email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>
    </form>
  )
}

export default FormCheckOut