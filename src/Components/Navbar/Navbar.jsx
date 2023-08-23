import React from "react";

export default function Navbar() {
  return (
    <>
      <div
        className="p-3 bg-dark text-white position-fixed"
        style={{
          width: "100%",
          // minHeight: "7vh",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <div className="row justify-content-between">
          <div className="col-md-1">
            <div className="d-flex align-items-center justify-content-center">
              <span
                className="text-center highlightText"
                style={{ width: "100%" }}
              >
                &#x2774; 𝕒𝕜 &#x2775;
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="m-0 p-0 col d-flex justify-content-around">
              <li>Home</li>
              <li>About</li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            

            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Link</a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}
