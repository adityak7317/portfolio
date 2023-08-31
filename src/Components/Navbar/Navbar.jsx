import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Navbar(props) {
  const style = {
    navbarMenuBTN: {
      fontWeight: "bold",
    },
  };

  const NavbarMenu = [
    {
      name: "Home",
      ref: props.homeRef,
    },
    {
      name: "About",
      ref: props.aboutRef,
    },
    {
      name: "Experience",
      ref: props.expRef,
    },
    {
      name: "Projects",
      ref: props.projectsRef,
    },
    {
      name: "Contact",
      ref: props.contactRef,
    },
  ];

  return (
    <>
      <div
        className="p-3 position-fixed"
        style={{
          width: "100%",
          zIndex: 1,

          backgroundColor: props.navbarChange ? "black" : "#9DB2BF",
          color: props.navbarChange ? "white" : "black",
          transition: "0.5s",
          // minHeight: "7vh",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <div className="row justify-content-between">
          <div className="col-md-1">
            <div className="d-flex align-items-center justify-content-center">
              <Button size="small">
                <span
                  className="text-center highlightText"
                  style={{ width: "100%" }}
                >
                  &#x2774; 𝕒𝕜 &#x2775;
                </span>
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-0 p-0 col d-flex justify-content-around">
              {NavbarMenu.map((val, key) => (
                <li>
                  <Button
                    size="small"
                    className={
                      props.navbarChange
                        ? "text-white navBtn1"
                        : "text-dark navBtn1"
                    }
                    style={style.navbarMenuBTN}
                    onClick={() => {
                      props.scrollHandler(val.ref);
                    }}
                  >
                    {val.name}
                  </Button>
                </li>
              ))}

              {/* <li>
                <Button
                  size="small"
                  className={
                    props.navbarChange
                      ? "text-white navBtn1"
                      : "text-dark navBtn1"
                  }
                  style={style.navbarMenuBTN}
                  onClick={() => {
                    props.scrollHandler(props.homeRef);
                  }}
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  size="small"
                  className="text-white"
                  onClick={() => {
                    props.scrollHandler(props.aboutRef);
                  }}
                >
                  About
                </Button>
              </li>
              <li>
                <Button
                  size="small"
                  className="text-white"
                  onClick={() => {
                    props.scrollHandler(props.expRef);
                  }}
                >
                  Experience
                </Button>
              </li>
              <li>
                <Button
                  size="small"
                  className="text-white"
                  onClick={() => {
                    props.scrollHandler(props.projectsRef);
                  }}
                >
                  Projects
                </Button>
              </li>
              <li>
                <Button
                  size="small"
                  className="text-white"
                  onClick={() => {
                    props.scrollHandler(props.contactRef);
                  }}
                >
                  Contact
                </Button>
              </li> */}
            </div>
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
