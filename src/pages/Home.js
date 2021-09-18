import React from "react";
import ItemListContainer from '../components/Container/ItemListContainer';
import imgPort from "../images/portada.png"

const Home = () =>{
    return (
        <>
        <div className="mt-3 mb-3 " >
          <img src={imgPort} title="Portada" width="100%"/>
        </div>
          <ItemListContainer mensaje={"Productos"} />
        </>
    )

}

export default Home;