import React, { useState, useEffect } from "react";
import axios from "axios";

function GeolocationTicker() {
  const [location, setLocation] = useState({ country: "", town: "" });
  const [datetime, setDatetime] = useState({
    currentDate: "",
    currentTime: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Fetch country and town using reverse geocoding
          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b46d262a72a646b8b413bcb4ba830ef2`
            );
            const components = response.data.results[0].components;
            const country = components.country;
            const town =
              components.city ||
              components.state ||
              components.village ||
              "Unknown";

            // Get the current date and time
            const date = new Date();
            const currentDate = date.toLocaleDateString();
            const currentTime = date.toLocaleTimeString();

            setLocation({ country, town });
            setDatetime({ currentDate, currentTime });
          } catch (err) {
            setError("Failed to fetch location details.");
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="ticker-container">
      {error ? (
        <div className="ticker">
          <p>{error}</p>
        </div>
      ) : (
        <div className="ticker">
          <span>
            Location: {location.town}, {location.country}
          </span>
          <span> Date: {datetime.currentDate}</span>
          <span> Time: {datetime.currentTime}</span>
        </div>
      )}
    </div>
  );
}

export default GeolocationTicker;
