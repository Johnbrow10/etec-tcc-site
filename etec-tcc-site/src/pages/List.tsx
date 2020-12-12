
import React, { useEffect, useState } from 'react';
import { GiKnifeFork, GiHomeGarage, GiSofa, GiMoneyStack } from 'react-icons/gi';
// import { GrMapLocation } from 'react-icons/gr';
import { SiOpenstreetmap } from 'react-icons/si';
import { FaBed, FaBath, FaUserTie, FaMapMarkedAlt } from 'react-icons/fa';
import {
    Navbar, Nav, FormControl, Form, Button, Container
    , Card, CardDeck, Row, Col, Carousel, OverlayTrigger, Tooltip
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/pages/list.css';


import api from '../api/service';


interface Property {
    id_property: number;
    lat: number;
    lon: number;
    title: string;
    url: string;
    property_contract: boolean;
    children: boolean;
    pets: boolean;
    individual: boolean;
    energy: boolean;
    water: boolean;
    monthly_payment: number;
    deposit: number;
    room: number;
    bedroom: number;
    kitchen: number;
    bathroom: number;
    garage: number;
    full_name: string;
    cpf: number;
    email: string;
    telephone: number;
    whatsapp: number;
    facebook: string
    instagram: string
    zipcode: number;
    street: string;
    address_number: number;
    neighborhood: string;
    city: string;
    state: string;
    'images-property': string;

}

export default function ListImoveis() {

    const [propertys, setPropertys] = useState<Property[]>([]);
    const [propertysFilter, setPropertysFilter] = useState<Property[]>([])
    const [pricesFilter, setPricesFilter] = useState({ de: '', ate: '' });
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get('').then(response => {
            setPropertys(response.data);
            setPropertysFilter(response.data);
        });
    }, []);

    const property = propertys.filter(data => data.id_property);

    
    const find = (event: any) => {
        const termo = event.target.value;

        setSearch(termo)

        const result = propertys.filter((property) => {
            const dataConcat = property.title.concat(property.neighborhood).toLowerCase().trim();
            return dataConcat.includes(termo.toLowerCase());
        });
        setPropertysFilter(result);

    }

    const priceFilter = (de: any, ate: any) => {
        setPricesFilter({
            de: de,
            ate: ate,
        })

        const filterData = propertys
            .filter(property => !de ? true : Number(property.monthly_payment) >= de)
            .filter(property => !ate ? true : Number(property.monthly_payment) <= ate)

        setPropertysFilter(filterData);
    }

    const cleanFilter = () => {
        setSearch('')
        setPricesFilter({ de: '', ate: '' })
        setPropertysFilter(propertys)
    }

    return (
        <><div>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Brand>
                    <Link className="botao" to="/">
                        <img alt="" src={logo} className="d-inline-block align-top img-menu" />{' '}
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link className="botao" to="/">Inicio</Link>
                        </Nav.Link>
                        <Nav.Link className="botao"  href="https://api.whatsapp.com/send?phone=5511972014007&text=Ol%C3%A1%2C%20gostaria%20de%20cadastrar%20meu%20im%C3%B3vel%20no%20i-luguel.">
                          Cadastrar imóvel
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

            <div className="page-cards">

                <div className="container-filter-list">
                    <Form inline>
                        <FormControl onChange={find} value={search} type="text" placeholder="Busque por bairro..." className="mr-sm-2" />
                        <FormControl onChange={(event) => priceFilter(event.target.value, pricesFilter.ate)} value={pricesFilter.de} type="number" placeholder="De" className="mr-sm-2" />
                        <FormControl onChange={(event) => priceFilter(pricesFilter.de, event.target.value)} value={pricesFilter.ate} type="number" placeholder="Até" className="mr-sm-2" />

                        <Button variant="clean" onClick={cleanFilter}>Limpar</Button>
                    </Form>
                </div>

                <Container>
                    <Row>
                        {propertysFilter.map(data => {
                            const img = data['images-property'].split(',');
                            console.log(img[0]);
                            return (
                                <Col md={3}>
                                    <CardDeck>
                                        <Card className="card">

                                            <Carousel key={data.id_property}>
                                                <Carousel.Item interval={8000}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={`https://youlikedigital.com.br/iluguel/images/${img[0]}`}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item interval={8000}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={`https://youlikedigital.com.br/iluguel/images/${img[1]}`}
                                                        alt="Third slide"
                                                    />


                                                </Carousel.Item>
                                                <Carousel.Item interval={8000}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={`https://youlikedigital.com.br/iluguel/images/${img[2]}`}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item interval={8000}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={`https://youlikedigital.com.br/iluguel/images/${img[3]}`}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item interval={8000}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={`https://youlikedigital.com.br/iluguel/images/${img[4]}`}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                            </Carousel>

                                            <Card.Body>
                                                <Card.Title className="card-title">{data.title}</Card.Title>
                                                <Card.Text>
                                                    <p className="card-text"><FaUserTie></FaUserTie> {data.full_name}</p>
                                                    <p className="card-text"> <SiOpenstreetmap></SiOpenstreetmap> {data.neighborhood} </p>
                                                    <p className="card-text"> <GiMoneyStack></GiMoneyStack> <strong>{data.monthly_payment} R$/mensal </strong>  </p>
                                                </Card.Text>
                                                <Link to={`/imovel/${data.id_property}`} className="enter-app">
                                                    <p className="p-enter">Ver detalhes</p>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </CardDeck>
                                </Col>
                            )
                        })}
                    </Row>

                </Container>

                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip id="top">
                            Listar em Mapa
                             </Tooltip>
                    }
                >
                    <Link to="/map" className="list-all">
                        <FaMapMarkedAlt className="icon"></FaMapMarkedAlt>

                    </Link>

                </OverlayTrigger>


            </div>

        </>
    )
}