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

                        {/* <div className="grid-imagens"> */}
                        <Row>
                            <Col sm={6}>
                                <img className="img" src={`https://youlikedigital.com.br/iluguel/images/${img[0]}`} />
                            </Col>
                            <Col sm={6}>

                                <img className="imgMenor" src={`https://youlikedigital.com.br/iluguel/images/${img[2]}`} />

                            </Col>
                        </Row>

                        <h1> Casa hospedada por {data.full_name} </h1>
                        <div className="comodos-icons">
                            <p className="font-icons">{data.room} sala</p>
                            <p className="font-icons">{data.bedroom} quarto</p>
                            <p className="font-icons">{data.bathroom} banheiro</p>
                            <p className="font-icons">{data.kitchen} cozinha</p>
                            <p className="font-icons">{data.garage} garage</p>
                        </div>

                        <hr />

                    </Container>


                )

             







            })

            }
        </div>
    );

}