import React, { useState} from "react";
import Button from "../../Button/Button"
import { Link } from "react-router-dom";
import "./Item.css"
import { CartContextUse } from "../../../Context/CartContext";


const Item = ({
    product,
    }) =>{
    const [ cambiarBtn, setCambiarBtn ] = useState (true)
    const {addItem} = CartContextUse();

    const onAdd = () => {
        addItem(product, 1)
        setCambiarBtn(false);
    };
    return(
        <>
            <div key={product.id} className="card mt-2" >
                <Link className="card-link-detail" to={`/detalle/${product.id}`}>
                    <img className="card-img-top" src={`/assets/img/Productos/${product.pictureUrl}`} alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                    </div>        
                </Link>
                <div className="card-footer ">
                    <div className="row">
                    <span className="price text-center">Precio ${product.price},00</span>
                    {cambiarBtn ? (
                        <Button className="d-block btn btn-primary" text="Agregar al carrito" onClick={()=>onAdd()} />
                    ) : (
                        <Button to="/carrito" text="Terminar compra" />
                    )}
                    </div>
                </div>
           </div>
        </>
    )
}

export default Item;