import React from "react";
// import photo from "../../static/photo.png";
// import pic from "../../static/pic.png";
// import main from "../../static/new/main.png";
// import orange from "../../static/new/orange.png";
// import black from "../../static/new/black.png";
// import lightgray from "../../static/new/lightgray.png";
// import darkgray from "../../static/new/darkgray.png";
import mainPhoto from "../../static/mainPhoto.png";

const style = {};

export default function Home() {
  return (
    <>
      <div className="row">
        <div
          className="col-md-6"
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "xx-large",
            fontWeight: "bold",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Hi There!</span>
              <span>
                I'm <span className="highlightText">Aditya Kumar 👋</span>
              </span>
            </div>
            <span className="d-flex align-items-center">
              <span style={{ fontSize: "initial" }}>Software Engineer</span>
              <span className="blinkingText">&nbsp;&#x2758;</span>
            </span>
          </div>
          {/* </div> */}
        </div>
        {/* <div
          className="col-md-6 d-flex align-item-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >

          <img
            src={mainPhoto}
            alt="main photo"
            className="mainPhoto"
            style={{
              width: "63%",
              minHeight: "fit-content",
              // filter: "drop-shadow(16px 16px 10px black)",
            }}
          />
        </div> */}

        <div
          className="col-md-6"
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={mainPhoto}
              alt="main photo"
              className="mainPhoto"
              style={{
                width: "90%",
                // minHeight: "fit-content",
                // filter: "drop-shadow(16px 16px 10px black)",
              }}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

//   {/* background images */}

//   <div className="bgImages">
//   {/* lightgray */}
//   <div className="lightgrayPhotoDiv">
//     <img
//       className="lightgrayPhoto"
//       src={lightgray}
//       alt="lightgray photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
//   {/* drakgray */}
//   <div className="darkgaryPhotoDiv">
//     <img
//       className="darkgaryPhoto"
//       src={darkgray}
//       alt="orange photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
//   {/* black */}
//   <div className="blackPhotoDiv">
//     <img
//       className="blackPhoto"
//       src={black}
//       alt="black photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
// </div>
// {/* main images */}
// <div className="mainImages">
//   {/* orange bg */}
//   <div className="img">
//     <img
//       className="orangePhoto"
//       src={orange}
//       alt="orange photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
//   <div className="img">
//     <img
//       className="mainPhoto"
//       src={main}
//       alt="my photo"
//       // style={{ width: "100%", position: "absolute", bottom: "35px" }}

//       // style={{
//       //   bottom: "40px",
//       // }}
//       // style={{
//       //   width: "55%",
//       //   height: "100%",
//       //   // objectFit: "cover"
//       // }}
//     />
//   </div>
// </div>
