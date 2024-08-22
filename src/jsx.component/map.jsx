import React, { useEffect } from "react";

function Map() {
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://map-geocoding.p.rapidapi.com/json?address=25%20Murray%20Street%2C%20New%20York%2C%20NY%2010007%2C%20Amerika%20Serikat";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "6259e482e8msh660f33611f543dcp123727jsna812c36d2fc3",
          "x-rapidapi-host": "map-geocoding.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
}

export default Map;
