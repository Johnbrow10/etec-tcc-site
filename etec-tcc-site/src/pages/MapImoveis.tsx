import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/map-imoveis.css';
import mapIcon from '../utils/mapIcon';

import api from '../api/service';

interface Orphanage {
    id_property: number;
    lat: number;
    lon: number;
    title: string;
}



function MapImoveis() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('').then(response => {
            setOrphanages(response.data);
        });
    }, []);
    console.log(orphanages)
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um imovel mapa</h2>
                    <p>Muitos Imoveis estão esperando a sua visita para alugar</p>
                </header>

                <footer>
                    <strong>
                        São Paulo
                        </strong>
                    <span> São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.7285722,-46.7585595]}
                zoom={13}
                style={{ width: '100%', height: '100%' }}

            >
                {/* mapa do openstreetmap */}
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />     */}
                <TileLayer
                    // mapa do MapBox litgh-v10
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id_property}
                            icon={mapIcon}
                            position={[orphanage.lat, orphanage.lon]}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.title}
                                <Link to={`/${orphanage.id_property}`}>
                                    <FiArrowRight size={32} color="#FFF" />
                                </Link>
                            </Popup>

                        </Marker>
                    )
                })}

            </Map>

            {/* <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"> </FiPlus>
            </Link> */}

        </div>
    )

}

export default MapImoveis;