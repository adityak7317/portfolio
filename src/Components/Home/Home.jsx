import React from "react";
import photo from "../../static/photo.png";
import pic from "../../static/pic.png";
import main from "../../static/new/main.png";
import orange from "../../static/new/orange.png";
import black from "../../static/new/black.png";
import lightgray from "../../static/new/lightgray.png";
import darkgray from "../../static/new/darkgray.png";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
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
          {/* <span className="try">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            ab. Debitis, amet! Qui tenetur rem at exercitationem rerum animi
            laborum assumenda, eum ipsa alias consectetur doloremque aut, sed
            eveniet ab.
          </span> */}
        </div>
        <div className="col-md-6">
          <div className="images">
            <img
              className="orangePhoto"
              src={orange}
              alt="orange photo"
              style={{}}
            />
            <img
              className="mainPhoto"
              src={main}
              alt="my photo"
              // style={{
              //   width: "55%",
              //   height: "100%",
              //   // objectFit: "cover"
              // }}
            />
          </div>
          {/* d-flex justify-content-center p-5  */}
        </div>
      </div>
    </>
  );
}

{
  /* <div>Home</div>; */
}
