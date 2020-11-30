import  Leaflet  from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import iconImovel from './iconImovel.png';

const mapIcon = Leaflet.icon({
    iconUrl: iconImovel,
    iconSize: [60, 60],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default mapIcon;