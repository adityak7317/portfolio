import React from "react";
import photo from "../../static/photo.png";
import pic from "../../static/pic.png";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">some texts</div>
        <div
          className="col-md-6 
        images"
        >
          {/* d-flex justify-content-center p-5  */}
          <img
            className="pic1"
            src={pic}
            alt="pic photo"
            // style={{
            //   width: "55%",
            //   height: "100%",
            //   // objectFit: "cover"
            // }}
          />
          <img
            className="pic2"
            src={photo}
            alt="my photo"
            // style={{
            //   width: "55%",
            //   height: "100%",
            //   // objectFit: "cover"
            // }}
          />
        </div>
      </div>
    </>
  );
}

{
  /* <div>Home</div>; */
}
