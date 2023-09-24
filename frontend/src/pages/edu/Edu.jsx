import React from "react";
import "./Edu.css";
import { Link } from "react-router-dom";

const Edu = () => {
  return (
    <div className="edu">
      <div className="edu-head">
        <div className="edu-back">
          <Link>Back</Link>
        </div>
        <div className="eduh-text">
          <p>
            Master Sheep Care <br />
            and Farming
          </p>
        </div>
      </div>
      <div className="edu-link">
        <div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XrRCTuLznOU?si=Y4ax8RWrIXb2qwm_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="edu-sub"><p>Video on wool sheering</p></div>
      </div>
      <div className="edu-link">
        <div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XrRCTuLznOU?si=Y4ax8RWrIXb2qwm_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="edu-sub"><p>Video on wool sheering</p></div>
      </div>
    </div>
  );
};

export default Edu;
