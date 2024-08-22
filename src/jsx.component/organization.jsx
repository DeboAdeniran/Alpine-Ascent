import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import alpineclubUk from "../photo.component/alpineclub(uk).png";
import aac from "../photo.component/AAC.png";
import hmi from "../photo.component/HMI.jpeg";
import hmi1 from "../photo.component/HMI1.jpeg";
import nzac from "../photo.component/NZAC.png";
import sac from "../photo.component/SAC.jpeg";
import expclub from "../photo.component/EXPLORER'S CLUB.jpeg";
import PZA from "../photo.component/PZA.png";
import CAI from "../photo.component/CAI.png";
import OAV from "../photo.component/OAV.png";
import "leaflet/dist/leaflet.css";

const createCustomIcon = (imgUrl) => {
  return L.divIcon({
    html: `
      <div style="position: relative; width: 40px; height: 40px;">
        <img src="file-O9ZPngf94rVhRZ6IQOBeWwnC" style="width: 100%; height: 100%;" />
        <img src="${imgUrl}" style="position: absolute; top: 5px; left: 5px; width: 30px; height: 30px; border-radius: 50%;" />
      </div>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
};

function Organization() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [zoom, setZoom] = useState(2);

  const handleCardClick = (location) => {
    setSelectedLocation(location);
    setZoom(100); // Zoom in when a location is selected
  };

  const renderMap = () => {
    const mapCenter = selectedLocation
      ? [selectedLocation.lat, selectedLocation.lng]
      : [20, 0]; // Default to the world map center

    const mapZoom = selectedLocation ? zoom : 2; // Default zoom level for the world map

    return (
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: "400px", width: "80%" }}
        key={mapCenter.toString()}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {selectedLocation && (
          <Marker
            position={[selectedLocation.lat, selectedLocation.lng]}
            icon={createCustomIcon(
              [...data, ...data2].find((d) => d.location === selectedLocation)
                ?.img
            )}
          >
            <Popup>{`Location: ${selectedLocation.lat}, ${selectedLocation.lng}`}</Popup>
          </Marker>
        )}
      </MapContainer>
    );
  };

  return (
    <div className="organization" id="organization">
      <h2>Prominent Organizations and their Success Stories</h2>

      <div className="card_container">
        {data.map((d) => (
          <div
            className="cards"
            onClick={() => handleCardClick(d.location)}
            key={d.name}
          >
            <div className="card_logo">
              <img src={d.img} alt={d.name} />
              <h3>{d.name}</h3>
            </div>
            <div className="success_story">
              <p>{d.success_story}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="map">{renderMap()}</div>

      <div className="card_container">
        {data2.map((d2) => (
          <div
            className="cards"
            onClick={() => handleCardClick(d2.location)}
            key={d2.name}
          >
            <div className="card_logo">
              <img src={d2.img} alt={d2.name} />
              <h3>{d2.name}</h3>
            </div>
            <div className="success_story">
              <p>{d2.success_story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const data = [
  {
    name: "The Alpine Club (UK)",
    img: alpineclubUk,
    success_story:
      "Founded in 1857, The Alpine Club is the world’s first mountaineering club. It played a significant role in the Golden Age of Alpinism (1854-1865) when many of the great Alpine peaks, including the Matterhorn and Mont Blanc, were first ascended by its members.",
    location: { lat: 51.526617, lng: -0.081339 },
  },
  {
    name: "American Alpine Club",
    img: aac,
    location: { lat: 39.7555, lng: -105.2211 },
    success_story:
      " Established in 1902, the AAC has been at the forefront of American mountaineering achievements, including the first American ascent of Mount Everest in 1963. The club provides grants, conservation efforts, and support for the climbing community.",
  },
  {
    name: "Himalayan Mountaineering Institute",
    img: hmi,
    location: { lat: 27.0393, lng: 88.262 },
    success_story:
      "Founded in 1954, after the first ascent of Mount Everest by Sir Edmund Hillary and Tenzing Norgay, HMI has trained thousands of mountaineers. Its alumni have achieved significant climbs, including multiple ascents of Mount Everest and other 8,000-meter peaks.",
  },
  {
    name: "The New Zealand Alpine Club",
    img: nzac,
    location: { lat: -43.5333, lng: 172.6333 },
    success_story:
      "Founded in 1891, the NZAC has supported numerous pioneering climbs in the Southern Alps of New Zealand. The club played a crucial role in the early mountaineering career of Sir Edmund Hillary, who went on to become the first person to summit Mount Everest in 1953.",
  },
  {
    name: "The Swiss Alpine Club",
    img: sac,
    location: { lat: 46.948, lng: 7.4474 },
    success_story:
      "Established in 1863, SAC has been integral to the development of alpine sports in Switzerland. The club's members have made first ascents of many peaks in the Alps and are known for their expertise in mountain rescue and safety.",
  },
];

const data2 = [
  {
    name: "The Explorers Club",
    img: expclub,
    location: { lat: 40.7734, lng: -73.9664 },
    success_story:
      "Although not exclusively a mountaineering club, The Explorers Club, founded in 1904, has members who have been part of historic expeditions, including the first successful ascent of Mount Everest and the first journey to the North Pole.",
  },
  {
    name: "The Polish Mountaineering Association",
    img: PZA,
    location: { lat: 52.2288, lng: 21.0104 },
    success_story:
      "PZA has been a significant force in Himalayan mountaineering, especially during the 1980s. Polish climbers, known for 'winter first ascents,' were the first to summit several 8,000-meter, by Krzysztof Wielicki and Leszek Cichy in 1980.",
  },
  {
    name: "Club Alpino Italiano",
    img: CAI,
    location: { lat: 45.4841, lng: 9.2077 },
    success_story:
      "Founded in 1863, CAI has played a pivotal role in the exploration and climbing of the Italian Alps. Members of the club were involved in the first ascents of many significant peaks in the Dolomites and Western Alps.",
  },
  {
    name: "The Himalayan Club",
    img: hmi1,
    location: { lat: 18.9345, lng: 72.8228 },
    success_story:
      "Founded in 1928, The Himalayan Club has been instrumental in organizing and supporting expeditions to the Himalayas. The club has a long history of exploring the lesser-known regions of the Himalayas and has produced many successful mountaineers.",
  },
  {
    name: "The Austrian Alpine Club",
    img: OAV,
    location: { lat: 47.2719, lng: 11.3933 },
    success_story:
      "Established in 1862, ÖAV members were pioneers in exploring the Eastern Alps. The club has contributed significantly to mountain safety, hut-building, and the development of climbing routes throughout the Alps.",
  },
];

export default Organization;
