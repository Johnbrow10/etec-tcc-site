import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { GiKnifeFork, GiHomeGarage, GiSofa } from 'react-icons/gi';
import { FaBed, FaBath } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Popup, Marker, } from 'react-leaflet';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
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



    useEffect(() => {
        api.get('').then(response => {
            setPropertys(response.data);
        });
    }, []);
    console.log(propertys)
    return (

        <div id="page-map">
           

            <Map
                center={[-23.7285722, -46.7585595]}
                zoom={13}
                style={{ width: '100%', height: '100%' }}

            >
                {/* mapa do openstreetmap */}
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />     */}
                <TileLayer
                    // mapa do MapBox litgh-v10
                    url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {propertys.map(property => {
                    //  const images = property.images_property;
                    //  const listImages = images.split(',');

                    return (

                        <Marker Marker
                    key = { property.id_property }
                    icon = { mapIcon }
                    position = { [property.lat, property.lon]}

                        >


                        <Popup closeButton={false} className="map-popup">
                            <h1 className="rua-nome">{property.title}</h1>
                            <p className="titulo-casa"> {property.street}</p>
                            {
                                property.monthly_payment <= 200 ? (
                                    <p>Aluguel/Noite <strong> R${property.monthly_payment} </strong></p>
                                ) :
                                    <p>Aluguel/Mensal <strong> R$ {property.monthly_payment} </strong></p>
                            }
                            <div className="comodos-icons">
                                <p>  <GiSofa className="icons" ></GiSofa>  {property.room}</p>
                                <p>  <FaBed className="icons" ></FaBed>  {property.bedroom}</p>
                                <p>  <FaBath className="icons" ></FaBath> {property.bathroom}</p>
                                <p> <GiKnifeFork className="icons" > </GiKnifeFork> {property.kitchen}</p>
                                <p> <GiHomeGarage className="icons" > </GiHomeGarage> {property.garage}</p>
                                {/* <p>{listImages}</p> */}
                            </div>
                            <Link to={`/imovel/${property.id_property}`} className="enter-app">
                                <p className="p-enter">Ver detalhes</p>
                            </Link>
                        </Popup>

                        </Marker>

                    )

                })}

            </Map>

            {/* <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"> </FiPlus>
            </Link> */}

        </div >

    )

}

