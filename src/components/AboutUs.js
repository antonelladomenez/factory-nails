import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import "../styles/aboutMe.css"; // Asegúrate de tener los estilos necesarios
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";
import photo5 from "../images/photo5.png";
import photo6 from "../images/photo6.png";
import photo7 from "../images/photo7.png";
import photo8 from "../images/photo8.png";
import photo9 from "../images/photo9.png";
import photo10 from "../images/photo10.png";
import photoPerfil from "../images/Milena Domenez.jpg";

const AboutMe = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container className="about-me-section">
      <Row className="align-items-center">
        <Col md={6} className={`text-section ${titleInView ? 'slide-in-left' : ''}`} ref={titleRef}>
          <h2>Un poco sobre mí</h2>
          <p>
            Hola! Mi nombre es Milena Domenez, tengo 31 años y comencé este
            hermoso camino hace 3 años. Desde entonces fui capacitándome cada
            día para ser la profesional que soy hoy, dedicándome el 100% a mi
            trabajo, perfeccionándome siempre y adaptándome a las últimas
            tendencias para brindarles el mejor servicio posible. Hoy Factory
            sigue creciendo, gracias a mis clientas, las que siempre me eligen y
            las que recién comienzan a acompañarme. Y si aún no nos conocemos,
            no tengas dudas en contactarte conmigo, será un placer conocerte.
            Gracias!
          </p>
          <p>
            <strong>Milena Domenez.</strong>
          </p>
        </Col>
        <Col md={6} className="image-section">
          <img
            src={photoPerfil}
            alt="Milena Domenez"
            className="profile-image"
          />
        </Col>
      </Row>
      <Row>
        <Col className={`gallery-section my-5 ${galleryInView ? 'slide-in-up' : ''}`} ref={galleryRef}>
          <h2 className="mb-5">Mis trabajos</h2>
          <div className="image-gallery">
            <img src={photo1} alt="Galería 1" className="gallery-image" />
            <img src={photo2} alt="Galería 2" className="gallery-image" />
            <img src={photo3} alt="Galería 3" className="gallery-image" />
            <img src={photo4} alt="Galería 4" className="gallery-image" />
            <img src={photo5} alt="Galería 5" className="gallery-image" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={`gallery-section ${galleryInView ? 'slide-in-up' : ''}`}>
          <div className="image-gallery">
            <img src={photo6} alt="Galería 6" className="gallery-image" />
            <img src={photo7} alt="Galería 7" className="gallery-image" />
            <img src={photo8} alt="Galería 8" className="gallery-image" />
            <img src={photo9} alt="Galería 9" className="gallery-image" />
            <img src={photo10} alt="Galería 10" className="gallery-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
