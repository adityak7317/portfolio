import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "./Style.css";

const style = {
  component: {
    // width: "99%",
    minHeight: "100vh",
    // overflow: "scroll",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // color: "blue",
    // fontSize: 40,
  },
  navbarLi: {
    cursor: "pointer",
    color: "white",
    // padding: "3px",
    // borderBottom: "0.5px solid red",
  },
  navbarLiHover: {
    // color: "gray",
    // transition: "width .5s ease, background-color .5s ease",
  },
};

// hover effect styling in react
export default function App() {
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [expHover, setExpHover] = useState(false);
  const [skilsHover, setSkilsHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  const homeRef = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const toTop = useRef();

  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };
  const scrollToTop = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {/* navbar */}
        <div
          className=" row bg-dark text-white justify-content-between"
          style={{ height: "8vh" }}
        >
          <div className="col-md-2 d-flex align-items-center">
            <span className="text-center" style={{ width: "100%" }}>
              𝕒𝕜
            </span>
          </div>

          <div className="col-md-7 d-flex flex-row justify-content-between align-items-center p-0 m-0">
            <>
              <li></li>
              <li></li>

              <li
                className="navbarLi "
                onClick={() => {
                  scrollHandler(homeRef);
                }}
                onMouseEnter={() => setHomeHover(true)}
                onMouseLeave={() => setHomeHover(false)}
                style={{
                  ...style.navbarLi,
                  ...(aboutHover ||
                  expHover ||
                  skilsHover ||
                  projectsHover ||
                  contactHover
                    ? style.navbarLiHover
                    : null),
                }}
              >
                Home
              </li>
              <li
                className="navbarLi "
                onClick={() => {
                  scrollHandler(aboutRef);
                }}
                onMouseEnter={() => setAboutHover(true)}
                onMouseLeave={() => setAboutHover(false)}
                style={{
                  ...style.navbarLi,
                  ...(homeHover ||
                  expHover ||
                  skilsHover ||
                  projectsHover ||
                  contactHover
                    ? style.navbarLiHover
                    : null),
                }}
              >
                About
              </li>
              <li
                className="navbarLi "
                onClick={() => {
                  scrollHandler(expRef);
                }}
                onMouseEnter={() => setExpHover(true)}
                onMouseLeave={() => setExpHover(false)}
                style={{
                  ...style.navbarLi,
                  ...(aboutHover ||
                  homeHover ||
                  skilsHover ||
                  projectsHover ||
                  contactHover
                    ? style.navbarLiHover
                    : null),
                }}
              >
                Experience
              </li>
              <li
                className="navbarLi "
                onClick={() => {
                  scrollHandler(skillsRef);
                }}
                onMouseEnter={() => setSkilsHover(true)}
                onMouseLeave={() => setSkilsHover(false)}
                style={{
                  ...style.navbarLi,
                  ...(aboutHover ||
                  homeHover ||
                  expHover ||
                  projectsHover ||
                  contactHover
                    ? style.navbarLiHover
                    : null),
                }}
              >
                Skills
              </li>
              <li
                className="navbarLi "
                onClick={() => {
                  scrollHandler(projectsRef);
                }}
                onMouseEnter={() => setProjectsHover(true)}
                onMouseLeave={() => setProjectsHover(false)}
                style={{
                  ...style.navbarLi,
                  ...(aboutHover ||
                  homeHover ||
                  expHover ||
                  skilsHover ||
                  contactHover
                    ? style.navbarLiHover
                    : null),
                }}
              >
                Projects
              </li>
              <li
                className="navbarLi "
                onClick={() => {
                  scrollHandler(contactRef);
                }}
                onMouseEnter={() => setContactHover(true)}
                onMouseLeave={() => setContactHover(false)}
                style={{
                  ...style.navbarLi,
                  ...(aboutHover ||
                  homeHover ||
                  expHover ||
                  skilsHover ||
                  projectsHover
                    ? style.navbarLiHover
                    : null),
                }}
              >
                Contact
              </li>
              <li></li>
              <li></li>
            </>
          </div>
        </div>
        {/* components */}

        <div className="components">
          <div className="p-2 text-center">
            <span className="">
              while alive,code, eat,sleep,repeat....qoute
              {/* while(alive){
              code();
              eat();
              sleep();
              repeat();
            } */}
            </span>
          </div>
          <div
            // className="bg-warning text-white"
            style={{ ...style.component, backgroundColor: "#DDE6ED" }}
            ref={homeRef}
          >
            <Home />
          </div>
          <div
            // className="bg-warning text-white"
            style={{ ...style.component, backgroundColor: "#9DB2BF" }}
            ref={aboutRef}
          >
            <About />
          </div>
          <div
            // className="bg-warning text-white"
            style={{ ...style.component, backgroundColor: "#526D82" }}
            ref={expRef}
          >
            <Experience />
          </div>
          <div
            // className="bg-warning text-white"
            style={{ ...style.component, backgroundColor: "#27374D" }}
            ref={skillsRef}
          >
            <Skills />
          </div>
          <div
            // className="bg-warning text-white"
            style={{ ...style.component, backgroundColor: "#526D82" }}
            ref={projectsRef}
          >
            <Projects />
          </div>
          {/* <div
            // className="bg-warning text-white"
            style={{ ...style.component, backgroundColor: "#9DB2BF" }}
            ref={homeRef}
          >
            <Skills />
          </div> */}
          <div
            // className="bg-warning text-white"
            style={{ ...style.component, backgroundColor: "#9DB2BF" }}
            ref={contactRef}
          >
            <Contact />
          </div>
          <div
            className="bg-dark text-white"
            style={{ ...style.component }}
            ref={homeRef}
          >
            <Footer />
          </div>
        </div>
        {/* <div ref={section1} style={{ backgroundColor: "gray", ...center }}>
        SECTION 1
      </div>
      <div ref={section2} style={{ backgroundColor: "green", ...center }}>
        SECTION 2
      </div>
      <div ref={section3} style={{ backgroundColor: "#333", ...center }}>
        SECTION 3
      </div>
      <div ref={section4} style={{ backgroundColor: "darkgray", ...center }}>
        SECTION 4
      </div> */}
      </div>
      {/* back to top */}
      <div
        style={{
          position: "fixed",
          right: 10,
          bottom: 20,
          backgroundColor: "red",
          cursor: "pointer",
        }}
        onClick={() => {
          scrollToTop(toTop);
        }}
      >
        {show && <h1>Go to Top</h1>}
      </div>
    </>
  );
}
