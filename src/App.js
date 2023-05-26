import React, { useRef } from "react";

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

  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };
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
          }}
        >
          <li>section1</li>
          <li>section2</li>
          <li
            onClick={() => {
              scrollHandler(section3);
            }}
          >
            section3
          </li>
          <li>section4</li>
        </ul>
      </header>
      <div style={{ backgroundColor: "gray", ...center }}>SECTION 1</div>
      <div style={{ backgroundColor: "green", ...center }}>SECTION 2</div>
      <div ref={section3} style={{ backgroundColor: "#333", ...center }}>
        SECTION 3
      </div>
      <div style={{ backgroundColor: "darkgray", ...center }}>SECTION 4</div>
    </>
  );
}
