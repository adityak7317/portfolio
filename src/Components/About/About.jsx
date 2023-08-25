import React from "react";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { FaBookReader } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { BiSolidTimer } from "react-icons/bi";
// import { BsTwitter } from "react-icons/bs";

// <Stack direction="row" spacing={1}>
//       <Chip label="Chip Filled" />
//       <Chip label="Chip Outlined" variant="outlined" />
//     </Stack>

const style = {
  headerIcons: {
    padding: "0%",
    width: "150px",
    aspectRatio: "2/1",
    fontSize: "xx-large",
    // color: "white",
    // backgroundColor: "rgb(120 131 139)",
    borderRadius: "25px",
  },
};

const softSkills = [
  {
    no: 1,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Problem Solving",
    aboutSS:
      "I adeptly tackle intricate problems, especially as a software engineer, by innovatively resolving tough issues with practical solutions.",
  },
  {
    no: 2,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Adaptibility",
    aboutSS:
      "I skillfully adapt to change, technology and demands, learn fast and grow in a variety of scenarios to excel and assist in project success.",
  },
  {
    no: 3,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Team Player",
    aboutSS:
      "I like teaming up with others, believing in sharing ideas, cooperating, and contributing skills to reach our goals together.",
  },

  {
    no: 4,
    imgSrc: "https://loremflickr.com/2160/2160",
    headerSS: "Time Management",
    aboutSS:
      "I excel at efficiently managing my time as a full-stack developer, ensuring tasks are completed both effectively and on schedule.",
  },
];

export default function About() {
  return (
    <>
      <div className="row">
        {softSkills.map((val, key) => (
          <>
            <div className="col-md-3">
              <div class="card mb-3">
                <div class="p-1">
                  {/* <div>
                    <span>somethings</span>
                  </div> */}
                  <div>
                    <div class="card-body p-0">
                      <h6 class="card-title m-0 p-0 text-center">
                        {val.headerSS}
                      </h6>
                      <span class="card-text">{val.aboutSS}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="row" style={{ margin: "auto" }}>
        <div
          className="col-md-6"
          style={{
            minHeight: "45vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <div className="row">
              <span>
                Welcome to my portfolio! I'm Aditya Kumar, a passionate and
                skilled Full Stack Developer with two years of valuable
                professional experience. My journey in the world of software
                development has been driven by a deep fascination for crafting
                innovative digital solutions that bridge the gap between
                complexity and simplicity. Throughout my career, I have honed my
                expertise in a diverse array of technologies, allowing me to
                provide end-to-end solutions that seamlessly integrate
                user-centric front-end experiences with robust and scalable
                back-end functionalities. My toolkit includes Java, JavaScript,
                and Python, which empower me to create dynamic and responsive
                applications. I'm well-versed in crafting interactive user
                interfaces using ReactJS and harnessing the power of Node.js for
                efficient server-side development. Moreover, my proficiency
                extends to the realm of database management, as I excel in
                working with MySQL to ensure data integrity and accessibility.
                Additionally, I've ventured into the world of containerization
                with Kubernetes, adding another layer of versatility to my skill
                set. I am passionate about staying ahead of industry trends and
                pushing the boundaries of what's possible in the world of
                development. I invite you to explore the projects showcased
                here, each reflecting my commitment to innovation,
                functionality, and elegant design. Thank you for visiting and
                considering my portfolio.
              </span>
              <span>left</span>
            </div>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{
            minHeight: "45vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>
          <span>text</span>
          <div class="progress bg-white" style={{ width: "100%" }}>
            <div
              class="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50% Complete (info)
            </div>
          </div>

          {/* <div className="d-flex align-items-center justify-content-center">
            <div className="row">
              <span>
                <div class="progress m-0 p-0">
                  <div
                    class="progress-bar w-75"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </span>
            </div>
          </div> */}
          {/* <div className="" style={{ width: "100%" }}>
            <div className="row">
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mb-2 p-0">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>right</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

// <div className="row">
// <div className="col-md-3">
//   <div className="card">
//     <div className="card-body">
//       <button
//         type="button"
//         className="btn btn-outline-dark d-flex justify-content-center align-items-center"
//         style={style.headerIcons}
//       >
//         <FaBookReader />
//       </button>
//       <h6 className="d-flex justify-content-center m-0 p-0">
//         Problem Solving
//       </h6>
//       <span>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//         Temporibus illo sequi placeat excepturi quam porro in nesciunt
//         nam animi impedit dolorum neque quibusdam libero reiciendis
//         architecto, similique tempore necessitatibus officiis.
//       </span>
//     </div>
//   </div>
// </div>
// </div>

// <div className="p-1"></div>
