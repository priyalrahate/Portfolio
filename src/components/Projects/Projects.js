import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import portfolio from "../../Assets/Projects/image_1.jpg";

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
              imgPath={chat}
              isBlog={false}
              title="Community-Page"
              description="Developed a MERN-based alumni community platform to connect graduates and students, fostering industry readiness, knowledge sharing, and tech learning. "
              ghLink="https://github.com/priyalrahate/Community-Page-"
              demoLink="http://localhost:5173/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/priyalrahate/Portfolio"
              demoLink="http://localhost:3000/project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
