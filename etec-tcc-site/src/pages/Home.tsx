import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button, Navbar, Container, Col, Row, Nav, Media } from 'react-bootstrap';

import '../styles/pages/home.css';
import imgHeader from '../images/image-header.png';
import imgPlayStore from '../images/play-store.png';
import imgCol1 from '../images/image-col-1.png';
import imgCol2 from '../images/image-col-2.png';
import logo from '../images/logo.png';


function Home() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img alt="" src={logo} className="d-inline-block align-top img-menu" />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Ínicio</Nav.Link>
            <Nav.Link eventKey={2}>
            <Link className="botao-buscar-imoveis" to="/map">
              Buscar imóveis
              </Link>
            </Nav.Link>
            <Nav.Link href="#deets">Cadastrar imóvel</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="container">
        <Row>
          <Col sm={5}>
            <img src={imgHeader} className="img-header" />
          </Col>
          <Col sm={7}>
            <h1>Iluguel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae illo aliquid iure delectus sint non reprehenderit molestias optio porro fuga harum ab, mollitia at saepe fugiat repellendus nulla? Libero?
          </p>
            <p>
              <Button className="btn-header">Learn more</Button>
            </p>
          </Col>
        </Row>
      </Container>

      <div className="container-cta1">
        <h1 className="cta1-title">Baixe agora mesmo!</h1>
        <p className="cta1-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore assumenda qui ex repellendus voluptas ad dicta quod commodi similique nesciunt tenetur necessitatibus minus quia, delectus harum sequi ratione deserunt neque.</p>
        <img src={imgPlayStore} className="btn-playstore" />
      </div>

      <Container className="container-grid">
        <Row className="justify-content-md-center">
          <Col xs lg="6">

            <Media>
              <img
                className="align-self-center mr-3 col1-img"
                src={imgCol1}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
      </p>

              </Media.Body>
            </Media>
          </Col>
          <Col xs lg="6">
            <Media>
              <img
                className="align-self-center mr-3 col2-img"
                src={imgCol2}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
      </p>

              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>

      <div className="container-cta2">
        <h1 className="cta2-title">Baixe agora mesmo!</h1>
        <p className="cta2-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore assumenda qui ex repellendus voluptas ad dicta quod commodi similique nesciunt tenetur necessitatibus minus quia, delectus harum sequi ratione deserunt neque.</p>

      </div>

      <div className="footer">
        <p className="cta1-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore assumenda qui ex repellendus voluptas ad dicta quod commodi similique nesciunt tenetur necessitatibus minus quia, delectus harum sequi ratione deserunt neque.</p>
      </div>

    </>
    // <Link to="/map" className="enter-app">
    //   <FiArrowRight size="26" color="(0. 0. 0. 0. 6)"/>
    // </Link>
  );
}

export default Home;