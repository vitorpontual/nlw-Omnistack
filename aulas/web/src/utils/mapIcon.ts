import Leaflet from 'leaflet'

import mapMarkImg from '../images/mapMarker.svg'


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkImg,
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [180, 9]
  })

  export default mapIcon;