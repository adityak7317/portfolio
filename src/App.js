import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import SideLinks from "./Components/SideLinks/SideLinks";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Bubbles from "./Components/Bubbles/Bubbles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import HomeNew from "./Components/HomeNew/HomeNew";

export default function App() {
  const [navbarChange, setNavbarChange] = useState(false);

  // {window.screenY>500}

  const style = {
    componentStyle: {
      minHeight: "90vh",
      padding: "4%",
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

      <Nav
        scrollHandler={scrollHandler}
        homeRef={homeRef}
        aboutRef={aboutRef}
        expRef={expRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        navbarChange={navbarChange}
      />

      <div className="Components">
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

          <div style={{ ...style.componentStyle, backgroundColor: "#9DB2BF" }}>
            {/* <HomeNew /> */}
            {/* <Fade top> */}
            <Home />
            {/* </Fade> */}
          </div>
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#526D82" }}
          ref={aboutRef}
        >
          {/* <Fade bottom> */}
          <div style={{ ...style.componentStyle, backgroundColor: "#526D82" }}>
            <About />
          </div>
          {/* </Fade> */}
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#27374D" }}
          ref={expRef}
        >
          {/* <Fade bottom> */}
          <div style={{ ...style.componentStyle, backgroundColor: "#27374D" }}>
            <Experience />
          </div>
          {/* </Fade> */}
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#526D82" }}
          ref={projectsRef}
        >
          {/* <Fade bottom> */}
          <div style={{ ...style.componentStyle, backgroundColor: "#526D82" }}>
            <Projects />
          </div>
          {/* </Fade> */}
        </div>
        <div
          // style={{ ...style.componentStyle, backgroundColor: "#9DB2BF" }}
          ref={contactRef}
        >
          {/* <Fade bottom> */}
          <div style={{ ...style.componentStyle, backgroundColor: "#9DB2BF" }}>
            <Contact />
          </div>
          {/* </Fade> */}
        </div>
        <div className="bg-dark text-white" style={{ ...style.componentStyle }}>
          {/* <Fade bottom> */}
          <Footer />
          {/* </Fade> */}
        </div>
      </div>

      <div
        className="sideContactList BTNStyling p-2"
        // style={{
        //   position: "absolute",
        //   top: "30%",
        //   left: "0%",
        //   width: "min-content",
        // }}
      >
        {/* <Fade left> */}
        <SideLinks />
        {/* </Fade> */}
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

      {/* bubbles */}
      {/* <Bubbles /> */}
    </>
  );
}
