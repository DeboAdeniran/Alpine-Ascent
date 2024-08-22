import React from "react";
import bg from "../photo.component/record.png";

function Records() {
  return (
    <div className="records">
      <h2>NOTABLE RECORDS</h2>
      <div className="record_container">
        <p>First Ascent of Mount Everest (1953):</p>
        <p>Sir Edmund Hillary and Tenzing Norgay.</p>
      </div>

      <div className="record_container">
        <p>First Solo Ascent of Everest without Oxygen (1980):</p>
        <p>Reinhold Messner.</p>
      </div>

      <div className="record_container">
        <p>14 Eight-Thousanders in the Fastest Time (2019):</p>
        <p>Nirmal Purja, in 6 months and 6 days.</p>
      </div>

      <div className="record_container">
        <p>First Winter Ascent of K2 (2021):</p>
        <p>Nirmal Purja and team.</p>
      </div>

      <div className="record_container">
        <p>First Blind Ascent of Everest (2001):</p>
        <p>Erik Weihenmayer.</p>
      </div>

      <div className="record_container">
        <p>First Ascent of All 14 Eight-Thousanders (1986):</p>
        <p>Reinhold Messner.</p>
      </div>

      <div className="record_container">
        <p>First Female Ascent of Everest (1975):</p>
        <p>Junko Tabei.</p>
      </div>

      <div className="record_container">
        <p>Most Everest Summits by a Single Person (2023): </p>
        <p>Kami Rita Sherpa, with 28 summits.</p>
      </div>

      <img src={bg} alt="" />
    </div>
  );
}

export default Records;
