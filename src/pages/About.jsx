import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h1>About Us</h1>
          <p className="lead">
            Welcome to Perfume Shop, your premier destination for luxury
            fragrances.
          </p>
          <p>
            We are passionate about helping you discover the perfect scent that
            reflects your personality and style. Our carefully curated
            collection features perfumes from renowned brands and emerging
            artisans from around the world.
          </p>
          <p>
            With years of experience in the fragrance industry, we are committed
            to providing you with an exceptional shopping experience and expert
            guidance in finding your signature scent.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
