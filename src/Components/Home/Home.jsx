import React from "react";

import mainPhoto from "../../static/main2.png";

import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
// import { FaBeer } from 'react-icons/fa';

import aditya_resume from "../../asset/aditya_resume.pdf";
import { ToastContainer, toast } from "react-toastify";

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
      <div className="row" style={{ margin: "auto" }}>
        <div
          className="col-md-6"
          style={{
            minHeight: "45vh",
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
              <div className="col-md-8">
                <div className="d-flex flex-col justify-content-between">
                  <a href="mailto: who.adityak@gmail.com">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0 homeBTN"
                    >
                      <HiOutlineMail />
                    </button>
                  </a>

                  <a href="https://github.com/adityak7317">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0 homeBTN"
                    >
                      <BsGithub />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/adityak7317/">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0 homeBTN"
                    >
                      <BiLogoLinkedin />
                    </button>
                  </a>
                  <a href="https://www.instagram.com/adityak7317/">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0 homeBTN"
                    >
                      <BsInstagram />
                    </button>
                  </a>
                  <a href="https://twitter.com/adityak7317">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm fs-5 pt-0 homeBTN"
                    >
                      <BsTwitter />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <button
                  type="button"
                  className="btn btn-outline-dark homeBTN"
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
            minHeight: "45vh",
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
