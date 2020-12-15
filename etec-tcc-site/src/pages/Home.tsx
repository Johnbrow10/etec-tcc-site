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
        <Navbar.Brand>
          <Link to="/" className="botao" > <img alt="" src={logo} className="d-inline-block align-top img-menu" />{' '}</Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link>
              <Link className="botao" to="/">Ínicio</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link className="botao" to="/map">
                Buscar imóveis
              </Link>
            </Nav.Link>
            <Nav.Link className="botao" href="https://api.whatsapp.com/send?phone=5511972014007&text=Ol%C3%A1%2C%20gostaria%20de%20cadastrar%20meu%20im%C3%B3vel%20no%20i-luguel.">
              Cadastrar imóvel
            </Nav.Link>
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
            O i-luguel usa tecnologia para tornar a experiência de alugar um imóvel mais simples e agradável,
tanto para quem procura um lar quanto para quem anuncia com a gente.
          </p>
            <p>
              <Button className="btn-header">Explorar</Button>
            </p>
          </Col>
        </Row>
      </Container>

      <div className="container-cta1">
        <h1 className="cta1-title">Baixe agora mesmo!</h1>
        <p className="cta1-text">E encontre os imóveis que estão perto de você</p>
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
                <h5>Cadastre seu imóvel</h5>
                <p>
                  Está com dificuldade de alugar seu imóvel? cadastre=se no i-luguel! com um atendimento bem humanizado e sem formulários, você consegue ficar visível no buscador, tudo isso sem pagar nada.
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
                <h5>Encontre imóveis</h5>
                <p>
                  Procure por imóveis perto de você, filtre resultados por bairro, cidade, preço. Com poucos cliques você tem acesso ao proprietário de um imóvel, depois só agendar sua visita. 
      </p>

              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>

      <div className="container-cta2">
        <h1 className="cta2-title">Baixe agora mesmo!</h1>
        <p className="cta2-text">E encontre diversar opções de imóveis, de todos os tipos e tamanhos, filtre resultados e fale direto com o proprietário</p>

      </div>

      <div className="footer">
        <p className="cta1-text">i-luguel 2020. Todos direitos reservados</p>
      </div>

    </>
  );
}

export default Home;