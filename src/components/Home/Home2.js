// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// // import myImg from "../../Assets/avatar.svg";
// // import Tilt from "react-parallax-tilt";
// // import {
// //   AiFillGithub,
// //   AiOutlineTwitter,
// //   AiFillInstagram,
// // } from "react-icons/ai";
// // import { FaLinkedinIn } from "react-icons/fa";

// // function Home2() {
// //   return (
// //     <Container fluid className="home-about-section" id="about">
// //       <Container>
// //         <Row>
// //           <Col md={8} className="home-about-description">
// //             <h1 style={{ fontSize: "2.6em" }}>
// //               LET ME <span className="purple"> INTRODUCE </span> MYSELF
// //             </h1>
// //             <p className="home-about-body">
// //               I fell in love with programming and I have at least learnt
// //               something, I think… 🤷‍♂️
// //               <br />
// //               <br />I am fluent in classics like
// //               <i>
// //                 <b className="purple"> Javascript, REACT js and node js , microservices. </b>
// //               </i>
// //               <br />
// //               <br />
// //               My field of Interest's are building new &nbsp;
// //               <i>
// //                 <b className="purple">Web Technologies and Products </b> and
// //                 also in areas related to{" "}
// //                 <b className="purple">
// //                   Blockchain.
// //                 </b>
// //               </i>
// //               <br />
// //               <br />
// //               Whenever possible, I also apply my passion for developing products
// //               with <b className="purple">Node.js</b> and
// //               <i>
// //                 <b className="purple">
// //                   {" "}
// //                   Modern Javascript Library and Frameworks
// //                 </b>
// //               </i>
// //               &nbsp; like
// //               <i>
// //                 <b className="purple"> React.js and Next.js</b>
// //               </i>
// //             </p>
// //           </Col>
// //           <Col md={4} className="myAvtar">
// //             <Tilt>
// //               <img src={myImg} className="img-fluid" alt="avatar" />
// //             </Tilt>
// //           </Col>
// //         </Row>
// //         <Row>
// //           <Col md={12} className="home-about-social">
// //             <h1>FIND ME ON</h1>
// //             <p>
// //               Feel free to <span className="purple">connect </span>with me
// //             </p>
// //             <ul className="home-about-social-links">
// //               <li className="social-icons">
// //                 <a
// //                   href="https://github.com/naveenreddy018"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="icon-colour  home-social-icons"
// //                 >
// //                   <AiFillGithub />
// //                 </a>
// //               </li>
// //               <li className="social-icons">
// //                 <a
// //                   href="https://x.com/NaveenR74800738"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="icon-colour  home-social-icons"
// //                 >
// //                   <AiOutlineTwitter />
// //                 </a>
// //               </li>
// //               <li className="social-icons">
// //                 <a
// //                   href="https://www.linkedin.com/in/kommidinaveen/"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="icon-colour  home-social-icons"
// //                 >
// //                   <FaLinkedinIn />
// //                 </a>
// //               </li>
// //               {/* <li className="social-icons">
// //                 <a
// //                   href="https://www.instagram.com/soumyajit4419"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="icon-colour home-social-icons"
// //                 >
// //                   <AiFillInstagram />
// //                 </a>
// //               </li> */}
// //             </ul>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </Container>
// //   );
// // }
// // export default Home2;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>

//         {/* ── Intro Row ── */}
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//               I fell in love with programming and have been building things
//               for the web ever since. 🚀
//               <br />
//               <br />
//               I'm a <b className="purple">Full-Stack Developer</b> with
//               hands-on experience in building scalable web applications,
//               RESTful APIs, and microservice architectures.
//               <br />
//               <br />
//               I'm fluent in{" "}
//               <i>
//                 <b className="purple">
//                   JavaScript, React.js, Node.js, and Microservices.
//                 </b>
//               </i>
//               <br />
//               <br />
//               My interests lie in{" "}
//               <i>
//                 <b className="purple">Web Technologies, Product Development</b>
//               </i>{" "}
//               and emerging areas like{" "}
//               <b className="purple">Blockchain & Decentralized Systems.</b>
//               <br />
//               <br />
//               I enjoy turning complex problems into clean, efficient solutions
//               using{" "}
//               <b className="purple">Node.js</b>,{" "}
//               <i>
//                 <b className="purple">React.js, Next.js</b>
//               </i>{" "}
//               and modern JS frameworks.
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg} className="img-fluid" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>

