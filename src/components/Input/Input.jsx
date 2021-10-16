import React from "react";
import "./Input.css"

const Input =({
    type,
    id,
    name,
    placeholder,
    label,
    defaultValue,
    disabled,
    register,
    validation,
    error
}) =>{
    return(
        <>
            <label className ="form-label">
                {label && label} {/* condicionales */}
                <input type={type}
                name={name}
                id={id}
                disabled={disabled}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={`form-control ${error ? 'input-error' : ''}`}
                {...register(name,validation)}
                autoComplete="off"
                autoCorrect="off"
                />            
            </label>
            {error ? <p className="text-danger">{error.message}</p> : null}
        </>
    )
}

export default Input;