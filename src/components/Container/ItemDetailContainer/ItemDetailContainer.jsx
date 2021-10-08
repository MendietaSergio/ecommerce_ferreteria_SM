import React, {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../../services/getFirebase";



const ItemDetailContainer = ( ) =>{
    const {idProduct} = useParams();
    const [loading, setLoading] = useState(true)
    const [detailProduct, setDetailProduct] = useState({})
    useEffect(() =>{
        const dbQuery = getFirestore()
        const filterProduct = () =>{
            if(idProduct){
                dbQuery.collection('items').doc(idProduct).get()//Traigo el producto desde el id.
                .then(resp =>{
                    setDetailProduct({id: resp.id, ...resp.data()})//Seteo el nuevo array.
                })
                .catch(err => console.log("ERROR => ", err))
                .finally(()=> setLoading(false))
            }
        }
        filterProduct()
    },[idProduct])

    return (
        <>
        {loading ?
        (<>
            <h2 className="text-center my-4">Cargando <i className="fas fa-spinner fa-pulse" /></h2>
        </>):(
            <ItemDetail detail={detailProduct}/>
        )}
        </>
    )
}

export default ItemDetailContainer;