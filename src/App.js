import React from "react";
import Navigation from "./jsx.component/navigation";
import Details from "./jsx.component/details";
import "./Style.component/style.css";
import Discover from "./jsx.component/discover";
import Records from "./jsx.component/records";
import Organization from "./jsx.component/organization";
import Gallery from "./jsx.component/gallery";
import Guidelines from "./jsx.component/guidelines";
import GeolocationTicker from "./jsx.component/geolocationticker";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navigation />
        <Details />
      </div>
      <Discover />
      <Records />
      <Organization />
      <Gallery />
      <Guidelines />
      <GeolocationTicker />
    </div>
  );
}

export default App;
