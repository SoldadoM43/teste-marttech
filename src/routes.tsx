import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Login from './pages/Login';
import Home from './pages/Home';
import Pedidos from './pages/Pedidos';
import Cadastro from './pages/Cadastro';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/Pedidos" exact component={Pedidos} />
      <Route path="/cadastro" exact component={Cadastro} />

    </Switch>
  );
};

export default Routes;
