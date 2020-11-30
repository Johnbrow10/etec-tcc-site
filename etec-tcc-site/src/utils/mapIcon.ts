import  Leaflet  from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import iconImovel from './iconImovel.png';

const mapIcon = Leaflet.icon({
    iconUrl: iconImovel,
    iconSize: [30, 30],
    iconAnchor: [15, 60],
    popupAnchor: [0, -60]
})

export default mapIcon;