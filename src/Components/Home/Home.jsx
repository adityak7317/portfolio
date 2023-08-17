import React from "react";
// import photo from "../../static/photo.png";
// import pic from "../../static/pic.png";
// import main from "../../static/new/main.png";
// import orange from "../../static/new/orange.png";
// import black from "../../static/new/black.png";
// import lightgray from "../../static/new/lightgray.png";
// import darkgray from "../../static/new/darkgray.png";
import mainPhoto from "../../static/mainPhoto.png";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam
          possimus necessitatibus labore dignissimos rerum in explicabo
          consequuntur a ab iure totam repudiandae, illum magnam fugit rem
          delectus ipsam dolorem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusantium repellendus inventore ut autem et
          voluptas commodi corporis sunt libero. Aliquam maiores molestiae
          ducimus ipsam odit quod amet ipsum quo velit? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Mollitia aut illum minus quam ex
          molestias ea accusantium cumque? Ipsa, tempore non. Tenetur, ipsum
          quia. Voluptatem deserunt at quia velit minima.
        </div>
        <div className="col-md-6 d-flex align-item-center justify-content-center">
          <img
            src={mainPhoto}
            alt="main photo"
            className="mainPhoto"
            style={{
              width: "63%",
              // filter: "drop-shadow(16px 16px 10px black)",
            }}
          />
        </div>
      </div>
    </>
  );
}

//   {/* background images */}

//   <div className="bgImages">
//   {/* lightgray */}
//   <div className="lightgrayPhotoDiv">
//     <img
//       className="lightgrayPhoto"
//       src={lightgray}
//       alt="lightgray photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
//   {/* drakgray */}
//   <div className="darkgaryPhotoDiv">
//     <img
//       className="darkgaryPhoto"
//       src={darkgray}
//       alt="orange photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
//   {/* black */}
//   <div className="blackPhotoDiv">
//     <img
//       className="blackPhoto"
//       src={black}
//       alt="black photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
// </div>
// {/* main images */}
// <div className="mainImages">
//   {/* orange bg */}
//   <div className="img">
//     <img
//       className="orangePhoto"
//       src={orange}
//       alt="orange photo"
//       style={{ width: "100%", aspectRatio: "1/1" }}
//     />
//   </div>
//   <div className="img">
//     <img
//       className="mainPhoto"
//       src={main}
//       alt="my photo"
//       // style={{ width: "100%", position: "absolute", bottom: "35px" }}

//       // style={{
//       //   bottom: "40px",
//       // }}
//       // style={{
//       //   width: "55%",
//       //   height: "100%",
//       //   // objectFit: "cover"
//       // }}
//     />
//   </div>
// </div>
