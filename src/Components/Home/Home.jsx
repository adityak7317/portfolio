import React from "react";
// import photo from "../../static/photo.png";
// import pic from "../../static/pic.png";
// import main from "../../static/new/main.png";
// import orange from "../../static/new/orange.png";
// import black from "../../static/new/black.png";
// import lightgray from "../../static/new/lightgray.png";
// import darkgray from "../../static/new/darkgray.png";
import mainPhoto from "../../static/mainPhoto.png";

import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';

import aditya_resume from "../../assests/aditya_resume.pdf";
import { ToastContainer, toast } from "react-toastify";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

export default function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.download = "aditya_kumar_resume";
    link.href = aditya_resume;
    link.click();
    toast.success("Resume Download Started !");
  };

  return (
    <>
      <div className="row">
        <div
          className="col-md-6"
          style={{
            minHeight: "50vh",
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
            <div className="row">
              <div className="col-md-7">
                <div className="d-flex flex-col justify-content-between">
                  <a href="https://github.com/adityak7317">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0"
                    >
                      <BsGithub />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/adityak7317/">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0"
                    >
                      <BiLogoLinkedin />
                    </button>
                  </a>
                  <a href="https://www.instagram.com/adityak7317/">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0"
                    >
                      <BsInstagram />
                    </button>
                  </a>
                  <a href="https://twitter.com/adityak7317">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0"
                    >
                      <BsTwitter />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  style={{ width: "100%" }}
                  onClick={handleResumeDownload}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{
            minHeight: "50vh",
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
