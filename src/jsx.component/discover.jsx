import React from "react";
import a from "../photo.component/a.png";
import rockClimbing from "../photo.component/rockClimbing.jpg";
import alpineClimbing from "../photo.component/alpineClimbing.jpg";
import expeditionClimbing from "../photo.component/expeditionClimbing.jpg";
import iceClimbing from "../photo.component/iceClimbing.jpg";
import scrambling from "../photo.component/scrambling.jpg";
import trekking from "../photo.component/trekking.jpg";
import ski from "../photo.component/ski.jpg";
import snow from "../photo.component/snow.jpg";
import danger from "../svg.component/danger.svg";
import cloud from "../photo.component/Frame 2.png";
import { SwiperSlide } from "swiper/react";

function Discover() {
  return (
    <div className="discover">
      <h2>Discover your path to the Peaks</h2>
      <p className="description">
        From the alpine adventures to technical climbs, find the mountaineering
        style that suits your spirit.
      </p>
      <div className="description_image">
        <img src={cloud} className="description_background" />
      </div>

      <div className="types">
        <div className="typeSection">
          <img src={rockClimbing} alt="" />
          <h3>Rock Climbing</h3>
          <p>
            This is the most popular form of mountaineering and involves
            climbing steep rock faces using ropes, harnesses, and other
            equipment.
          </p>
        </div>

        <div className="typeSection">
          <img src={alpineClimbing} alt="" />
          <h3>Alpine Climbing</h3>
          <p>
            Alpine climbing is a type of mountaineering that involves climbing
            steep, snowy peaks.
          </p>
        </div>

        <div className="typeSection">
          <img src={iceClimbing} alt="" />
          <h3>Ice Climbing</h3>
          <p>
            Ice climbing is a specialized form of climbing that involves
            ascending frozen waterfalls and ice-covered rock faces.
          </p>
        </div>

        <div className="typeSection">
          <img src={expeditionClimbing} alt="" />
          <h3>Expedition Climbing</h3>
          <p>
            Expedition climbing is a type of mountaineering that involves
            climbing the world’s highest and most difficult peaks.
          </p>
        </div>
      </div>

      <div className="types second_types">
        <div className="typeSection">
          <img src={scrambling} alt="" />
          <h3>Scrambling</h3>
          <p>
            Scrambling is a type of mountaineering that involves climbing steep,
            rocky terrain without the use of ropes or other technical equipment.
          </p>
        </div>

        <div className="typeSection">
          <img src={trekking} alt="" />
          <h3>Trekking</h3>
          <p>
            Trekking is a type of mountaineering that involves hiking through
            mountainous terrain.
          </p>
        </div>

        <div className="typeSection">
          <img src={ski} alt="" />
          <h3>Ski Mountaineering</h3>
          <p>
            Ski mountaineering is a type of mountaineering that involves
            climbing mountains and then descending on skis.
          </p>
        </div>

        <div className="typeSection">
          <img src={snow} alt="" />
          <h3>Snowshoeing</h3>
          <p>
            Snowshoeing is a type of mountaineering that involves hiking through
            snowy terrain using snowshoes.
          </p>
        </div>
      </div>
      <h2>Navigate the Dangers</h2>

      <div className="dangers">
        <div className="danger_Section">
          <img src={danger} alt="" />
          <h3>The Risk of Falling</h3>
          <p>
            The main climbing hazard is falling, mitigated by mental strength,
            safety gear, and knowing your limits.
          </p>
        </div>

        <div className="danger_Section">
          <img src={danger} alt="" />
          <h3>Avalanche Risk</h3>
          <p>
            Avalanches are deadly and best avoided through planning, but
            prevention is often out of your control.
          </p>
        </div>

        <div className="danger_Section">
          <img src={danger} alt="" />
          <h3>Avalanche Risk</h3>
          <p>
            Avalanches are deadly and best avoided through planning, but
            prevention is often out of your control.
          </p>
        </div>

        <div className="danger_Section dspart">
          <img src={danger} alt="" />
          <h3>Sudden Weather Change</h3>
          <p>
            Sudden weather changes are a climbing hazard, best avoided through
            careful planning and preparation.
          </p>
        </div>

        <div className="danger_Section dspart">
          <img src={danger} alt="" />
          <h3>Altitude Sickness</h3>
          <p>
            High altitudes can cause sickness; climb slowly, descend at night,
            and watch for symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
