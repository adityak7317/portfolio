import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const center = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "blue",
  fontSize: 40,
};

export default function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
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
      <header>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly",
            cursor: "pointer",
            position: "fixed",
            backgroundColor: "pink",
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
      </header>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="m-0">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <div> */}
          <Navbar.Collapse
            id="navbarScroll"
            // className="d-flex justify-content-end"
          >
            <Nav className="" navbarScroll>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Experience</Nav.Link>
              <Nav.Link>Skills</Nav.Link>
              <Nav.Link>Works</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
              {/* <Nav.Link >Link</Nav.Link> */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link disabled>Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          {/* </div> */}
        </Container>
      </Navbar>

      <div ref={section1} style={{ backgroundColor: "gray", ...center }}>
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
      </div>
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
