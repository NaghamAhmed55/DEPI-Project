import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>🌸 Perfume Shop</h5>
            <p>
              Your destination for luxury fragrances from around the world.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-decoration-none text-light"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-decoration-none text-light">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-light">
                  About Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>📧 info@perfumeshop.com</li>
              <li>📞 +1 234 567 8900</li>
              <li>📍 123 Fragrance Avenue, NY</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Perfume Shop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
