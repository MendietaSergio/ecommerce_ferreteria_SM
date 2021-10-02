import React, { useState } from "react";
import Button from "../Button/Button"
import "./FormContact.css"
const FormContact =() =>{
    const [ formData, setFormData ] = useState(initialData)
    

    const handleOnChange = (e) =>{
        setFormData({
          ...formData, //primero seteo lo que ya tiene
          [e.target.name]:e.target.value//se guarda el valor del nombre de cada input
         })
         console.log(formData);
      }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        console.log("Enviado: ",formData);
    }
    // agregar value a los input
    return(
        <>
            <div>
                <h6 className="text-center">Formulario</h6>
            </div>
            <div className="form-col">
                <form onChange={handleOnChange} onClick={handleOnSubmit} >
                    <div className="form-group">
                        <label >Nombre completo: </label>
                        <input className="form-control" name="name" type="text" />
                    </div>
                    <div className="form-group">
                        <label >Correo: </label>
                        <input className="form-control" name="email" type="text" />
                    </div>
                    <div className="form-group">
                        <label >Asunto: </label>
                        <input className="form-control" name="affair" type="text" />
                    </div>
                    <div className="form-group">
                        <label >Comentario: </label>
                        <textarea className="form-control" name="comment"/>
                    </div>
                    <div className="form-btn text-center">
                        <Button onClick={handleOnSubmit} />
                    </div>
                </form>
            </div>
        </>
    )
}
const initialData = {
    name: "",
    email: "",
    affair: "",
    comment: "",
}

export default FormContact;