import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-4">Discover Your Perfect Scent</h1>
          <p className="lead">
            Explore our curated collection of premium perfumes from around the
            world. Find the fragrance that defines you.
          </p>
          <Button as={Link} to="/products" variant="primary" size="lg">
            Shop Now
          </Button>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <h2>Welcome to Perfume Shop</h2>
            <p>Your destination for luxury fragrances</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
