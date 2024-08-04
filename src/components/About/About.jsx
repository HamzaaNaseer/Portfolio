import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiAntdesign,
  SiAzuredevops,
  SiElastic,
  SiExpress,
  SiMacos,
  SiPostman,
  SiRedis,
  SiTailwindcss,
  SiVisualstudiocode,
  SiWindows,
} from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack
          techStack={[
            { component: <TbBrandTypescript />, name: "TypeScript" },
            { component: <DiJavascript1 />, name: "JavaScript" },
            { component: <DiNodejs />, name: "Node.js" },
            { component: <DiReact />, name: "React" },
            { component: <TbBrandReactNative />, name: "React Native" },
            { component: <DiMongodb />, name: "MongoDB" },
            { component: <SiExpress />, name: "Express" },
            { component: <DiGit />, name: "Git" },
            { component: <SiRedis />, name: "Redis" },
            { component: <SiElastic />, name: "ElasticSearch" },
            { component: <SiAntdesign />, name: "AntDesign" },
            { component: <SiTailwindcss />, name: "TailwindCSS" },
            { component: <SiAzuredevops />, name: "Azure DevOps" },
          ]}
        />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Techstack
          techStack={[
            { component: <SiVisualstudiocode />, name: "VS Code" },
            { component: <SiPostman />, name: "Postman" },
            { component: <SiMacos />, name: "Mac OS" },
            { component: <SiWindows />, name: "Windows" },
          ]}
        />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
