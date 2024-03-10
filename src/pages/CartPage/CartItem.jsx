import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

export const CartItem = ({ data }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <tr className="cart-item">
      <td>
        <Link to={`/product/${data.id}`} className="item-img">
          <img src={data.image} alt="" />
        </Link>
        <div className="item-text">
          <h2 className="poppins md">{data.title} Candleaf</h2>
          <button className="roboto" onClick={() => removeFromCart(data.id)}>
            Remove
          </button>
        </div>
      </td>
      <td className="price-col">
        <p>${data.price}</p>
        <div className="price-col-qty">
          <p className="roboto">Quantity</p>
          <QuantityBox data={data} cartItems={cartItems} />
        </div>
      </td>
      <td>
        <QuantityBox data={data} cartItems={cartItems} />
      </td>
      <td>${(data.price * cartItems[data.id]).toFixed(2)}</td>
    </tr>
  );
};

const QuantityBox = ({ data, cartItems }) => {
  const { changeQuantity, addOne, removeOne } = useContext(CartContext);
  return (
    <div className="quantity-handler">
      <button className="roboto" onClick={() => addOne(data.id)}>
        +
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="one-time-code"
        className="roboto"
        value={cartItems[data.id]}
        onChange={(e) => {
          changeQuantity(data.id, Number(e.target.value));
        }}
      />
      <button
        className="roboto"
        onClick={() => cartItems[data.id] > 1 && removeOne(data.id)}
      >
        -
      </button>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.object,
  quantity: PropTypes.number,
};

QuantityBox.propTypes = {
  data: PropTypes.object,
  cartItems: PropTypes.object,
};
