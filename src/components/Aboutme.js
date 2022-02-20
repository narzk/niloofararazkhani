import Linkedin from "../icons/Linkedin";
import GoogleScholar from "../icons/GoogleScholar";
import GitHub from "../icons/GitHub";
import ChevronDown from "../icons/ChevronDown";

import "./Aboutme.css";
import profile from "../assets/profile.jpg";
import pdf from "./NiloofarArazkhani2021CV (2).pdf";
import pdfJob from "./NiloofarArazkhaniJobResume.pdf";
import { useEffect, useState } from "react";

function Aboutme() {
  const [isOpen, setIsOpen] = useState(false);
  const [offSet, setOffSet] = useState(0);
  useEffect(() => {
    const buttonSelector = document.getElementsByClassName("drop-down");
    setOffSet(buttonSelector.offsetTop);
  }, []);
  return (
    <div className="container">
      <div className="photo">
        <div className="photoBorder"></div>
        <img src={profile} />
      </div>
      <div className="description">
        <div className="intro">
          Hey Friends I'm Niloofar. A Front-End Developer.
        </div>
        <p></p>
        <div className="info">
          <div className="icon">
            <a href="https://www.linkedin.com/in/niloofar-arazkhani-1581025b/">
              <Linkedin />
            </a>
            <a href="https://scholar.google.com/citations?user=VOXDJ-4AAAAJ&hl=en">
              <GoogleScholar />
            </a>
            <a href="https://github.com/narzk">
              <GitHub />
            </a>
            <a href="https://github.com/narzk">
              <GitHub />
            </a>
          </div>
          {/* <div className="resume-container">
            <a href={pdf} download className="download">
              Academic CV
            </a>
            <a href={pdfJob} download className="download">
              Job CV
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
