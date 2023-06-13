import React, { useRef, useState, useEffect } from "react";

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
