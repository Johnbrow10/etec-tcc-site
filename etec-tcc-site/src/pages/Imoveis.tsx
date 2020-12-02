import React, { useEffect, useState } from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { GiKnifeFork, GiHomeGarage, GiSofa } from 'react-icons/gi';
import { FaBed, FaBath } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


import '../styles/pages/imovel.css';
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';
import api from '../api/service';
import Axios from 'axios';
import { transform } from 'typescript';

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
    id_image: any;

}




export default function Imovel(props: any) {
    const idProperty = props.match.params;
    console.log(idProperty.id)

    const [propertys, setImovel] = useState<Property[]>([])





    // setId(idProperty.id);
    // Essa funcao faz mudança quando o id e mudado na URL atraves do "params.id"

    useEffect(() => {
        api.get('').then(response => {
            setImovel(response.data);
        });
    }, []);

    console.log(propertys);

    const property = propertys.filter(data => data.id_property === idProperty.id)

    return (


        <div className="imovel">

            {property.map(data => {
                const img = data['images-property'].split(',');
                console.log(img)
                return (

                    <Container
                        key={data.id_property}
                        className="imovel-details">

                        <h1 > {data.title}</h1>
                        <p className="endereco" > {data.street}, {data.city}, {data.state}</p>

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
                                <p className="font-icons">{data.room} sala</p>
                                <p className="font-icons">{data.bedroom} quarto</p>
                                <p className="font-icons">{data.bathroom} banheiro</p>
                                <p className="font-icons">{data.kitchen} cozinha</p>
                                {data.garage >= 1 ? (
                                    <p className="font-icons">{data.garage} garage</p>
                                ) :
                                    ''}

                            </div>

                            <hr />
                        </div>
                        <Row>
                            <Col sm={6}>
                                <div className="preco-aluguel">
                                    <h2>Preços do Aluguel</h2>
                                    <p className="preco-p"> O deposito inicial de dois meses <strong> R$ {data.deposit}</strong></p>
                                    <p className="preco-p"> O Aluguel mensal <strong>R$ {data.monthly_payment}</strong></p>
                                    
                                    {data.property_contract === true ? (
                                        <p className="preco-p">A casa precisa de contrato assinado para ser alugada</p>
                                    ) : (
                                            <p className="preco-p">A casa não precisa de contrato assinado para ser alugada</p>
                                        )}

                                </div>

                                <div className="regras-casa">
                                    <h2>Regras da casa</h2>
                                    {/* campos que sao booleanos tem duas opções de paragrafos */}
                                    {data.pets === true ? (
                                        <p className="regras-p">Pode Animais nesta casa</p>
                                    ) : (
                                            <p className="regras-p">Não pode animais nesta casa</p>
                                        )}
                                    {data.children === true ? (
                                        <p className="regras-p">Pode Crianças nessa casa</p>
                                    ) : (
                                            <p className="regras-p">Não pode Crianças nesta casa</p>
                                        )}
                                    {data.individual === true ? (
                                        <p className="regras-p">Esta casa e a unica no terreno</p>
                                    ) : (
                                            <p className="regras-p">A casa não é a unica no terreno</p>
                                        )}
                                    {data.garage === 0 ? (
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
                                            url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                        />
                                        <Marker interactive={false} icon={mapIcon} position={[data.lat, data.lon]} />
                                    </Map>

                                    <footer> <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lon}`}> Ver rotas no Google Maps</a> </footer>
                                </div>
                            </Col>

                        </Row>



                    </Container>


                )









            })

            }
        </div>
    );

}