//         {/* ── Experience Row ── */}
//         <Row style={{ marginTop: "40px", marginBottom: "20px" }}>
//           <Col md={12}>
//             <h1 style={{ fontSize: "2.2em", textAlign: "center" }}>
//               MY <span className="purple"> EXPERIENCE </span>
//             </h1>
//           </Col>
//         </Row>

//         <Row style={{ marginBottom: "40px" }}>

//           {/* Card 1 */}
//           <Col md={4} style={{ marginBottom: "20px" }}>
//             <div style={cardStyle}>
//               <div style={badgeStyle}>Full-Time</div>
//               <h5 style={roleStyle}>Full-Stack Developer</h5>
//               <p style={companyStyle}>🏢 Freelance / Contract</p>
//               <p style={dateStyle}>2022 – Present</p>
//               <ul style={listStyle}>
//                 <li>Built and deployed full-stack web apps using React.js & Node.js</li>
//                 <li>Designed RESTful APIs and microservice architectures</li>
//                 <li>Integrated third-party APIs, payment gateways & auth systems</li>
//                 <li>Optimized app performance and database queries (MongoDB, PostgreSQL)</li>
//               </ul>
//               <div style={techWrapStyle}>
//                 {["React", "Node.js", "MongoDB", "Docker"].map(t => (
//                   <span key={t} style={techTagStyle}>{t}</span>
//                 ))}
//               </div>
//             </div>
//           </Col>

//           {/* Card 2 */}
//           <Col md={4} style={{ marginBottom: "20px" }}>
//             <div style={cardStyle}>
//               <div style={badgeStyle}>Project</div>
//               <h5 style={roleStyle}>Microservices Architect</h5>
//               <p style={companyStyle}>🏢 Personal & Client Projects</p>
//               <p style={dateStyle}>2023 – Present</p>
//               <ul style={listStyle}>
//                 <li>Architected event-driven microservices using Node.js & RabbitMQ</li>
//                 <li>Containerized services with Docker & orchestrated via Docker Compose</li>
//                 <li>Implemented JWT-based auth across distributed services</li>
//                 <li>Built real-time features using WebSockets and Socket.io</li>
//               </ul>
//               <div style={techWrapStyle}>
//                 {["Microservices", "RabbitMQ", "Docker", "WebSockets"].map(t => (
//                   <span key={t} style={techTagStyle}>{t}</span>
//                 ))}
//               </div>
//             </div>
//           </Col>

//           {/* Card 3 */}
//           <Col md={4} style={{ marginBottom: "20px" }}>
//             <div style={cardStyle}>
//               <div style={badgeStyle}>Exploration</div>
//               <h5 style={roleStyle}>Blockchain Developer</h5>
//               <p style={companyStyle}>🏢 Self-Initiated Projects</p>
//               <p style={dateStyle}>2023 – Present</p>
//               <ul style={listStyle}>
//                 <li>Developed and deployed smart contracts using Solidity</li>
//                 <li>Built DeFi & NFT interfaces with ethers.js & Web3.js</li>
//                 <li>Integrated MetaMask wallet connections in React apps</li>
//                 <li>Explored Layer 2 solutions and decentralized storage (IPFS)</li>
//               </ul>
//               <div style={techWrapStyle}>
//                 {["Solidity", "Ethers.js", "Web3.js", "IPFS"].map(t => (
//                   <span key={t} style={techTagStyle}>{t}</span>
//                 ))}
//               </div>
//             </div>
//           </Col>
//         </Row>

//         {/* ── Skills Row ── */}
//         <Row style={{ marginBottom: "50px" }}>
//           <Col md={12} style={{ textAlign: "center" }}>
//             <h1 style={{ fontSize: "2.2em" }}>
//               WHAT I <span className="purple"> WORK WITH </span>
//             </h1>
//             <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
//               {[
//                 "JavaScript", "TypeScript", "React.js", "Next.js",
//                 "Node.js", "Express.js", "MongoDB", "PostgreSQL",
//                 "Docker", "REST APIs", "GraphQL", "Solidity",
//                 "Git", "WebSockets", "RabbitMQ", "Redis"
//               ].map(skill => (
//                 <span key={skill} style={skillBadgeStyle}>{skill}</span>
//               ))}
//             </div>
//           </Col>
//         </Row>

