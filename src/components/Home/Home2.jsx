import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm a passionate MERN stack developer with over 3 years of
              proven experience. I thrive on building efficient, scalable web
              applications and delivering top-notch solutions to my clients.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  TypeScript, JavaScript, Node.js, Express.js, MongoDB,
                  React.js, and Next.js
                </b>
              </i>
              , which form the core of my development toolkit.
              <br />
              <br />I have extensive experience working with
              <i>
                <b className="purple"> sockets </b>
              </i>
              &nbsp;to enable seamless, real-time interactions within
              applications.
              <br />
              <br />
              Additionally, I can develop cross-platform mobile apps using
              <i>
                <b className="purple"> React Native </b>
              </i>
              , extending my skills to mobile development.
              <br />
              <br />
              In addition to my development work, I am also an active
              <i>
                <b className="purple"> Freelancer </b>
              </i>
              , collaborating with clients to bring their visions to life. My
              passion for coding drives me to continuously improve and stay
              updated with the latest industry trends.
              <br />
              <br />
              Whether it's creating dynamic web applications or solving complex
              problems, I am always up for the challenge.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HamzaaNaseer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-naseer-mernstackdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:hamzanaseer.dev@gmail.com?subject=Your%20Subject&body=Your%20Message"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
