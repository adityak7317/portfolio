import React from "react";

import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
// import { FaBeer } from 'react-icons/fa';

const contactLinks = [
  {
    name: "Mail",
    logo: <HiOutlineMail />,
    link: "mailto: who.adityak@gmail.com",
  },
  {
    name: "Linkedin",
    logo: <BiLogoLinkedin />,
    link: "https://www.linkedin.com/in/adityak7317/",
  },
  {
    name: "Github",
    logo: <BsGithub />,
    link: "https://github.com/adityak7317",
  },
  {
    name: "Whatsapp",
    logo: <BsWhatsapp />,
    link: "https://wa.me/917317420140",
  },
  {
    name: "Instagram",
    logo: <BsInstagram />,
    link: "https://www.instagram.com/adityak7317/",
  },

  {
    name: "Twitter",
    logo: <BsTwitter />,
    link: "https://twitter.com/adityak7317",
  },
];

export default function SideLinks() {
  return (
    <>
      <div className="row">
        {contactLinks.map((val, key) => (
          <a href={val.link}>
            <button
              type="button"
              className="btn btn-outline-dark rounded-circle border-0 btn-sm fs-5 pt-0 homeBTN"
            >
              {val.logo}
            </button>
          </a>
        ))}
      </div>
    </>
  );
}
