import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-page-bg">
      <div className="about-container">
        {/* our story + image section */}
        <div className="about-top">
          <div className="about-text">
            <h1>Our Story</h1>
            <p>
              Pen & Pixel began as a college passion project — a place where
              creativity, collaboration, and storytelling come together. What
              started as a simple blog idea quickly grew into a platform for
              people to share their work, build their portfolios, and connect
              with others in the digital space. We believe in the power of
              design and words, and we’re here to help creators bring their
              visions to life.
            </p>
          </div>
          <div className="about-image">
            <img src="/rock.webp" alt="About us" />
          </div>
        </div>

        {/* Meet the Team section */}
        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-divider"></div>
          <div className="team-grid">
            <div className="team-member">
              <img src="/peanut.jpg" alt="Member 1" />
              <h3>Aya Barrera</h3>
              <p>Web Dev Student</p>
              <p>
                <br />
                Loves React and building smooth user experiences.
              </p>
            </div>
            <div className="team-member">
              <img src="/marshall.jpg" alt="Member 2" />
              <h3>Marshall Brown</h3>
              <p>Web Dev Student</p>
              <p>
                <br />
                Passionate about graphic design, loves clean layouts and
                typography.
              </p>
            </div>
            <div className="team-member">
              <img src="/jahswill.webp" alt="Member 3" />
              <h3>Jahswill Enebeli</h3>
              <p>Web Dev Student</p>
              <p>
                <br />
                Focused on user-centered design and always exploring new
                front-end tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
