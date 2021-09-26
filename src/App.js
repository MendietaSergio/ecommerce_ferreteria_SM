import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/signin";
import Products from "./pages/Products";

import Header from "./components/Header/Header";
import ContainerCart from "./components/ContainerCart/ContainerCart";
import Detail from "./pages/Detail";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <div className="container">
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
            <Route path="/detalle/:idProducts" exact>
              <Detail />
            </Route>
            <Route path="/contacto" exact>
              <Contact />
            </Route>
            <Route path="/ingresar" exact>
              <Signin />
            </Route>
            <Route path="/carrito" exact>
              <ContainerCart />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