//         {/* ── Social Row ── */}
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/naveenreddy018"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://x.com/NaveenR74800738"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/kommidinaveen/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>

//       </Container>
//     </Container>
//   );
// }

// // ── Inline styles ──
// const cardStyle = {
//   background: "rgba(255,255,255,0.03)",
//   border: "1px solid rgba(200,137,230,0.25)",
//   borderRadius: "14px",
//   padding: "1.5rem",
//   height: "100%",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   position: "relative",
// };

// const badgeStyle = {
//   display: "inline-block",
//   background: "rgba(200,137,230,0.15)",
//   color: "#c889e6",
//   fontSize: "0.7rem",
//   fontWeight: "600",
//   padding: "3px 10px",
//   borderRadius: "20px",
//   border: "1px solid rgba(200,137,230,0.3)",
//   marginBottom: "10px",
//   textTransform: "uppercase",
//   letterSpacing: "0.05em",
// };

// const roleStyle = {
//   color: "#fff",
//   fontWeight: "700",
//   fontSize: "1.1rem",
//   marginBottom: "4px",
// };

// const companyStyle = {
//   color: "#aaa",
//   fontSize: "0.85rem",
//   marginBottom: "2px",
// };

// const dateStyle = {
//   color: "#c889e6",
//   fontSize: "0.8rem",
//   marginBottom: "12px",
// };

// const listStyle = {
//   color: "#ccc",
//   fontSize: "0.82rem",
//   lineHeight: "1.8",
//   paddingLeft: "1.2rem",
//   marginBottom: "14px",
// };

// const techWrapStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "6px",
// };

// const techTagStyle = {
//   background: "rgba(200,137,230,0.1)",
//   color: "#c889e6",
//   fontSize: "0.72rem",
//   padding: "2px 8px",
//   borderRadius: "6px",
//   border: "1px solid rgba(200,137,230,0.2)",
// };

// const skillBadgeStyle = {
//   background: "rgba(255,255,255,0.05)",
//   color: "#ddd",
//   border: "1px solid rgba(200,137,230,0.2)",
//   borderRadius: "8px",
//   padding: "6px 14px",
//   fontSize: "0.82rem",
//   fontWeight: "500",
// };

// export default Home2;



// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>

//         {/* ── Intro Row ── */}
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//               I fell in love with programming and have been building things
//               for the web ever since. 
//               <br />
//               <br />
//               I'm a <b className="purple">Full-Stack & Python Developer</b> with
//               <b className="purple"> 1.5 years</b> of hands-on experience building
//               scalable web applications, RESTful APIs, and AI-powered products.
//               <br />
//               <br />
//               I'm fluent in{" "}
//               <i>
//                 <b className="purple">
//                   JavaScript, React.js, Node.js, Python, and Microservices.
//                 </b>
//               </i>
//               <br />
//               <br />
//               My field of interest lies in{" "}
//               <i>
//                 <b className="purple">Web Technologies, AI/ML Product Development</b>
//               </i>{" "}
//               and building smart, real-world applications powered by{" "}
//               <b className="purple">Large Language Models & Automation.</b>
//               <br />
//               <br />
//               I enjoy turning complex problems into clean, efficient solutions
//               using <b className="purple">Node.js</b>,{" "}
//               <b className="purple">Python (FastAPI / Flask)</b> and modern
//               frameworks like{" "}
//               <i>
//                 <b className="purple">React.js and Next.js.</b>
//               </i>
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg} className="img-fluid" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>

//         {/* ── Experience Row ── */}
//         <Row style={{ marginTop: "40px", marginBottom: "20px" }}>
//           <Col md={12}>
//             <h1 style={{ fontSize: "2.2em", textAlign: "center" }}>
//               MY <span className="purple"> EXPERIENCE </span>
//             </h1>
//           </Col>
//         </Row>

