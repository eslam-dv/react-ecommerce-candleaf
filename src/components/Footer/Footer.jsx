import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-line"></div>
        <div className="footer">
          <div className="footer-left">
            <div>
              <img
                src="/src/assets/logo-footer.png"
                alt="candleaf white logo"
              />
            </div>
            <p>Your natural candle made for your home and your wellness.</p>
          </div>
          <div className="footer-right">
            <ul>
              <li>Discovery</li>
              <li>
                <Link to="#">New season</Link>
              </li>
              <li>
                <Link to="#">Most searched</Link>
              </li>
              <li>
                <Link to="#">Most selled</Link>
              </li>
            </ul>
            <ul>
              <li>About</li>
              <li>
                <Link to="#">Help</Link>
              </li>
              <li>
                <Link to="#">Shipping</Link>
              </li>
              <li>
                <Link to="#">Affiliate</Link>
              </li>
            </ul>
            <ul>
              <li>Info</li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">Privacy Policies</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
