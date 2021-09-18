import React from "react";
import Button from "../Button/Button"
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({product}) =>{
   
    return(
        <>
            <div key={product.id} className="card mt-2" >
                <Link className="card-footer-detail" to={`/detalle/${product.title}`}>
                    <img className="card-img-top" src={`/assets/img/Productos/${product.pictureUrl}`} alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                    </div>        
                </Link>
                <div className="card-footer ">
                    <div className="row">
                    <span className="price text-center">Precio ${product.price},00</span>
                    <Button className="d-block btn btn-primary" text="Agregar al carrito"></Button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Item;