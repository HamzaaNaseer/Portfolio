import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiExpress,
  SiElastic,
  SiAntdesign,
  SiTailwindcss,
  SiAzuredevops,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";

const renderTooltip = (name) => (
  <Tooltip id={`tooltip-${name}`}>{name}</Tooltip>
);

const TechIconsRow = (props) => {
  const { techStack } = props;
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack?.map((icon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger placement="top" overlay={renderTooltip(icon.name)}>
            <div>{icon.component}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
};

export default TechIconsRow;
