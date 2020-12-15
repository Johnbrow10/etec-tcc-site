import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { GiKnifeFork, GiHomeGarage, GiSofa } from 'react-icons/gi';
import { FaBed, FaBath, FaList } from 'react-icons/fa';
import { Navbar, Nav, FormControl, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Map, TileLayer, Popup, Marker, } from 'react-leaflet';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/pages/map-imoveis.css';
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
    images_property: string;

}




export default function MapImoveis() {

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
                <Navbar.Brand href="#home">
                    <img alt="" src={logo} className="d-inline-block align-top img-menu" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link>
                            <Link className="botao" to="/">Inicio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="botao" to="/">
                                Cadastrar imóvel
                        </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

            <div className="container-filter">
                <Form inline>
                    <FormControl onChange={find} value={search} type="text" placeholder="Busque por bairro..." className="mr-sm-2" />
                    <FormControl onChange={(event) => priceFilter(event.target.value, pricesFilter.ate)} value={pricesFilter.de} type="number" placeholder="De" className="mr-sm-2" />
                    <FormControl onChange={(event) => priceFilter(pricesFilter.de, event.target.value)} value={pricesFilter.ate} type="number" placeholder="Até" className="mr-sm-2" />

                    <Button variant="clean" onClick={cleanFilter}>Limpar</Button>
                </Form>
            </div>

            <div id="page-map">

                <Map
                    center={[-23.7005414, -46.7929032]}
                    zoom={13}
                    style={{ width: '100%', height: '100%' }}
                >



                    <TileLayer
                        // mapa do MapBox litgh-v10
                        url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                    {propertysFilter.map(property => {

                        return (

                            <Marker Marker
                                key={property.id_property}
                                icon={mapIcon}
                                position={[property.lat, property.lon]}

                            >


                                <Popup closeButton={false} className="map-popup">
                                    <h1 className="rua-nome">{property.title}</h1>
                                    <p className="titulo-casa"> {property.neighborhood}, {property.city}</p>
                                    {property.monthly_payment <= 200 ? (
                                        <p>Aluguel/Noite <strong> R${property.monthly_payment} </strong></p>
                                    ) :
                                        <p>Aluguel/Mensal <strong> R$ {property.monthly_payment} </strong></p>}
                                    <div className="comodos-icons">
                                        <p>  <GiSofa className="icons"></GiSofa>  {property.room}</p>
                                        <p>  <FaBed className="icons"></FaBed>  {property.bedroom}</p>
                                        <p>  <FaBath className="icons"></FaBath> {property.bathroom}</p>
                                        <p> <GiKnifeFork className="icons"> </GiKnifeFork> {property.kitchen}</p>
                                        <p> <GiHomeGarage className="icons"> </GiHomeGarage> {property.garage}</p>

                                    </div>
                                    <Link to={`/imovel/${property.id_property}`} className="enter-app">
                                        <p className="p-enter">Ver detalhes</p>
                                    </Link>
                                </Popup>

                            </Marker>

                        );

                    })}

                </Map>
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip id="top">
                            Listar em cards
                             </Tooltip>
                    }
                >
                    <Link to="/list" className="list-all">
                        <FaList className="icons"></FaList>
                    </Link>

                </OverlayTrigger>


            </div></>

    )

}

