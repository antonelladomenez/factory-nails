import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <h2>Nuestros Servicios</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Manicura</Card.Title>
              <Card.Text>Servicios de manicura de alta calidad.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Pedicura</Card.Title>
              <Card.Text>Tratamientos relajantes de pedicura.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Arte en Uñas</Card.Title>
              <Card.Text>Diseños creativos y personalizados en uñas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
