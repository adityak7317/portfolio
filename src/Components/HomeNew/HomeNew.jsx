import React from "react";

import newPhoto from "../../static/newPhoto.png";

export default function HomeNew() {
  return (
    <>
      <img
        src={newPhoto}
        alt="photo...here"
        style={{ width: "28%", top: "9%", position: "absolute", zIndex: "1" }}
      />
      {/* <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </div> */}
      <span className="testing testing1" style={{ zIndex: "0" }}>
        ADITYA KUMAR
      </span>
      <span className="testing testing2" style={{ zIndex: "2" }}>
        ADITYA KUMAR
      </span>
    </>
  );
}
