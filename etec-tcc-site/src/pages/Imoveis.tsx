import React, { useEffect, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { GiHomeGarage, GiBed, GiKnifeFork } from 'react-icons/gi';
import { FaCouch, FaToilet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';


import '../styles/pages/imovel.css';
import logo from '../images/logo.png';
import mapIcon from '../utils/mapIcon';
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
    'images_property': string;
    id_image: any;

}




export default function Imovel(props: any) {
    const idProperty = props.match.params;
    console.log(idProperty.id)

    const [propertys, setImovel] = useState<Property[]>([])



    useEffect(() => {
        api.get('').then(response => {
            setImovel(response.data);
        });
    }, []);


    const property = propertys.filter(data => data.id_property === idProperty.id)

    return (
        <><div>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img alt="" src={logo} className="d-inline-block align-top img-menu" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link className="botao" to="/">Ínicio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="botao" to="/map">Listar no Mapa</Link>
                        </Nav.Link>
                        <Nav.Link className="botao"  href="https://api.whatsapp.com/send?phone=5511972014007&text=Ol%C3%A1%2C%20gostaria%20de%20cadastrar%20meu%20im%C3%B3vel%20no%20i-luguel.">
                          Cadastrar imóvel
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

            <div className="imovel">

                {property.map(data => {
                    const img = data['images_property'].split(',');
                    console.log(property);
                    return (

                        <Container
                            key={data.id_property}
                            className="imovel-details">

                            <h1> {data.title}</h1>
                            <p className="endereco"> {data.street}, {data.city}, {data.state}</p>

                            <div className="grid-imagens">
                                <Row>
                                    <Col sm={6}>
                                        <img className="img" src={`https://youlikedigital.com.br/iluguel/images/${img[0]}`} />
                                    </Col>
                                    <Col sm={3}>

                                        <img className="imgMenor" src={`https://youlikedigital.com.br/iluguel/images/${img[1]}`} />
                                        <img className="imgMenor" src={`https://youlikedigital.com.br/iluguel/images/${img[2]}`} />
                                    </Col>


                                    <Col sm={3}>
                                        <img className="imgMenor" src={`https://youlikedigital.com.br/iluguel/images/${img[3]}`} />
                                        <img className="imgMenor" src={`https://youlikedigital.com.br/iluguel/images/${img[4]}`} />
                                    </Col>
                                </Row>


                                <h1 className="nome-proprietario"> Imóvel alugado por {data.full_name} </h1>
                                <div className="comodos-icons">

                                    <p className="font-icons"> <FaCouch/> {data.room} </p>
                                    <p className="font-icons"> <GiBed/>  {data.bedroom} </p>
                                    <p className="font-icons"> <FaToilet/> {data.bathroom}</p>
                                    <p className="font-icons"> <GiKnifeFork/> {data.kitchen} </p>

                                    {data.garage >= 1 ? (
                                        <p className="font-icons"> <GiHomeGarage></GiHomeGarage> {data.garage} </p>
                                    ) :
                                        ''}

                                </div>

                                <hr />
                            </div>
                            <Row>
                                <Col sm={6}>
                                    <div className="preco-aluguel">
                                        <h2>Detalhes do Aluguel</h2>
                                        <p className="preco-p"> O deposito inicial de dois meses <strong> R$ {data.deposit}</strong></p>
                                        <p className="preco-p"> O Aluguel mensal <strong>R$ {data.monthly_payment}</strong></p>

                                        {data.energy == true ? (
                                            <p className="preco-p">A energia estar inclusa no aluguel</p>
                                        ) : (
                                                <p className="preco-p">A energia não estar inclusa no aluguel</p>
                                            )}
                                        {data.water == true ? (
                                            <p className="preco-p">A água estar inclusa no aluguel</p>
                                        ) : (
                                                <p className="preco-p">A água não estar inclusa no aluguel</p>
                                            )}

                                        {data.property_contract == true ? (
                                            <p className="preco-p">A casa precisa de contrato assinado para ser alugada</p>
                                        ) : (
                                                <p className="preco-p">A casa não precisa de contrato assinado para ser alugada</p>
                                            )}

                                    </div>

                                    <div className="regras-casa">
                                        <h2>Detalhes da casa</h2>

                                        {data.pets == true ? (
                                            <p className="regras-p">Pode Animais nesta casa</p>
                                        ) : (
                                                <p className="regras-p">Não pode animais nesta casa</p>
                                            )}
                                        {data.children == true ? (
                                            <p className="regras-p">Pode Crianças nesta casa</p>
                                        ) : (
                                                <p className="regras-p">Não pode Crianças nesta casa</p>
                                            )}
                                        {data.individual == true ? (
                                            <p className="regras-p">Esta casa e a unica no terreno</p>
                                        ) : (
                                                <p className="regras-p">A casa não é a unica no terreno</p>
                                            )}
                                        {data.garage == 0 ? (
                                            <p className="regras-p"> A casa nao tem garage </p>
                                        ) : ''}

                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="map-container">
                                        <Map
                                            center={[data.lat, data.lon]}
                                            zoom={15}
                                            style={{ width: '100%', height: '100%' }}
                                            dragging={false}
                                            touchZoom={true}
                                            zoomControl={false}
                                            scrollWheelZoom={false}
                                            doubleClickZoom={false}
                                        >
                                            <TileLayer
                                                // mapa do MapBox litgh-v10
                                                url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                                            <Marker interactive={false} icon={mapIcon} position={[data.lat, data.lon]} />
                                        </Map>

                                        <footer> <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lon}`}> Ver rotas no Google Maps</a> </footer>
                                    </div>
                                </Col>

                            </Row>

                        </Container>

                    );

                })}

            </div></>
    );

}