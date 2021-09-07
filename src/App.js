
import { BrowserRouter, route, Switch } from 'react-router-dom';
import ItemListContainer from './components/Container/ItemListContainer';

import  Header  from './components/Header/Header';

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <ItemListContainer mensaje={"Productos"}/>
    </BrowserRouter>
  );
}

export default App;
