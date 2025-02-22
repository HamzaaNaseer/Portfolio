import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Cancer from "../../Assets/Projects/cancer.png";
import chatify from "../../Assets/cn.png";
import suicide from "../../Assets/Projects/suicide.png";
import AsaniPortal from "../../Assets/Projects/asani.jpg";
import { client } from "../../contentful";
function Projects() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    client
      .getEntries({ content_type: "projects" })
      .then((res) => {
        console.log("response is ", res.items);
        setProjects(res.items);
      })
      .catch((err) => console.log("error is ", err));
  }, []);
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
          {projects?.map((p) => {
            const fields = p?.fields;
            console.log("description is " , fields.description)
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={fields?.image || chatify}
                  isBlog={false}
                  title={fields.name}
                  description={fields?.features}
                  ghLink={fields.github}
                  demoLink={fields.demo}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
