import React from "react";
import Button from "../Button/Button"
const ItemDetail =({product}) =>{
    return(
        <>
            <h1>ItemDetail</h1>
            <div key={product.id} className="card mt-2" >
            <img className="card-img-top" src={`/assets/img/productDetailos/${product.pictureUrl}`} alt={product.title}/>
            {console.log(product.pictureUrl)}
                <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                </div>
                <div className="card-footer ">
                <p className="price">Precio ${product.price},00</p>
                <Button text="Agregar al carrito"></Button>
                </div>
           </div>
        </>
    )
} 
export default ItemDetail;