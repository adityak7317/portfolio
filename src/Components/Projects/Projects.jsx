import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
// import SS from "../../static/SS.png";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import DR from "../../static/projects/DR.png";
import Magod from "../../static/projects/Magod.png";
import PMS from "../../static/projects/PMS.png";
import ImgViewer from "./ImgViewer/ImgViewer";

export default function Projects() {
  const [imgViewerOpen, setImgViewerOpen] = useState(false);

  const [selectedImage, setselectedImage] = useState({
    image: "",
    imageAlt: "",
  });
  const ProjectsData = [
    {
      image: DR,
      imageAlt: "111111111",
      name: "Digital Registers",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus eveniet soluta natus autem ea, veniam consequuntur modi corrupti! Earum veniam quia ipsam, quaerat reprehenderit animi ipsum consequatur vero optio.",
    },
    {
      image: Magod,
      imageAlt: "22222222",
      name: "Billing and Material ERP",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus eveniet soluta natus autem ea, veniam consequuntur modi corrupti! Earum veniam quia ipsam, quaerat reprehenderit animi ipsum consequatur vero optio.",
    },
    {
      image: PMS,
      imageAlt: "333333",
      name: "Performance Management System",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus eveniet soluta natus autem ea, veniam consequuntur modi corrupti! Earum veniam quia ipsam, quaerat reprehenderit animi ipsum consequatur vero optio.",
    },
  ];

  const handleCardClicked = (image, imageAlt) => {
    setImgViewerOpen(true);
    selectedImage.image = image;
    selectedImage.imageAlt = imageAlt;
    setselectedImage(selectedImage);
  };

  return (
    <>
      <ImgViewer
        setImgViewerOpen={setImgViewerOpen}
        imgViewerOpen={imgViewerOpen}
        selectedImage={selectedImage}
      />
      <Fade bottom>
        <h2 className="p-0 m-0" style={{ color: "rgb(29 48 73)" }}>
          Projects
        </h2>

        <div className="p-3"></div>

        {ProjectsData.map((val, key) => (
          <Card
            className="projectCard mb-3"
            onClick={() => {
              handleCardClicked(val.image, val.imageAlt);
            }}
            // style={{ borderRadius: "5px", overflow: "hidden" }}
          >
            <CardActionArea>
              <div className="bg-light">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={val.image}
                      alt={val.imageAlt}
                      // className="position-relative"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-7 p-4 pt-0">
                    <h5 className="mt-3">{val.name}</h5>
                    <span>{val.desc}</span>
                  </div>
                </div>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </Fade>
    </>
  );
}
