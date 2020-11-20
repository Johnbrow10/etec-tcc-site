import React, { useEffect, useState } from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';


import '../styles/pages/imovel.css';
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';
import api from '../api/service';


interface Property {
    latitude: number;
    longitude: number;
    name: string;
    about: string;
    instructions: string;
    opening_hours: string;
    opening_on_weekend: string;
    images: Array<{
        id: number;
        url: string;
    }>
}

interface PropertyParams {
    id: string;
}


export default function Imovel() {
    const params = useParams<PropertyParams>();
    const [property, setImovel] = useState<Property>();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Essa funcao faz mudança quando o id e mudado na URL atraves do "params.id"
    useEffect(() => {
        api.get(`get-propertys.php/${params.id}`).then(response => {
            setImovel(response.data);
        });
    }, [params.id]);

    if (!property) {
        return <p>Carregando...</p>;
    }

    return (
        <div id="page-imovel">

            <Sidebar></Sidebar>


            <main>
                <div className="imovel-details">
                    <img src={property.images[activeImageIndex].url} alt={property.name} />

                    <div className="images">
                        {property.images.map((image,index) => {
                            return (
                                <button 
                                key={image.id} 
                                className={activeImageIndex === index ? 'active' : ''}
                                type="button"
                                onClick={()=>{
                                    setActiveImageIndex(index);
                                }}
                                >
                                    <img src={image.url} alt={property.name } />
                                </button>
                            );
                        })}
                    </div>

                    <div className="imovel-details-content">
                        <h1>{property.name}</h1>
                        <p>{property.about}</p>


                        <div className="map-container">
                            <Map
                                center={[property.latitude, property.longitude]}
                                zoom={16}
                                style={{ width: '100%', height: 280 }}
                                dragging={false}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    // mapa do MapBox litgh-v10
                                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                <Marker interactive={false} icon={mapIcon} position={[property.latitude, property.longitude]} />
                            </Map>

                            <footer> <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${property.latitude},${property.longitude}`}> Ver rotas no Google Maps</a> </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visitas</h2>
                        <p>{property.instructions}</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6DB" />
                                Segunda à sexta <br />
                                {property.opening_hours}
                            </div>
                            {/* um if tinerario que mostra quando se atende em final de semana em verde e falso
                             quando estar vermelho */}
                            {property.opening_on_weekend ? (
                                <div className="open-on-weekends">
                                    <FiInfo size={32} color="#39CC83" />
                                    Atendemos <br />
                                    Fim de semana.
                                </div>
                            ) : <div className="open-on-weekends dont-open">
                                    <FiInfo size={32} color="#FF669D" />
                                    Não atendemos <br />
                                    Fim de semana.
                                </div>}
                        </div>

                        {/* <button className="contact-button" type="button">
                            <FaWhatsapp size={32} color="FFF" />
                            Entrar em contato.
                         </button> */}
                    </div>
                </div>
            </main>
        </div>
    );
}