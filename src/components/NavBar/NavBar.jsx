import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Nav.css";
import { useState } from "react";
import {
  CartIcon,
  UserIcon,
  BurgerMenuIcon,
  CloseIcon,
  AngleUpIcon,
  AngleDownIcon,
} from "../icons";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropown] = useState(false);
  const { getCartItemCount } = useContext(CartContext);
  let cartItemCount = getCartItemCount();

  return (
    <header className="roboto">
      <nav className="nav-container container">
        <div className="menu" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <BurgerMenuIcon />}
        </div>
        <Link to="/" className="nav-logo">
          <img src="/src/assets/logo.png" alt="logo" />
        </Link>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <button className="roboto" onClick={() => setDropown(!dropdown)}>
              Discovery {dropdown ? <AngleUpIcon /> : <AngleDownIcon />}
            </button>
            <ul className={`dropdown ${dropdown ? "active" : ""}`}>
              <li>
                <Link>link 1</Link>
              </li>
              <li>
                <Link>link 2</Link>
              </li>
              <li>
                <Link>link 3</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
        </ul>
        <div className="nav-user">
          <Link to="#">
            <UserIcon />
          </Link>
          <Link className="cart-icon" to="/cart">
            <CartIcon />
            <div className={`${cartItemCount > 0 ? "active" : ""}`}>
              {cartItemCount}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
