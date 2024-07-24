import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const whatsappNumber = "+5493624204967"; // Reemplaza con el número de WhatsApp correcto

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={2} className="footer-section text-left">
            <ul className="footer-menu">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <HashLink to="/#servicios">Servicios</HashLink>
              </li>
              <li>
                <a href="/sobre-mi">Sobre mi</a>
              </li>
              <li>
                <HashLink to="/#contacto">Contacto</HashLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="footer-logo text-center">
            <h2>FACTORY</h2>
            <h3>NAILS STUDIO</h3>
          </Col>
          <Col xs={12} md={2} className="footer-contact text-right">
            <p>Hablemos acá:</p>
            <p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <i className="fab fa-whatsapp"></i> +54 9 362 420-4967
              </a>
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/factorynails.rcia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr
          style={{
            marginBottom: "0px",
          }}
        />
        <Row className="justify-content-center">
          <Col xs={12} className="text-center  my-1">
            <p
              style={{
                marginBottom: "0px",
                fontSize: "12px",
                marginTop: "10PX",
              }}
            >
              &copy; {new Date().getFullYear()} Factory Nails. Todos los
              derechos reservados. | Diseñado y desarrollado por{" "}
              <a
                href="https://www.fancyitsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color:"white"}}
              >
                Fancy IT Solutions
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
