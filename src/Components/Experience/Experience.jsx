import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-9">
                <span>software Engineer @ ahana systems and solutions</span>
              </div>
              <div className="col-md-3">
                <div className="d-flex justify-content-end">
                  <span>dec,2021 -present</span>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
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
