import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import "./styles.css";
import { Container, Cart } from './styles';

import logo from '../../assets/images/Logo.png';

import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/home">
        <div className='logo_nome'>
          <img src={logo} alt="Logo" width="120px" height="120px" />
          <p className='nome'>Arte da Leitura</p>
        </div>
      </Link>
      <nav>
        <Link to="pedidos">
          <button className="pedidos">Pedidos</button>
        </Link>
        <Cart to="/cart">
          <div>
            <strong>Carrinho</strong>
            <span data-testid="cart-size">
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </nav>
    </Container>
  );
};

export default Header;
