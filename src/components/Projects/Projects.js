import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import jaisvik from "../../Assets/Projects/jaisvik.png";
import MultiMart from "../../Assets/Projects/MultiMart.png";
import payment from "../../Assets/Projects/payment.png";
import veda from "../../Assets/Projects/veda.png";

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
              imgPath={MultiMart}
              isBlog={false}
              title="Multi=Mart"
              description="Designed and developed a Multimart e-commerce platform using React.js, Material-UI, and Firebase. The website offers users a seamless shopping experience with features like real-time product updates, image galleries, and order placement. Supports a wide range of products across categories, allowing users to browse, add to cart, and securely place orders with ease."
              ghLink="https://github.com/naveenreddy018/Multimart_Edit"
              demoLink="https://multi-mart-38kz.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veda}
              isBlog={false}
              title="Bits-0f-C0de"
              description="VedaMin is an AI-powered personal assistant built with Next.js and Tailwind CSS. It allows users to interact with an intelligent ChatGPT interface that answers a wide range of queries in real-time. The system supports dynamic theming including dark mode and is designed for a smooth, fast user experience. Easy to customize and extend for various use cases like customer support, personal productivity, or educational help."
              ghLink="https://github.com/naveenreddy018/vedaminai"
              demoLink="https://veda-mind-ai-v16q.vercel.app/auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jaisvik}
              isBlog={false}
              title="Jaisvik Software Solutions"
              description="I developed the website for Jaisvik Software Solutions using React.js for the frontend and a microservices-based architecture for the backend. The platform is designed to be scalable, responsive, and user-friendly."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.jaisviksolutions.com/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={payment} // Replace with actual image path or import
    isBlog={false}
    title="Jaiscik Payment Gateway"
    description="Currently working on creating a full-fledged payment gateway named 'Jaisvik' with a complete website and microservices-based backend architecture. The goal is to build a strong, scalable alternative to existing gateways like Razorpay, Cashfree, and PayU, with support for seamless API integrations, secure transactions, and modern UI for merchants and users."
    ghLink="" // Replace with your actual GitHub link
    demoLink="https://your-demo-link.com" // Replace with your demo or preview link
  />
</Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
