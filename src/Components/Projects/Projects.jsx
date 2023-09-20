import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import SS from "../../static/SS.png";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Projects() {
  return (
    <>
      <Fade bottom>
        <h2 className="p-0 m-0" style={{ color: "rgb(29 48 73)" }}>
          Projects
        </h2>

        <div className="p-3"></div>

        <Card className="projectCard">
          <CardActionArea>
            <div className="bg-light rounded-3 overflow-hidden">
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={SS}
                    alt="photoooo...."
                    // className="position-relative"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-7">
                  <h5 className="mt-3">Heading</h5>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus consequatur magni similique quam accusantium
                    pariatur reprehenderit sapiente, vitae unde nobis quae
                    adipisci quibusdam voluptatibus magnam error expedita, vero
                    alias quidem.
                  </span>
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </Fade>
    </>
  );
}
