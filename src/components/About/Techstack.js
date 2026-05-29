// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
   
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
   
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
  
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
 
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>

//     </Row>
//   );
// }

// export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiDocker,
  SiFastapi,
  SiOpenai,
} from "react-icons/si";
import { BrainCircuit } from "lucide-react";

const techs = [
  { icon: <DiJavascript1 />, color: "#F7DF1E", label: "JavaScript" },
  { icon: <SiTypescript />,  color: "#3178C6", label: "TypeScript" },
  { icon: <DiReact />,       color: "#61DAFB", label: "React" },
  { icon: <SiNextdotjs />,   color: "#ffffff", label: "Next.js" },
  { icon: <DiNodejs />,      color: "#539E43", label: "Node.js" },
  { icon: <DiPython />,      color: "#3776AB", label: "Python" },
  { icon: <SiFastapi />,     color: "#009688", label: "FastAPI" },
  { icon: <DiMongodb />,     color: "#47A248", label: "MongoDB" },
  { icon: <SiPostgresql />,  color: "#336791", label: "PostgreSQL" },
  { icon: <SiRedis />,       color: "#FF4438", label: "Redis" },
  { icon: <SiFirebase />,    color: "#FFCA28", label: "Firebase" },
  { icon: <SiDocker />,      color: "#2496ED", label: "Docker" },
  { icon: <DiGit />,         color: "#F05032", label: "Git" },
  { icon: <SiOpenai />,      color: "#ffffff", label: "OpenAI" },
  {
    icon: <BrainCircuit size="1em" />,
    color: "#1C3C3C",
    label: "LangChain",
  },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map(({ icon, color, label }) => (
        <Col
          key={label}
          xs={4}
          md={2}
          className="tech-icons"
          title={label}
          style={{ fontSize: "3em", color }}
        >
          {icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;