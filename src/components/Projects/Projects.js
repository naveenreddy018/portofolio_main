import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import jaisvik from "../../Assets/Projects/jaisvik.png";
import rag from "../../Assets/Projects/rag.png";
import payment from "../../Assets/Projects/payment.png";

import jaimax from "../../Assets/Projects/jaimax.png";

import karrivo from "../../Assets/Projects/karrivo.png"

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
              imgPath={jaimax}
              isBlog={false}
              title="Jaimax  Crypto  Platform"
              description="Jaimax is a full-stack crypto community platform where I worked on both frontend and backend development. I implemented secure user authentication, integrated payment gateway systems, and built real-time community chat functionality. I also contributed to the Jaimax Help & Support system and developed responsive UI components to ensure a smooth and user-friendly experience across the platform."
              ghLink="https://github.com/naveenreddy018/Multimart_Edit"
              demoLink="https://www.jaimax.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={karrivo}
              isBlog={false}
              title="Karrivo Mentor & Mentee"
              description="Karrivo is a mentor-mentee platform designed to connect users for learning and guidance through structured sessions and real-time interactions. I worked on both frontend and backend development, implemented secure authentication, and integrated real-time communication features. The platform also supports Zoom meeting integration for scheduled mentorship sessions, along with role-based access for mentors and mentees. Additionally, I contributed to UI development to ensure a smooth, responsive, and user-friendly experience across devices."
              ghLink="https://github.com/your-repo-link"
              demoLink="https://karrivo.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jaisvik}
              isBlog={false}
              title="Jaisvik Software Solutions"
              description="Jaisvik Software Solutions is a professional corporate website built to showcase services, company profile, and offerings in a clean and modern interface. I developed the frontend using React.js with a focus on responsive design, performance optimization, and smooth user experience. The backend is designed using a microservices-based architecture to ensure scalability, modularity, and easy maintenance. I also worked on structuring APIs and integrating services to support dynamic content and future expansion of the platform."
              demoLink="https://www.jaisviksolutions.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="RAG-Based Chatbot System"
              description="I built an efficient Retrieval-Augmented Generation (RAG) based chatbot system designed to provide accurate and context-aware responses. The system combines document retrieval with AI generation to improve response reliability and reduce hallucinations. I worked on designing the backend pipeline for embedding storage, query retrieval, and response generation, ensuring fast and scalable performance. The chatbot is optimized for real-time interactions and can be extended for use cases like customer support, internal knowledge assistants, and automation systems."
              ghLink=""
              demoLink="https://your-demo-link.com"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
