import React from "react";
import { Navbar, Container, Card, Row, Col } from "react-bootstrap";
import products from "./project";

function App() {
  return (
    <>
      <div className="App">

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>My Store</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">Products</h1>

          <Row>
            {products.map((product, index) => (
              <Col md={4} key={index}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                      <strong>{product.price}</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>

      </div>
    </>
  );
}

export default App;


