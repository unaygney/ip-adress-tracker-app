import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ArrowRight from "../assets/icon-arrow.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import Markerposition from "./Markerposition";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const getData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_nrsgHXoVaihMZXP38jEDwAyfn6ddC&ipAddress=${inputValue}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Veri cekme hatasi:", error);
      return null;
    }
  };

  const center = data
    ? [data.location.lat, data.location.lng]
    : [51.505, -0.09];

  return (
    <div>
      <header className="header">
        <div className="input-container">
          <h1>IP Adress Tracker </h1>
          <form className="form">
            <div className="form-control">
              <input
                type="text"
                className="input"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search for any IP address or domain"
              />
              <button type="submit" onClick={getData} className="btn">
                <img src={ArrowRight} alt="btn" />
              </button>
            </div>
          </form>
        </div>

        <div className="info">
          <ul>
            <li>
              <h3>IP ADRESS</h3>
              <p>{data ? data.ip : "192.212.174.101"}</p>
            </li>
            <li>
              <h3>Location</h3>
              <p>
                {data ? (
                  <>
                    {data.location.region}, {data.location.country},{" "}
                    {data.location.postalCode}
                  </>
                ) : (
                  "Brooklyn, NY 10001"
                )}
              </p>
            </li>
            <li>
              <h3>Timezone</h3>
              <p>{data ? `UTC ${data.location.timezone}` : "UTC -05:00"}</p>
            </li>
            <li>
              <h3>ISP</h3>
              <p>{data ? data.as.name : "SpaceX Starlink"}</p>
            </li>
          </ul>
        </div>
      </header>

      <main className="main">
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "700px", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markerposition data={data} />
        </MapContainer>
      </main>
    </div>
  );
}

export default Header;
