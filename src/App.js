
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Products from './pages/Products';

import Header from './components/Header/Header';

function App() {

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
        <Route path="/contacto" exact>
          <Contact/>
        </Route>
        <Route path="/login" exact>
          <Signin/>
        </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
