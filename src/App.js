import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Products from "./pages/Products";

import Header from "./components/Header/Header";
import ContainerCart from "./components/ContainerCart/ContainerCart";
import Detail from "./pages/Detail";
import { CartContextProvider } from "./Context/CartContext";
import Footer from "./components/Footer/Footer";
import AdminAddProduct from "./pages/AdminAddProduct";

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Header activeBtnCart={true}/>
        <Switch>
          <> 
            <div className="container container-body">
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/productos" exact>
                <Products />
              </Route>
              <Route path="/productos/:idCategory" exact>
                <Products />
              </Route>
              <Route path="/productos/:idCategory/:idSubCategory" exact>
                <Products />
              </Route>
              <Route path="/search" exact>
                <Products />
              </Route>
              <Route path="/detalle/:idProduct" exact>
                <Detail />
              </Route>
              <Route path="/contacto" exact>
                <Contact />
              </Route>
              <Route path="/ingresar" exact>
                <Signin />
              </Route>
              <Route path="/carrito" exact>
                <ContainerCart activeBtnCart={false}/>
              </Route>
              <Route path="/agregar-productos" exact>
                <AdminAddProduct />
              </Route>
            </div>
          </>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
