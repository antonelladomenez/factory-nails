import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import service1 from "../images/service.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service1.png";
// import ContactForm from "./ContactForm";
import "../styles/home.css";

const Home = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const whatsappNumber = "+5493624204967";

  const imagesColumn1 = [img1, img2, img3];
  const imagesColumn2 = [img4, img5, img6];
  const imagesColumn3 = [img7, img8, img9];

  const renderCarousel = (images, interval) => (
    <Carousel
      controls={false}
      indicators={false}
      interval={interval}
      pause={false}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block carousel-image"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
  const { ref: refText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Container fluid className="gallery-container p-0">
        <Row className="gx-0">
          <Col md={4} className="carousel-column d-none d-md-block p-0">
            {renderCarousel(imagesColumn1, 3000)}
          </Col>
          <Col md={4} className="carousel-column p-0">
            {renderCarousel(imagesColumn2, 4000)}
          </Col>
          <Col md={4} className="carousel-column d-none d-md-block p-0">
            {renderCarousel(imagesColumn3, 5000)}
          </Col>
        </Row>
      </Container>

      <Container fluid className="my-5">
        <Row className="d-flex justify-content-center align-items-center title-factory">
          <Col
            xs={12}
            md={8}
            className={`text-center my-4 ${inViewText ? "slide-up" : ""}`}
            ref={refText}
          >
            <h2>FACTORY</h2>
            <h1>NAILS STUDIO</h1>
            <p>
              En Factory Nails encontrarás profesionalismo y experiencia, años
              de práctica garantizan resultados de alta calidad. Higiene,
              diseños personalizados y adaptados a tus gustos y necesidades.
              Durabilidad, técnicas que aseguran uñas perfectas y resistentes
              por más tiempo.
            </p>
          </Col>
        </Row>
      </Container>

      <div id="servicios">
        <Container className="services">
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={8} className="my-4">
              <Card className="border-0">
                <Row className="no-gutters">
                  <Col md={4}>
                    <img
                      className={`card-img align-self-end ${
                        inView1 ? "slide-left" : ""
                      }`}
                      src={service1}
                      alt="Kapping Gel"
                      ref={ref1}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>ESMALTADO SEMIPERMANENTE</Card.Title>
                      <Card.Text
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Perfección duradera con servicio de esmaltado
                        permanente. Productos de alta calidad y técnicas
                        avanzadas para garantizar un acabado impecable y
                        resistente. Disfruta de uñas siempre perfectas, sin
                        descascarados ni pérdida de brillo, por semanas.
                      </Card.Text>
                      <Button
                        as={HashLink}
                        smooth
                        to="/#contacto"
                        variant="outline-success"
                        className="button-info"
                      >
                        INFORMACIÓN
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <div className="horizontal-line my-4 mx-auto"></div>

            <Col xs={12} md={8} className="my-4">
              <Card className="border-0">
                <Row className="no-gutters">
                  <Col md={4} className="order-md-2">
                    <img
                      className={`card-img align-self-end ${
                        inView2 ? "slide-right" : ""
                      }`}
                      src={service2}
                      alt="Kapping Gel"
                      ref={ref2}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body className="order-md-1">
                      <Card.Title>KAPPING GEL</Card.Title>
                      <Card.Text
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Dale a tus uñas la fortaleza y el brillo que merecen con
                        el servicio de Kapping Gel! Este tratamiento avanzado
                        protege y embellece tus uñas naturales, garantizando un
                        acabado perfecto y duradero. Ideal para quienes buscan
                        un look elegante y resistente.
                      </Card.Text>
                      <Button
                        as={HashLink}
                        smooth
                        to="/#contacto"
                        variant="outline-success"
                        className="button-info"
                      >
                        INFORMACIÓN
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <div className="horizontal-line my-4 mx-auto"></div>

            <Col xs={12} md={8} className="my-4">
              <Card className="border-0">
                <Row className="no-gutters">
                  <Col md={4}>
                    <img
                      className={`card-img align-self-end ${
                        inView3 ? "slide-left" : ""
                      }`}
                      src={service3}
                      alt="Kapping Gel"
                      ref={ref3}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>SOFT GEL</Card.Title>
                      <Card.Text
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Las uñas Soft Gel son una técnica de manicura que
                        utiliza un tipo específico de gel más suave y flexible
                        que el gel tradicional. Este gel está diseñado para
                        proporcionar una durabilidad considerable y una
                        apariencia más natural.
                      </Card.Text>
                      <Button
                        as={HashLink}
                        smooth
                        to="/#contacto"
                        variant="outline-success"
                        className="button-info"
                      >
                        INFORMACIÓN
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <div className="horizontal-line my-4 mx-auto"></div>

            <Col xs={12} md={8} className="my-4">
              <Card className="border-0">
                <Row className="no-gutters">
                  <Col md={4} className="order-md-2">
                    <img
                      className={`card-img align-self-end ${
                        inView4 ? "slide-right" : ""
                      }`}
                      src={service4}
                      alt="Kapping Gel"
                      ref={ref4}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body className="order-md-1">
                      <Card.Title>ESCULPIDAS</Card.Title>
                      <Card.Text
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Descubre la elegancia y resistencia de las uñas
                        esculpidas. Con técnica avanzada de acrílico, moldeamos
                        y fortalecemos tus uñas naturales para ofrecerte una
                        apariencia impecable y duradera.
                      </Card.Text>
                      <Button
                        as={HashLink}
                        smooth
                        to="/#contacto"
                        variant="outline-success"
                        className="button-info"
                      >
                        INFORMACIÓN
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <div className="horizontal-line my-4 mx-auto"></div>

            <Col xs={12} md={8} className="mt-4 mb-5">
              <Card className="border-0">
                <Row className="no-gutters">
                  <Col md={4}>
                    <img
                      className={`card-img align-self-end ${
                        inView5 ? "slide-left" : ""
                      }`}
                      src={service5}
                      alt="Kapping Gel"
                      ref={ref5}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>NAILS ART</Card.Title>
                      <Card.Text
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Desde estilos clásicos hasta las últimas tendencias,
                        cada diseño es una expresión única de tu personalidad.
                        Técnicas avanzadas y productos de calidad para
                        garantizar resultados espectaculares.
                      </Card.Text>
                      <Button
                        as={HashLink}
                        smooth
                        to="/#contacto"
                        variant="outline-success"
                        className="button-info"
                      >
                        INFORMACIÓN
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="text-center my-5">
        <Col className="section-calidad">
          <h2 className="calidadencadadetalle my-5">CALIDAD EN CADA DETALLE</h2>
        </Col>
      </Row>
      <div id="contacto">
        {/* <ContactForm /> */}
        <Row className="text-center my-5">
          <Col>
            <h2
              ref={titleRef}
              className={`formTittle my-5 ${titleInView ? "slide-up" : ""}`}
            >
              RESERVA TU TURNO AHORA
            </h2>
            <h2
              ref={titleRef}
              className={`formTittle my-5 ${titleInView ? "slide-up" : ""}`}
            >
              Comunicate directamente a mi WhatsApp:
            </h2>
            <p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link-home"
              >
                <i className="fab fa-whatsapp"></i> +54 9 362 420-4967
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
