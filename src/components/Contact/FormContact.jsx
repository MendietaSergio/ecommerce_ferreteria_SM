import React from "react";
import Button from "../Button/Button"
import "./FormContact.css"
const FormContact =() =>{

    return(
        <>
            <div>
                <h6 className="text-center">Formulario</h6>
            </div>
            <div className="form-col">
                <form  >
                    <div className="form-group">
                        <label >Nombre completo: </label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label >Correo: </label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label >Asunto: </label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label >Comentario: </label>
                        <textarea className="form-control" />
                    </div>
                    <div className="form-btn">
                        <Button/>                    
                    </div>
                </form>
            </div>
        
        
        </>
    )
}

export default FormContact;