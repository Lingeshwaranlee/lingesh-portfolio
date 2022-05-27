import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ZEN DASHBOARD📑"
              description="A website built for the students which highlights the data related to the course and keeps an track of the learner's performance and this website is build with react.js, Material-UI, Bootstrap, FontAwesome "
              link="https://github.com/Lingeshwaranlee/lingeshcapstone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CARZEY🚗"
              description="A simple E-commerce Car website  build with react.js, Material-UI, Bootstrap, FontAwesome  to share the information for all top brands in a single website"
              link="https://github.com/Lingeshwaranlee/zencarapp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BUGGII🍔"
              description="A simple E-commerce burger  website  build with react.js, Material-UI, Bootstrap, FontAwesome   to order some spicy burger from buggi app and this app is user friendly to every one  website"
              link="https://github.com/Lingeshwaranlee/projectagni2"
            />
          </Col>

       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
