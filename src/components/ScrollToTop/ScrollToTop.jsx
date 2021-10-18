import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop =() =>{
    const location = useLocation();
    
    useEffect(() =>{
        window.scroll(0,0);//scrolleo hacía arriba
    }, [location.pathname])//Lo ejecuto siempre que se cambie la ruta
    return null;
}

export default ScrollToTop;