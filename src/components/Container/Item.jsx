import React from "react";
import Button from "../Button/Button"
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({product}) =>{
   
    return(
        <>
            <div key={product.id} className="card mt-2" >
            <img className="card-img-top" src={`/assets/img/Productos/${product.pictureUrl}`} alt={product.title}/>
                <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                </div>
                <div className="card-footer ">
                <p className="price">Precio ${product.price},00</p>
                <Button text="Agregar al carrito"></Button>
                <Link to={`/detalle/${product.id}`}>
                <Button text="Detalle"  className="btn btn-dark" />
                </Link>
                </div>
           </div>
        </>
    )
}

export default Item;