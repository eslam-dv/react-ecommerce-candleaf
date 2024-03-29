import { useState } from "react";
import { Product } from "../../components/Product/Product";
import { CircleCheckIcon } from "../../components/icons";
import products from "../../db/products";
// import reviews from "../../db/reviews.json";
import "./Home.css";
// import pfp from "../../assets/pfp.png";
import mockups from "../../assets/mockups.png";
import { Carousel } from "./Carousel/Carousel";

export const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [seeMore, setSeeMore] = useState(false);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <>
      {/* Hero Section */}
      <section className="Hero-section">
        <article className="container">
          <p>☘️</p>
          <h1 className="poppins md">The nature candle</h1>
          <p className="poppins">
            All handmade with natural soy wax, Candleaf is a companion
            <br /> for all your pleasure moments
          </p>
          <button className="btn roboto">Dicover our collection</button>
        </article>
      </section>
      {/* Hero Section */}

      {/* Product Sectoin */}
      <section className="section container product-section">
        <h1 className="section-title">Products</h1>
        <p className="section-text">
          Order it for you or for your beloved ones
        </p>
        <div className="products-contianer">
          {width < 540 && seeMore
            ? products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : width < 540
            ? products
                .slice(0, 4)
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </div>
        <button className="btn" onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? "Hide" : "See More"}
        </button>
      </section>
      {/* Product Sectoin */}

      {/* Benefits Section */}
      <section className="Benefits-section">
        <div className="section container">
          <h1 className="section-title">
            Clean and <br /> fragrant soy wax
          </h1>
          <p className="section-text primary">
            Made for your home and for your wellness
          </p>
          <div className="Benefits-body">
            <div>
              <ul className="roboto">
                <li>
                  <div>
                    <CircleCheckIcon />
                    <p>
                      <b>Eco-sustainable: </b>
                      All recyclable materials, 0% CO2 emissoins
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <CircleCheckIcon />
                    <p>
                      <span>Hyphoallergenic: </span>
                      100% natural, human friendly ingredients
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <CircleCheckIcon />
                    <p>
                      <span>Handmade: </span>
                      All candles are craftly made with love.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <CircleCheckIcon />
                    <p>
                      <span>Long burning: </span>
                      No more waste. created to last long.
                    </p>
                  </div>
                </li>
              </ul>
              <button className="btn">Learn more</button>
            </div>
            <div className="Benefits-mockup">
              <img src={mockups} alt="candles" />
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h1 className="section-title">Testimonials</h1>
          <p className="section-text">Some quotes from our happy customers</p>
          <Carousel />
        </div>
      </section>
      {/* Testimonials Section */}

      {/* Popular Sectoin */}
      <section className="section container">
        <h1 className="section-title">Popular</h1>
        <p className="section-text">
          Our top selling product that you may like
        </p>
        <div className="products-contianer">
          {products.slice(0, 4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      {/* Popular Sectoin */}
    </>
  );
};
