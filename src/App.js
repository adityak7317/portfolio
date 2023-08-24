import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function App() {
  const style = {
    components: {
      backgroundColor: "#DDE6ED",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

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
    window.scrollTo({
      top: elmRef.current.offsetTop - 60,
      behavior: "smooth",
    });
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
      <ToastContainer />

      <Navbar
        scrollHandler={scrollHandler}
        homeRef={homeRef}
        aboutRef={aboutRef}
        expRef={expRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <div className="components" style={{ ...style.components }}>
        {/* <div> */}
        <div className="SpaceBWNavAndCom"></div>
        {/* </div> */}
        <div
          style={{ ...style.components, backgroundColor: "#9DB2BF" }}
          ref={homeRef}
        >
          <Home />
        </div>
        <div
          style={{ ...style.components, backgroundColor: "#526D82" }}
          ref={aboutRef}
        >
          <About />
        </div>
        <div
          style={{ ...style.components, backgroundColor: "#27374D" }}
          ref={expRef}
        >
          <Experience />
        </div>
        <div
          style={{ ...style.components, backgroundColor: "#526D82" }}
          ref={projectsRef}
        >
          <Projects />
        </div>
        <div
          style={{ ...style.components, backgroundColor: "#9DB2BF" }}
          ref={contactRef}
        >
          <Contact />
        </div>
        <div className="bg-dark text-white" style={{ ...style.components }}>
          <Footer />
        </div>
        {/* back to top */}
        <div
          style={{
            position: "fixed",
            right: 30,
            bottom: 30,
            cursor: "pointer",
          }}
          onClick={() => {
            scrollToTop(toTop);
          }}
        >
          {show && (
            <>
              <button
                type="button"
                className="btn btn-warning btn-sm fs-5 pt-0"
              >
                <BsFillArrowUpCircleFill />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