//         <Row style={{ marginBottom: "40px", justifyContent: "center" }}>
//           <Col md={10}>
//             <div style={cardStyle}>
//               <div style={headerRowStyle}>
//                 <div>
//                   <div style={badgeStyle}>1.5 Years · Full-Time</div>
//                   <h5 style={roleStyle}>Full-Stack & Python Developer</h5>
//                   <p style={companyStyle}>🏢 Freelance / Contract Projects</p>
//                   <p style={dateStyle}>Jan 2023 – Present</p>
//                 </div>
//               </div>

//               <Row style={{ marginTop: "16px" }}>
//                 {/* Col 1 */}
//                 <Col md={4} style={{ marginBottom: "12px" }}>
//                   <p style={sectionLabelStyle}>⚡ Full-Stack Development</p>
//                   <ul style={listStyle}>
//                     <li>Built end-to-end web apps with React.js, Next.js & Node.js</li>
//                     <li>Designed REST APIs and microservice architectures</li>
//                     <li>Integrated auth, payments & third-party APIs</li>
//                     <li>Worked with MongoDB, PostgreSQL & Redis</li>
//                   </ul>
//                 </Col>

//                 {/* Col 2 */}
//                 <Col md={4} style={{ marginBottom: "12px" }}>
//                   <p style={sectionLabelStyle}>🐍 Python Development</p>
//                   <ul style={listStyle}>
//                     <li>Built backend services using FastAPI & Flask</li>
//                     <li>Automated workflows and data pipelines with Python</li>
//                     <li>Developed web scrapers and data processing tools</li>
//                     <li>Integrated Python services with Node.js via REST</li>
//                   </ul>
//                 </Col>

//                 {/* Col 3 */}
//                 <Col md={4} style={{ marginBottom: "12px" }}>
//                   <p style={sectionLabelStyle}>🤖 AI Projects</p>
//                   <ul style={listStyle}>
//                     <li>Built AI-powered chatbots using OpenAI & LangChain</li>
//                     <li>Developed voice bots with STT/TTS & WebSocket streaming</li>
//                     <li>Created RAG pipelines with vector databases</li>
//                     <li>Integrated LLMs into full-stack products end-to-end</li>
//                   </ul>
//                 </Col>
//               </Row>

//               <div style={techWrapStyle}>
//                 {[
//                   "React.js", "Next.js", "Node.js", "Python",
//                   "FastAPI", "MongoDB", "PostgreSQL", "LangChain",
//                   "OpenAI API", "WebSockets", "Docker", "Redis"
//                 ].map(t => (
//                   <span key={t} style={techTagStyle}>{t}</span>
//                 ))}
//               </div>
//             </div>
//           </Col>
//         </Row>

//         {/* ── Skills Row ── */}
//         <Row style={{ marginBottom: "50px" }}>
//           <Col md={12} style={{ textAlign: "center" }}>
//             <h1 style={{ fontSize: "2.2em" }}>
//               WHAT I <span className="purple"> WORK WITH </span>
//             </h1>
//             <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
//               {[
//                 "JavaScript", "TypeScript", "Python", "React.js", "Next.js",
//                 "Node.js", "FastAPI", "Flask", "MongoDB", "PostgreSQL",
//                 "Docker", "LangChain", "OpenAI", "WebSockets", "Redis", "Git"
//               ].map(skill => (
//                 <span key={skill} style={skillBadgeStyle}>{skill}</span>
//               ))}
//             </div>
//           </Col>
//         </Row>

//         {/* ── Social Row ── */}
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a href="https://github.com/naveenreddy018" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a href="https://x.com/NaveenR74800738" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a href="https://www.linkedin.com/in/kommidinaveen/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>

//       </Container>
//     </Container>
//   );
// }

// // ── Styles ──
// const cardStyle = {
//   background: "rgba(255,255,255,0.03)",
//   border: "1px solid rgba(200,137,230,0.25)",
//   borderRadius: "16px",
//   padding: "2rem",
// };

// const headerRowStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   flexWrap: "wrap",
//   gap: "10px",
// };

