import React from "react";
import ItemListContainer from '../components/Container/ItemListContainer';
import imgPort from "../images/portada.png"
import Slider from "../components/Slider/Slider"

const Home = () =>{
    return (
        <>
        <div className="mt-3 mb-3 " >
          <img src={imgPort} title="Portada" alt="Portada" width="100%"/>
        </div>
          <Slider title="Productos"/>
        </>
    )

}

export default Home;