import React, { useState } from "react";
import { Fade } from "react-reveal";

import Button from "@mui/material/Button";
import Left from "./Left/Left";
import Right from "./Right/Right";

export default function Contact() {
  return (
    <>
      <Fade bottom>
        <div className="row">
          <div className="col-md-6">
            <Fade right>
              <Left />
            </Fade>
          </div>

          <div className="col-md-6">
            <Fade left>
              <Right />
            </Fade>
          </div>
        </div>
      </Fade>
    </>
  );
}
