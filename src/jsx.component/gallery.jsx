import React, { useState, useRef } from "react";
import img from "../gallery.component/img.jpg";
import img1 from "../gallery.component/img1.jpg";
import img2 from "../gallery.component/img2.jpg";
import img3 from "../gallery.component/img3.jpg";
import img4 from "../gallery.component/img4.jpg";
import img5 from "../gallery.component/img5.jpg";
import img6 from "../gallery.component/img6.jpg";
import img7 from "../gallery.component/img7.jpg";
import img8 from "../gallery.component/img8.jpg";
import img9 from "../gallery.component/img9.jpg";
import vid from "../gallery.component/vid.mp4";
import vid2 from "../gallery.component/vid2.mp4";
import vid3 from "../gallery.component/vid3.mp4";
import vid4 from "../gallery.component/vid4.mp4";
import vid5 from "../gallery.component/vid5.mp4";
import pause from "../svg.component/pause.svg";
import play from "../svg.component/play.svg";

function Gallery() {
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const togglePlayPause = (index) => {
    const currentVideoRef = videoRefs.current[index];
    const isPlaying = playingStates[index];

    if (isPlaying) {
      currentVideoRef.pause();
    } else {
      currentVideoRef.play();
    }

    setPlayingStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="gallery" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery_display">
        <h3>All</h3>
        <h3>Videos</h3>
        <h3>Images</h3>
      </div>
      <div className="gallery_container">
        <img src={img} alt="" />
        <div className="vid">
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            width="320"
            height="240"
          >
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={() => togglePlayPause(0)}>
            {playingStates[0] ? <img src={pause} /> : <img src={play} />}
          </button>
        </div>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <div className="vid">
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            width="320"
            height="240"
          >
            <source src={vid5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={() => togglePlayPause(1)}>
            {playingStates[1] ? <img src={pause} /> : <img src={play} />}
          </button>
        </div>
        <img src={img3} alt="" />
        <div className="vid">
          <video
            ref={(el) => (videoRefs.current[2] = el)}
            width="320"
            height="240"
          >
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={() => togglePlayPause(2)}>
            {playingStates[2] ? <img src={pause} /> : <img src={play} />}
          </button>
        </div>
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <div className="vid">
          <video
            ref={(el) => (videoRefs.current[3] = el)}
            width="320"
            height="240"
          >
            <source src={vid4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={() => togglePlayPause(3)}>
            {playingStates[3] ? <img src={pause} /> : <img src={play} />}
          </button>
        </div>
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <div className="vid gclastchild">
          <video
            ref={(el) => (videoRefs.current[4] = el)}
            width="320"
            height="240"
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={() => togglePlayPause(4)}>
            {playingStates[4] ? <img src={pause} /> : <img src={play} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
