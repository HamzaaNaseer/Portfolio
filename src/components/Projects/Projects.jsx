import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Cancer from "../../Assets/Projects/cancer.png";
import chatify from "../../Assets/cn.png";
import suicide from "../../Assets/Projects/suicide.png";
import AsaniPortal from "../../Assets/Projects/asani.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={AsaniPortal}
              isBlog={false}
              title="Asani Portal"
              description={`The Primary Objective of the ASANI Portal is to provide citizens of Society an opportunity to seamlessly communicate with all administrative entities and have their issues resolved with priority, in accordance with the vision of the administration 

" Make the lifestyle of the citizens of society easier "`}
              ghLink="https://github.com/HamzaaNaseer/asani-portal-dashboard"
              demoLink="https://www.youtube.com/watch?v=uX17Sc1OwE0"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Connecting Nature"
              description="Create Posts & Spotlight: Share updates, photos, and videos. Highlight standout content for more visibility.
Interactive Engagement: Like, comment, and share posts. Follow and unfollow users to customize your feed.
Messaging: Chat with friends, send images, videos, voice notes, and more."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://play.google.com/store/apps/details?id=com.notify.connectingnatureapp&hl=en_US"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cancer}
              isBlog={false}
              title="Cancer Clarity"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/HamzaaNaseer/cancer-clarity-app"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
