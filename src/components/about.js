import Placeholder from "../assets/placeholder500x500.jpg";

import Technologies from './technologiesScroller.js';

function About() {
  return (
    <div className="about container">
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-info-wrapper">
        <div className="about-paragraphs">
          <p className="about-paragraph">
            Hi, I'm Kai Verschuren, a 16-year-old
            <strong> software development student</strong> at ROC Ter AA in the
            Netherlands.
          </p>
          <p className="about-paragraph">
            I'm in my first year, aiming to become a
            <strong> frontend/fullstack developer</strong>.
          </p>
          <p className="about-paragraph">
            I'm passionate about technology and eager to start my career in
            software development.
          </p>
          <hr className="about-hr"/>
          <Technologies />
        </div>
        <div className="about-picture">
          <img className="about-image" src={Placeholder} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
}

export default About;
