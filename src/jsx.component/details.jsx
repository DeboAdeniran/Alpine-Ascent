import React, { useRef } from "react";
import history from "../svg.component/history.svg";
import technique from "../svg.component/technique.svg";
import tent from "../svg.component/tent.svg";
import background from "../photo.component/h.png";

function Details() {
  const historyModalRef = useRef(null);
  const techniquesModalRef = useRef(null);
  const tentModalRef = useRef(null);

  const toggleModal = (modalRef) => {
    if (modalRef.current) {
      const isModalOpen = modalRef.current.style.display === "block";
      modalRef.current.style.display = isModalOpen ? "none" : "block";

      if (!isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  };
  return (
    <div className="details">
      <h1>CONQUER THE PEAKS</h1>
      <p className="details_description">
        Welcome to the world of mountaineering, where every peak is a new story,
        and every ascent is a journey to self-discovery. Whether you're a
        seasoned climber or just starting your adventure, here you will find
        everything you need to fuel your passion forthe mountains. Dive into the
        rich history of mountaineering, learn about the various techniques and
        styles, and prepare yourself with expert tips to conquer your next
        summit.
      </p>
      <div className="background_image">
        <img src={background} className="background" />
      </div>
      <div className="details_container">
        <div className="history">
          <div className="moredetails">
            <img src={history} alt="" />
            <div>
              <p>
                Early attempts to ascend mountain peaks were inspired by other
                than sporting motives: to build altars or to see if spirits
                actually haunted once-forbidden heights, to get an overview of
                one’s own or a neighbouring countryside, or to make
                meteorological or geological observations...
              </p>

              <p
                className="more-details-link"
                onClick={() => toggleModal(historyModalRef)}
              >
                More Details &rarr;
              </p>
            </div>
          </div>
        </div>

        <div
          ref={historyModalRef}
          className="modal-overlay"
          style={{ display: "none" }}
        >
          <div className="modal-content">
            <span
              className="close-modal"
              onClick={() => toggleModal(historyModalRef)}
            >
              &times;
            </span>
            <h2>History</h2>
            <p>
              Early attempts to ascend mountain peaks were inspired by other
              than sporting motives: to build altars or to see if spirits
              actually haunted once-forbidden heights, to get an overview of
              one’s own or a neighbouring countryside, or to make meteorological
              or geological observations. Before the modern era, history
              recorded few attempts to ascend mountain peaks for the mere sake
              of the accomplishment. During the 18th century a growing number of
              natural philosophers—the scientists of their day—began making
              field trips into the Alps of Europe to make scientific
              observations. The area around Chamonix, France, became a special
              attraction to those investigators because of the great glaciers on
              the Mont Blanc chain.
            </p>
            <p>
              Mountaineering in a contemporary sporting sense was born when a
              young Genevese scientist, Horace-Bénédict de Saussure, on a first
              visit to Chamonix in 1760, viewed Mont Blanc (at 15,771 feet
              [4,807 metres] the tallest peak in Europe) and determined that he
              would climb to the top of it or be responsible for its being
              climbed. He offered prize money for the first ascent of Mont
              Blanc, but it was not until 1786, more than 25 years later, that
              his money was claimed—by a Chamonix doctor, Michel-Gabriel
              Paccard, and his porter, Jacques Balmat. A year later de Saussure
              himself climbed to the summit of Mont Blanc. After 1850 groups of
              British climbers with Swiss, Italian, or French guides scaled one
              after another of the high peaks of Switzerland. A landmark climb
              in the growth of the sport was the spectacular first ascent of the
              Matterhorn (14,692 feet [4,478 metres]) on July 14, 1865, by a
              party led by an English artist, Edward Whymper. In the mid-19th
              century the Swiss developed a coterie of guides whose leadership
              helped make mountaineering a distinguished sport as they led the
              way to peak after peak throughout central Europe.
            </p>
          </div>
        </div>

        <div className="techniques">
          <div className="moredetails">
            <img src={technique} alt="" />
            <div>
              <p>
                While it is necessary for the complete mountaineer to be
                competent in all three phases of the sport—hiking, rock
                climbing, and snow and ice technique—each is quite different.
                There are wide variations within those categories, and even the
                most accomplished mountaineers will...
              </p>

              <p
                className="more-details-link"
                onClick={() => toggleModal(techniquesModalRef)}
              >
                More Details &rarr;
              </p>
            </div>
          </div>
        </div>

        <div
          ref={techniquesModalRef}
          className="modal-overlay"
          style={{ display: "none" }}
        >
          <div className="modal-content">
            <span
              className="close-modal"
              onClick={() => toggleModal(techniquesModalRef)}
            >
              &times;
            </span>
            <h2>Techniques</h2>
            <p>
              While it is necessary for the complete mountaineer to be competent
              in all three phases of the sport—hiking, rock climbing, and snow
              and ice technique—each is quite different. There are wide
              variations within those categories, and even the most accomplished
              mountaineers will have varying degrees of competence in each. Good
              climbers will strike that balance that is consonant with their own
              physical and mental capabilities and approach.
            </p>
            <p>
              Rock climbing, like hiking, is a widely practiced sport in its own
              right. The essentials of rock climbing are often learned on local
              cliffs, where the teamwork of mountaineering, the use of the rope,
              and the coordinated prerequisites of control and rhythm are
              mastered. The rope, the artificial anchor, and carabiner (or snap
              link, a metal loop or ring that can be snapped into an anchor and
              through which the rope may be passed) are used primarily as safety
              factors. An exception occurs in tension climbing, in which the
              leader is supported by a judiciously placed series of anchors and
              carabiners through which the rope is passed. He or she is then
              supported on the rope by fellow climbers while slowly moving
              upward to place another anchor and repeat the process.
            </p>
            <p>
              In climbing long snow slopes, a tedious task, it is necessary to
              strike a slow and rhythmic pace that can be sustained for a long
              time. It is desirable to make a start on the mountain early in the
              day when the snow is in hard condition. As in all phases of
              mountaineering, judgment is important when engaging in snow and
              ice climbing. The length of the climb, the nature of the weather,
              the effect of the sun’s heat on snow and ice, and the potential
              avalanche danger must all be considered.
            </p>
          </div>
        </div>

        <div className="tent">
          <div className="moredetails">
            <img src={tent} alt="" />
            <div>
              <p>
                Huts may be well-developed or rustic shelters, located in rural
                areas at differing elevations along a mountain. These shelters
                are designed around a shared dining area with private sleeping
                sleeping quarters. Tents consist of a pole framework, covered in
                a tarp or some...
              </p>

              <p
                className="more-details-link"
                onClick={() => toggleModal(tentModalRef)}
              >
                More Details &rarr;
              </p>
            </div>
          </div>
        </div>

        <div
          ref={tentModalRef}
          className="modal-overlay"
          style={{ display: "none" }}
        >
          <div className="modal-content">
            <span
              className="close-modal"
              onClick={() => toggleModal(tentModalRef)}
            >
              &times;
            </span>
            <h2>Shelter</h2>
            <h3>Hut</h3>
            <p>
              Huts may be well-developed or rustic shelters, located in rural
              areas at differing elevations along a mountain. These shelters are
              designed around a shared dining area with private sleeping
              sleeping quarters.
            </p>
            <h3>Tent</h3>
            <p>
              Tents consist of a pole framework, covered in a tarp or some other
              material and held by ropes and anchors. These shelters are set up
              at the moment it will be used and are easily portable.
            </p>
            <h3>Snow Cave</h3>
            <p>
              Snow caves are preferred over tents by some climbers, where
              weather conditions permit. These shelters are known to be warmer
              than tents and have only 2 requirements: snow and a snow shovel.
            </p>
            <h3>Bivouac</h3>
            <p>
              A bivouac, also known as a bivvy, is a very rudimentary type of
              shelter. It does not offer a completely enclosed shelter and in
              some cases, may involve simply sleeping in the open.
            </p>
            <h3>Base Camp</h3>
            <p>
              Base camps are most frequently used by mountain climbers who are
              trying to reach the summit of very high mountains. These shelters
              are often stocked with necessary supplies and provide climbers
              with a safe location for acclimatizing to extreme altitudes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
