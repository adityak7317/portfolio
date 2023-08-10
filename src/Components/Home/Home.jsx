import React from "react";
import photo from "../../static/photo.png";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">some texts</div>
        <div className="col-md-6">
          <img
            src={photo}
            alt="my photo"
            style={{
              width: "80%",
              height: "100%",
              // objectFit: "cover"
            }}
          />
        </div>
      </div>
    </>
  );
}

{
  /* <div>Home</div>; */
}
