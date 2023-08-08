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

const style = {
  component: {
    // width: "99%",
    minHeight: "100vh",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // color: "blue",
    // fontSize: 40,
  },
};

export default function App() {
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
      {/* <header>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly",
            cursor: "pointer",
            position: "fixed",
            backgroundColor: "pink",
            bottom: "0",
          }}
        >
          <li
            onClick={() => {
              scrollHandler(section1);
            }}
          >
            section1
          </li>
          <li
            onClick={() => {
              scrollHandler(section2);
            }}
          >
            section2
          </li>
          <li
            onClick={() => {
              scrollHandler(section3);
            }}
          >
            section3
          </li>
          <li
            onClick={() => {
              scrollHandler(section4);
            }}
          >
            section4
          </li>
        </ul>
      </header> */}
      {/* <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
          // cursor: "pointer",
          position: "fixed",
          // backgroundColor: "pink",
          // bottom: "0",
        }}
      >
        <Container fluid>
          <Navbar.Brand className="m-0">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            // className="d-flex justify-content-end"
          >
            <Nav className="" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link
                onClick={() => {
                  scrollHandler(homeRef);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollHandler(aboutRef);
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollHandler(expRef);
                }}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollHandler(skillsRef);
                }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollHandler(projectsRef);
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scrollHandler(contactRef);
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* navbar */}
      <div>
        <div className="fixed-top row text-white bg-dark justify-content-between">
          <div className="col-md-2 text-center">AK</div>
          <div className="col-md-7">
            <ul
              className="d-flex flex-row justify-content-between p-1 m-0"
              style={{ listStyle: "none" }}
            >
              <li></li>

              <li>Home</li>
              <li>About</li>
              <li>Experience</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
              <li></li>
            </ul>
          </div>
        </div>

        {/* components */}
        <div style={style.component} ref={homeRef}>
          <Home />
        </div>
        <div style={style.component} ref={aboutRef}>
          <About />
        </div>
        <div style={style.component} ref={expRef}>
          <Experience />
        </div>
        <div style={style.component} ref={skillsRef}>
          <Skills />
        </div>
        <div style={style.component} ref={projectsRef}>
          <Projects />
        </div>
        <div style={style.component} ref={skillsRef}>
          <Skills />
        </div>
        <div style={style.component} ref={contactRef}>
          <Contact />
        </div>
        <div style={style.component}>
          <Footer />
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
