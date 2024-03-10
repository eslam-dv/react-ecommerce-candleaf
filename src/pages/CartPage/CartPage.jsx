import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import products from "../../db/products.json";
import { CartItem } from "./CartItem";
import "./Cart.css";

const CartPage = () => {
  const { cartItems, getSubtotal } = useContext(CartContext);
  const subtotal = getSubtotal();
  return (
    <main className="container">
      <section className="cart-container">
        <div className="cart-title">
          <h1 className="poppins md">Your cart items</h1>
          <Link className="roboto" to="/">
            Back to shopping
          </Link>
        </div>
        {subtotal > 0 ? (
          <>
            <table className="roboto cart">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />;
                  }
                })}
              </tbody>
            </table>
            <div className="checkout">
              <div>
                <div className="roboto md subtotal">
                  <p>Sub-total</p>
                  <p>$ {subtotal.toFixed(2)}</p>
                </div>
                <span className="roboto">
                  Tax and shipping cost will be calculated later
                </span>
              </div>
              <button className="btn roboto">Check-out</button>
            </div>
          </>
        ) : (
          <h1 className="empty-msg poppins md"> Your Shopping Cart is Empty</h1>
        )}
      </section>
    </main>
  );
};

export default CartPage;
