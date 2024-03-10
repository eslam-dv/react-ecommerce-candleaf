import { Product } from "../../components/Product/Product";
import { CircleCheckIcon } from "../../components/icons";
import products from "../../db/products";
import reviews from "../../db/reviews.json";
import "./Home.css";

export const HomePage = () => {
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
      <section className="section container">
        <h1 className="section-title">Products</h1>
        <p className="section-text">
          Order it for you or for your beloved ones
        </p>
        <div className="products-contianer">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
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
              <img src="/src/assets/mockups.png" alt="" />
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
          <div className="testimonials-container">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="pfp">
                  <img src={review.picture} alt={review.name} />
                </div>
                <div>{review.stars}</div>
                <p className="poppins md">&ldquo;{review.quote}&rdquo;</p>
                <span className="roboto">{review.name}</span>
              </div>
            ))}
          </div>
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
