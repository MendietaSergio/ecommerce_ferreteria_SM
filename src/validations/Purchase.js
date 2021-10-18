const validationPurchase = {
    name: {
        required:{
            value: true,
            message: "El campo es requerido."
        },
        minLength:{
            value:4,
            message: "El nombre debe tener al menos 4 carácteres."
        },
        maxLength:{
            value: 30,
            message: "El nombre debe tener como máximo 30 carácteres."
        },
    },
    phone: {
        required:{
            value: true,
            message: "El campo es requerido."
        },
        minLength: {
            value: 10,
            message:"El mínimo es de 10 digitos."
        },
        maxLength: {
            value: 12,
            message: "El máximo es de 12 digitos."
        }
    },
    email: {
        required: "El mail es requerido.",
        pattern: {
            value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            message:"El mail debe ser válido."
        },
    },
    email2:{
        required: "El mail es requerido.",
        pattern: {
            value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            message:"El mail debe ser válido."
        },
    }
}

export default validationPurchase;