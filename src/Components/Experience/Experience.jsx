import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { MdLocationPin } from "react-icons/md";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const experienceContent = [
  {
    companyName: "Ahana Systems and Solutions",
    companyLink: "https://ahanait.com/",
    position: "Software Engineer",
    start: "Dec, 2021",
    end: "Present",
    location: "Bangalore, IN",
    logoImg: "https://ahanait.com/wp-content/uploads/2023/01/logo-new-1.svg",
    logoAlt: "Ahana Logo",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel reprehenderit ex id, adipisci nobis aperiam, voluptas quos nam distinctio voluptatem voluptatum consequatur facere ipsum sed molestias numquam dolorem nulla.",
    skills: [
      "ReactJS",
      "NodeJS",
      "ReactJS",
      "NodeJS",
      "ReactJS",
      "NodeJS",
      "ReactJS",
      "NodeJS",
    ],
  },
  {
    companyName: "Ahana Systems and Solutions",
    companyLink: "https://ahanait.com/",
    position: "Software Engineer",
    start: "Dec, 2021",
    end: "Present",
    location: "Bangalore, IN",
    logoImg: "https://ahanait.com/wp-content/uploads/2023/01/logo-new-1.svg",
    logoAlt: "Ahana Logo",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel reprehenderit ex id, adipisci nobis aperiam, voluptas quos nam distinctio voluptatem voluptatum consequatur facere ipsum sed molestias numquam dolorem nulla.",
    skills: [
      "ReactJS",
      "NodeJS",
      "ReactJS",
      "NodeJS",
      "ReactJS",
      "NodeJS",
      "ReactJS",
      "NodeJS",
    ],
  },
];

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClick = () => {};

  return (
    <>
      <h2 className="text-white">Professional Experience</h2>
      <div className="p-3"></div>
      <div>
        {experienceContent.map((expVal, i) => (
          <Accordion
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}
            className="mb-2"
            style={{ borderRadius: "5px" }}
            // style={{
            //   background:
            //     "linear-gradient(120deg, rgb(166 181 189) 32%, rgb(108 112 115) 100%)",
            // }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-9">
                    <span>
                      {expVal.position} @ {expVal.companyName}
                    </span>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                      <span>
                        {expVal.start} - {expVal.end}
                      </span>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Typography style={{ width: "100%" }}>
              <div className="row">
                <div className="col-md-1">
                  <img src={expVal.logoImg} alt={expVal.logoAlt} />
                </div>
                <div className="col-md-11">
                  <div className="row">
                    <span>{expVal.location}</span>
                    <span>{expVal.description}</span>
                    <span>
                      {expVal.skills.map((skillVal, j) => (
                        <span>{skillVal}</span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </Typography> */}
              <Typography style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-1 d-flex">
                    <img src={expVal.logoImg} alt={expVal.logoAlt} />
                  </div>
                  <div className="col-md-11">
                    <div className="row">
                      <span>
                        <span>
                          <MdLocationPin />
                        </span>
                        <span>{expVal.location}</span>
                      </span>
                      <span>{expVal.description}</span>
                      {/* <Stack direction="row" spacing={1}> */}
                      <span>
                        {expVal.skills.map((skillVal, j) => (
                          <span>
                            <Chip
                              label={skillVal}
                              variant="outlined"
                              onClick={handleClick}
                            />
                            {"    "}
                          </span>
                        ))}
                      </span>
                      {/* </Stack> */}
                      {/* <span>
                        <span>{skillVal} , </span>
                    </span> */}
                    </div>
                  </div>
                </div>
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              quidem, facere tempore qui dolor repudiandae et veritatis
              quibusdam nostrum facilis beatae temporibus inventore ea
              architecto. Vel omnis deleniti architecto delectus? */}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}

// const experienceContent = [
//   {
//     companyName: "Ahana Systems and Solutions",
//     companyLink: "https://ahanait.com/",
//     position: "Software Engineer",
//     duration: "Dec, 2021 - Present",
//     location: "Bangalore, IN",
//     logoImg: "https://ahanait.com/wp-content/uploads/2023/01/logo-new-1.svg",
//     logoAlt: "Ahana Logo",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel reprehenderit ex id, adipisci nobis aperiam, voluptas quos nam distinctio voluptatem voluptatum consequatur facere ipsum sed molestias numquam dolorem nulla.",
//     skills: [
//       "ReactJS",
//       "NodeJS",
//       "ReactJS",
//       "NodeJS",
//       "ReactJS",
//       "NodeJS",
//       "ReactJS",
//       "NodeJS",
//     ],
//   },
//   {
//     companyName: "Ahana Systems and Solutions",
//     companyLink: "https://ahanait.com/",
//     position: "Software Engineer",
//     duration: "Dec, 2021 - Present",
//     location: "Bangalore, IN",
//     logoImg: "https://ahanait.com/wp-content/uploads/2023/01/logo-new-1.svg",
//     logoAlt: "Ahana Logo",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel reprehenderit ex id, adipisci nobis aperiam, voluptas quos nam distinctio voluptatem voluptatum consequatur facere ipsum sed molestias numquam dolorem nulla.",
//     skills: [
//       "ReactJS",
//       "NodeJS",
//       "ReactJS",
//       "NodeJS",
//       "ReactJS",
//       "NodeJS",
//       "ReactJS",
//       "NodeJS",
//     ],
//   },
// ];
