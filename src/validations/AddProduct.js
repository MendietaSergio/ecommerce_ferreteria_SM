const validationAddProduct = {
    nameProduct:{
      required :{
        value: true,
        message: "El campo es requerido."
      },
      minLength:{
        value: 4,
        message:"El nombre debe tener al menos 4 carácteres."
      },
      maxLength:{
        value: 40,
        message:"El nombre debe tener al máximo 40 carácteres."
      }
    },
    category:{
      required: {
        value: true,
        message: "El campo es requerido."
      }
    },
    subCategory: {
      required: {
        value: true,
        message: "El campo es requerido."
      }
    },
    price:{
      required:{
        value:true,
        message: "El campo es requerido."
      },
      min:{
        value: 50,
        message: "El valor mínimo es de $50"
      }
    },
    offer:{
      required:{
        value:true,
        message: "El campo es requerido."
      }
    },
    discount:{
      required:{
        value:true,
        message: "El campo es requerido."
      },
      min:{
        value: 0,
        message: "El descuento no puede ser un número negativo."
      },
      max: {
        value: 40,
        message:"El descuento máximo es de 40%"
      }
    },
    stock:{
      required:{
        value:true,
        message: "El campo es requerido."
      },
      min:{
        value: 10,
        message: "El stock minimo es de 10"
      }
    },
    picture: {
      required:{
        value: true,
        message:"El archivo es requerido."
      },
    },
    description:{
      required: {
        value: true,
        message: "El campo es requerido."
      },
      minLength:{
        value:8,
        message:"Los carácteres mínimos son 8"
      },
      maxLength:{
        value:100,
        message:"Los carácteres mínimos son 100"
      }
    }
  }
export default validationAddProduct;