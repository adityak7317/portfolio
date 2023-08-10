import React from "react";
const element = [];
{
  for (let i = 0; i < 100; i++) {
    element.push("element___" + i);
  }
}
export default function Home() {
  return (
    <>
      {element.map((val) => (
        <div className="col">
          <span>{val}</span>
        </div>
      ))}
    </>
  );
}