// const badgeStyle = {
//   display: "inline-block",
//   background: "rgba(200,137,230,0.15)",
//   color: "#c889e6",
//   fontSize: "0.7rem",
//   fontWeight: "600",
//   padding: "3px 10px",
//   borderRadius: "20px",
//   border: "1px solid rgba(200,137,230,0.3)",
//   marginBottom: "8px",
//   textTransform: "uppercase",
//   letterSpacing: "0.05em",
// };

// const roleStyle = {
//   color: "#fff",
//   fontWeight: "700",
//   fontSize: "1.3rem",
//   marginBottom: "4px",
// };

// const companyStyle = {
//   color: "#aaa",
//   fontSize: "0.85rem",
//   marginBottom: "2px",
// };

// const dateStyle = {
//   color: "#c889e6",
//   fontSize: "0.82rem",
//   marginBottom: "0",
// };

// const sectionLabelStyle = {
//   color: "#c889e6",
//   fontWeight: "600",
//   fontSize: "0.85rem",
//   marginBottom: "8px",
// };

// const listStyle = {
//   color: "#ccc",
//   fontSize: "0.82rem",
//   lineHeight: "1.8",
//   paddingLeft: "1.1rem",
//   marginBottom: "0",
// };

// const techWrapStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "8px",
//   marginTop: "20px",
//   paddingTop: "16px",
//   borderTop: "1px solid rgba(200,137,230,0.15)",
// };

// const techTagStyle = {
//   background: "rgba(200,137,230,0.1)",
//   color: "#c889e6",
//   fontSize: "0.72rem",
//   padding: "3px 10px",
//   borderRadius: "6px",
//   border: "1px solid rgba(200,137,230,0.2)",
// };

// const skillBadgeStyle = {
//   background: "rgba(255,255,255,0.05)",
//   color: "#ddd",
//   border: "1px solid rgba(200,137,230,0.2)",
//   borderRadius: "8px",
//   padding: "6px 14px",
//   fontSize: "0.82rem",
//   fontWeight: "500",
// };

// export default Home2;








