import React from "react";
import "./HomeAppGuide.css";
const HomeAppGuide = () => {
  return (
    <>
      <div className="HAGcontainer">
        <div className="HAGyt">
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
        <div className="HAGtext">
          App Guide
        </div>
      </div>
    </>
  );
};

export default HomeAppGuide;
