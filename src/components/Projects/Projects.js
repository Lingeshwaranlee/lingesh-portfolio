import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zen from "../../Assets/zen.png";
import zen1 from "../../Assets/zen1.png";
import zen2 from "../../Assets/zen2.png";
import zen3 from "../../Assets/zen3.png";

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
              imgPath={zen}
              isBlog={false}
              title="ZEN DASHBOARD📑"
              description="A website built for the students which highlights the data related to the course and keeps an track of the learner's performance and this website is build with react.js, Material-UI, Bootstrap, FontAwesome "
              link="https://glowing-creponne-2b1dc0.netlify.app"
              link1="https://github.com/Lingeshwaranlee/lingeshcapstone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zen1}
              isBlog={false}
              title="CARZEY🚗"
              description="A simple E-commerce Car website  build with react.js, Material-UI, Bootstrap, FontAwesome  to share the information for all top brands in a single website"
              link="https://gleaming-torrone-c015d5.netlify.app"
              link1="https://github.com/Lingeshwaranlee/zencarapp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zen2}
              isBlog={false}
              title="BUGGII🍔"
              description="A simple E-commerce burger  website  build with react.js, Material-UI, Bootstrap, FontAwesome   to order some spicy burger from buggi app A large hamburger called the Whopper is Buggii's signature product. "
              link="https://brilliant-croissant-0d068e.netlify.app/"
              link1="https://github.com/Lingeshwaranlee/projectagni2"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zen3}
              isBlog={false}
              title="ROLEX "
              description="A simple E-commerce burger  website  build with react.js, Material-UI, Bootstrap, FontAwesome to Buy some brand new Rolex watches."
              link="https://cosmic-seahorse-53531c.netlify.app/"
              link1="https://github.com/Lingeshwaranlee/rolex"
            />
          </Col>

       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
