import React from "react";
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
  return (
    <>
      <ToastContainer />

      <Navbar />

      <div className="components" style={{ ...style.components }}>
        <div style={{ ...style.components, backgroundColor: "#DDE6ED" }}>
          <div className="SpaceBWNavAndCom"></div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            // style={{}}
          >
            <span>
              Everything is simple, but for this you need to master!!!
            </span>
            <span className="p-1"></span>
          </div>
        </div>
        <div style={{ ...style.components, backgroundColor: "#9DB2BF" }}>
          <Home />
        </div>
        <div style={{ ...style.components, backgroundColor: "#526D82" }}>
          <About />
        </div>
        <div style={{ ...style.components, backgroundColor: "#27374D" }}>
          <Experience />
        </div>
        <div style={{ ...style.components, backgroundColor: "#526D82" }}>
          <Projects />
        </div>
        <div style={{ ...style.components, backgroundColor: "#9DB2BF" }}>
          <Contact />
        </div>
        <div className="bg-dark text-white" style={{ ...style.components }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
