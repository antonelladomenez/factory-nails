import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import '../styles/contact.css';

const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b65pwtz', 'template_v2p8pkp', form.current, 'RjWTLfUV806Nz752C')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      }, (error) => {
        console.log(error.text);
        alert('Hubo un error al enviar el mensaje');
      });
  };

  return (
    <Container className='my-5'>
      {messageSent ? (
        <Row className="text-center my-5 textoMensaje">
          <Col>
            <h2>Su mensaje ha sido enviado</h2>
            <p>Gracias por comunicarte, te responderé lo antes posible. Milena</p>
          </Col>
        </Row>
      ) : (
        <>
          <Row className="text-center my-5">
            <Col>
              <h2 ref={titleRef} className={`formTittle my-5 ${titleInView ? 'slide-up' : ''}`}>
                RESERVA TU TURNO AHORA
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Form ref={form} onSubmit={sendEmail} className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Nombre</Form.Label>
                      <div className="input-container">
                        <Form.Control type="text" name="name" className="form-input" required />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formSurname">
                      <Form.Label>Apellido</Form.Label>
                      <div className="input-container">
                        <Form.Control type="text" name="surname" className="form-input" required />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Telefono</Form.Label>
                      <div className="input-container">
                        <Form.Control type="tel" name="phone" className="form-input" required />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <div className="input-container">
                        <Form.Control type="email" name="email" className="form-input" required />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formMessage">
                  <Form.Label>Escribe un mensaje</Form.Label>
                  <div className="input-container">
                    <Form.Control as="textarea" rows={3} name="message" className="form-input" required />
                  </div>
                </Form.Group>
                <Button variant="outline-success" type="submit">Enviar</Button>
              </Form>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ContactForm;
