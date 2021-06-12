import "./Aboutme.css";
import profile from "../assets/profile.jpg";
import pdf from "./NiloofarArazkhani2021CV (2).pdf"
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
        <div>
          I am a PhD candidate at Sharif University. My strengths are in
          research and problem-solving. I specialise in Complex Networks
          and intrested in Machine Learning and Big Data Analytics. I have a good academic record from The University of Iran. I have
          experience in front end programming, My hobbies include Reading,
          country walks, photography and have a blog post.
        </div>
       <button><a href={pdf} download>DOWNLOAD CV</a></button> 
      </div>
    </div>
  );
}

export default Aboutme;
