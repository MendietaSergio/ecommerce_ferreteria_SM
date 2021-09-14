
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Products from './pages/Products';

import Header from './components/Header/Header';
import ContainerCart from './components/ContainerCart/ContainerCart';
import Detail from './pages/Detail';

function App() {
//route me permite asociar una ruta con un componente.
//averiguar como pasar el id del producto seleccionado
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <div className="container">
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/productos" exact>
          <Products/>
        </Route>
        <Route path="/detalle/:idproducts" exact>
          <Detail/>
        </Route>
        <Route path="/contacto" exact>
          <Contact/>
        </Route>
        <Route path="/login" exact>
          <Signin/>
        </Route>
        <Route path="/carrito" exact>
          <ContainerCart/>
        </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