import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Github, Twitter, Linkedin } from "lucide-react"; // ← lucide-react

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

        {/* ── Intro Row ── */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have been building things
              for the web ever since.
              <br /><br />
              I'm a <b className="purple">Full-Stack & Python Developer</b> with
              <b className="purple"> 1.5 years</b> of hands-on experience building
              scalable web applications, RESTful APIs, and AI-powered products.
              <br /><br />
              I'm fluent in{" "}
              <i>
                <b className="purple">
                  JavaScript, React.js, Node.js, Python, and Microservices.
                </b>
              </i>
              <br /><br />
              My field of interest lies in{" "}
              <i>
                <b className="purple">Web Technologies, AI/ML Product Development</b>
              </i>{" "}
              and building smart, real-world applications powered by{" "}
              <b className="purple">Large Language Models & Automation.</b>
              <br /><br />
              I enjoy turning complex problems into clean, efficient solutions
              using <b className="purple">Node.js</b>,{" "}
              <b className="purple">Python (FastAPI / Flask)</b> and modern
              frameworks like{" "}
              <i>
                <b className="purple">React.js and Next.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* ── Experience Row ── */}
        <Row style={{ marginTop: "40px", marginBottom: "20px" }}>
          <Col md={12}>
            <h1 style={{ fontSize: "2.2em", textAlign: "center" }}>
              MY <span className="purple"> EXPERIENCE </span>
            </h1>
          </Col>
        </Row>

        <Row style={{ marginBottom: "40px", justifyContent: "center" }}>
          <Col md={10}>
            <div style={cardStyle}>
              <div style={headerRowStyle}>
                <div>
                  <div style={badgeStyle}>1.5 Years · Full-Time</div>
                  <h5 style={roleStyle}>Full-Stack & Python Developer</h5>
                  <p style={companyStyle}>🏢 Freelance / Contract Projects</p>
                  <p style={dateStyle}>Jan 2023 – Present</p>
                </div>
              </div>

              <Row style={{ marginTop: "16px" }}>
                <Col md={4} style={{ marginBottom: "12px" }}>
                  <p style={sectionLabelStyle}>⚡ Full-Stack Development</p>
                  <ul style={listStyle}>
                    <li>Built end-to-end web apps with React.js, Next.js & Node.js</li>
                    <li>Designed REST APIs and microservice architectures</li>
                    <li>Integrated auth, payments & third-party APIs</li>
                    <li>Worked with MongoDB, PostgreSQL & Redis</li>
                  </ul>
                </Col>
                <Col md={4} style={{ marginBottom: "12px" }}>
                  <p style={sectionLabelStyle}>🐍 Python Development</p>
                  <ul style={listStyle}>
                    <li>Built backend services using FastAPI & Flask</li>
                    <li>Automated workflows and data pipelines with Python</li>
                    <li>Developed web scrapers and data processing tools</li>
                    <li>Integrated Python services with Node.js via REST</li>
                  </ul>
                </Col>
                <Col md={4} style={{ marginBottom: "12px" }}>
                  <p style={sectionLabelStyle}>🤖 AI Projects</p>
                  <ul style={listStyle}>
                    <li>Built AI-powered chatbots using OpenAI & LangChain</li>
                    <li>Developed voice bots with STT/TTS & WebSocket streaming</li>
                    <li>Created RAG pipelines with vector databases</li>
                    <li>Integrated LLMs into full-stack products end-to-end</li>
                  </ul>
                </Col>
              </Row>

              <div style={techWrapStyle}>
                {[
                  "React.js", "Next.js", "Node.js", "Python",
                  "FastAPI", "MongoDB", "PostgreSQL", "LangChain",
                  "OpenAI API", "WebSockets", "Docker", "Redis"
                ].map(t => (
                  <span key={t} style={techTagStyle}>{t}</span>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* ── Skills Row ── */}
        <Row style={{ marginBottom: "50px" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.2em" }}>
              WHAT I <span className="purple"> WORK WITH </span>
            </h1>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              {[
                "JavaScript", "TypeScript", "Python", "React.js", "Next.js",
                "Node.js", "FastAPI", "Flask", "MongoDB", "PostgreSQL",
                "Docker", "LangChain", "OpenAI", "WebSockets", "Redis", "Git"
              ].map(skill => (
                <span key={skill} style={skillBadgeStyle}>{skill}</span>
              ))}
            </div>
          </Col>
        </Row>

        {/* ── Social Row ── */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/naveenreddy018" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <Github size={20} /> {/* ← replaces AiFillGithub */}
                </a>
              </li>
              <li className="social-icons">
                <a href="https://x.com/NaveenR74800738" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <Twitter size={20} /> {/* ← replaces AiOutlineTwitter */}
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/kommidinaveen/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <Linkedin size={20} /> {/* ← replaces FaLinkedinIn */}
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

// ── Styles (unchanged) ──
const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(200,137,230,0.25)",
  borderRadius: "16px",
  padding: "2rem",
};
const headerRowStyle = { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" };
const badgeStyle = { display: "inline-block", background: "rgba(200,137,230,0.15)", color: "#c889e6", fontSize: "0.7rem", fontWeight: "600", padding: "3px 10px", borderRadius: "20px", border: "1px solid rgba(200,137,230,0.3)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" };
const roleStyle = { color: "#fff", fontWeight: "700", fontSize: "1.3rem", marginBottom: "4px" };
const companyStyle = { color: "#aaa", fontSize: "0.85rem", marginBottom: "2px" };
const dateStyle = { color: "#c889e6", fontSize: "0.82rem", marginBottom: "0" };
const sectionLabelStyle = { color: "#c889e6", fontWeight: "600", fontSize: "0.85rem", marginBottom: "8px" };
const listStyle = { color: "#ccc", fontSize: "0.82rem", lineHeight: "1.8", paddingLeft: "1.1rem", marginBottom: "0" };
const techWrapStyle = { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(200,137,230,0.15)" };
const techTagStyle = { background: "rgba(200,137,230,0.1)", color: "#c889e6", fontSize: "0.72rem", padding: "3px 10px", borderRadius: "6px", border: "1px solid rgba(200,137,230,0.2)" };
const skillBadgeStyle = { background: "rgba(255,255,255,0.05)", color: "#ddd", border: "1px solid rgba(200,137,230,0.2)", borderRadius: "8px", padding: "6px 14px", fontSize: "0.82rem", fontWeight: "500" };

export default Home2;









