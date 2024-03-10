import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import products from "../../db/products";
import "./ProductPage.css";
import { CartIcon } from "../../components/icons";

export const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <main className="container" id="product-container">
      <div className="product-main">
        <div className="product-img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h2 className="poppins">{product.title} Candleaf</h2>
          <div className="product-options">
            <div className="product-price">
              <p className="poppins">${product.price}</p>
              <div className="quantity">
                <label htmlFor="qty" className="roboto">
                  Quantity
                </label>
                <div className="quantity-handler">
                  <button
                    className="roboto"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="one-time-code"
                    className="roboto"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="roboto"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            <div className="product-subscribe">
              <div className="input-group">
                <label htmlFor="one-time" className="roboto">
                  <input
                    type="radio"
                    name="purchase"
                    id="one-time"
                    value="one-time-purchase"
                  />
                  One time purchase
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="input-group" id="subscribe-field">
                <label htmlFor="subscribe" className="roboto">
                  <input
                    type="radio"
                    name="purchase"
                    id="subscribe"
                    value="subscribe"
                    defaultChecked
                  />
                  Subscribe for delivery every{" "}
                  <select name="" id="" defaultValue="4-weeks">
                    <option value="1-week">1 week</option>
                    <option value="2-weeks">2 weeks</option>
                    <option value="3-weeks">3 weeks</option>
                    <option value="4-weeks">4 weeks</option>
                  </select>
                  <span className="checkmark" id="sub-checkmark"></span>
                  <p>
                    Subscribe now and get the 10% off discount on every
                    recurring order. The discount will be applied at checkout.{" "}
                    <Link to="#" className="primary">
                      See details
                    </Link>
                  </p>
                </label>
              </div>
              <button
                className="btn roboto add-to-cart"
                onClick={() => addToCart(product.id, quantity)}
              >
                <CartIcon /> + Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="candle-disc">
        <div className="first-disc">
          <p className="poppins">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
            <br />
            <span className="primary">🚚 FREE SHIPPING</span>
          </p>
        </div>
        <div className="sec-disc roboto">
          <p>
            <span>Wax: </span>Top grade Soy wax that delivers a smoke less,
            consistent burn
          </p>
          <p>
            <span>Fragrance: </span>Premium quality ingredients with natural
            essential oils
          </p>
          <p>
            <span>Burning Time: </span>70-75 hours
          </p>
          <p>
            <span>Dimension: </span>10cm x 5cm
          </p>
          <p>
            <span>Weight: </span>400g
          </p>
        </div>
      </div>
    </main>
  );
};
