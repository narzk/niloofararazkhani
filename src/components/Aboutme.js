import "./Aboutme.css";
import profile from "../assets/profile.jpg";
import pdf from "./NiloofarArazkhani2021CV (2).pdf";
// import cv from "NiloofarArazkhani2021CV.pdf"

function Aboutme() {
  return (
    <div className="container">
      <div className="photo">
        <div className="photoBorder"></div>
        <img src={profile} />
      </div>
      <div className="description">
        <div className="intro">
          Hello! <br />
          I'm Niloofar
        </div>
        <p>
          I am a Ph.D. candidate at Sharif University. My strengths are in
          research and problem-solving. I specialise in Complex Networks and
          interested in Machine Learning, Big Data Analytics, and Algorithms. I
          have a good academic record from The Universities of Iran. I have
          experience in front-end programming, My hobbies include Reading,
          country walks, photography and have a blog post. I would also like to use
          my computer knowledge in other fields of research.
        </p>
        <p>Thank you for your interest</p>
        <a href={pdf} download>
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}

export default Aboutme;
