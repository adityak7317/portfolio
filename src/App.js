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
import HomeNew from "./components/HomeNew/HomeNew";
import SideLinks from "./components/SideLinks/SideLinks";

export default function App() {
  const [navbarChange, setNavbarChange] = useState(false);

  // {window.screenY>500}

  const style = {
    components: {
      minHeight: "90vh",
      padding: "3%",
      backgroundColor: "#DDE6ED",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  // const [homeHover, setHomeHover] = useState(false);
  // const [aboutHover, setAboutHover] = useState(false);
  // const [expHover, setExpHover] = useState(false);
  // const [skilsHover, setSkilsHover] = useState(false);
  // const [projectsHover, setProjectsHover] = useState(false);
  // const [contactHover, setContactHover] = useState(false);

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
        setNavbarChange(true);
      } else {
        setShow(false);
        setNavbarChange(false);
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
        navbarChange={navbarChange}
      />

      <div className="components">
        {/* <div> */}
        <div className="SpaceBWNavAndCom"></div>
        {/* </div> */}
        <div ref={homeRef}>
          {/* <div
            className="d-flex flex-column justify-content-center align-items-center"
            // style={{}}
          >
            <span className="p-1"></span>
            <span>
              Everything is simple, but for this you need to master!!!
            </span>
            <span className="p-1"></span>
          </div> */}

          <div style={{ ...style.components, backgroundColor: "#9DB2BF" }}>
            {/* <HomeNew /> */}

            <Home />
          </div>
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
      </div>

      <div
        className="sideContactList BTNStyling"
        // style={{
        //   position: "absolute",
        //   top: "30%",
        //   left: "0%",
        //   width: "min-content",
        // }}
      >
        <SideLinks />
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
              style={{
                backgroundColor: "rgb(222 129 0)",
                borderColor: "rgb(222 129 0)",
              }}
            >
              <BsFillArrowUpCircleFill />
            </button>
          </>
        )}
      </div>
    </>
  );
}
