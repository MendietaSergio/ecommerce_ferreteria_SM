import React, {useEffect,useState} from "react";
import { getFetchUno } from "../../Util/getMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//tengo que pasar un producto



const ItemDetailContainer = ( ) =>{

    const {idproducts} = useParams();
    const [product, setProduct] = useState({})
    useEffect(() =>{
        getFetchUno
        .then(res => setProduct(res))
        .catch(error=>console.log(error))
    },[])
    console.log(idproducts);
    return (
        <>
        <h2 className="text-center m-5">ItemDetailContainer</h2>
        <ItemDetail product={product}/>
        </>
    )

}

export default ItemDetailContainer;