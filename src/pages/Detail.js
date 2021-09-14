import React, { useState, useEffect } from "react";
import ItemDetailContainer from "../components/Container/ItemDetailContainer";
import { useParams } from "react-router-dom";
import getFetch from "../mocks/products";
import ItemDetail from "../components/Container/ItemDetail";


const Detail =( )=>{
    // const {id} = useParams();
    // console.log(id);
    // const [detail, setDetail] = useState(null);

    // useEffect(() =>{
    //     const fetDetail = async () =>{
    //         await getFetch
    //         .then( res=>{
    //             setDetail(res.filter(productDetail=> productDetail.id === id))
    //         })
    //         .catch(error=>{
    //             console.log(error);
    //         })
    //     }
    //     fetDetail()
    // },[])
        return(
            <>
                <ItemDetailContainer/>
            </>
        )
} 
export default Detail;