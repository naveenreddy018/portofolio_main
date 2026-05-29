// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Naveen Reddy </span>
//             from <span className="purple"> Hyderabad , India.</span>
//             <br />
//             I am currently employed as a Full Stack developer at Jaisvik Software solutions.
//             <br />
//             I have completed Btech  at sri indu college of engineering and technology , Hyderabad , Telangana 
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Naveen Reddy</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { Gamepad2, BookOpen, MapPin } from "lucide-react";

const activities = [
  {
    icon: <Gamepad2 size={18} color="#7C3AED" />,  // vivid purple — gaming
    label: "Playing Games",
  },
  {
    icon: <BookOpen size={18} color="#0EA5E9" />,   // sky blue — writing/blogs
    label: "Writing Tech Blogs",
  },
  {
    icon: <MapPin size={18} color="#F43F5E" />,     // rose red — travel pin
    label: "Travelling",
  },
];

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen Reddy </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a Full Stack Developer at{" "}
            <span className="purple">Jaisvik Software Solutions.</span>
            <br />
            I have completed B.Tech at Sri Indu College of Engineering and
            Technology, Hyderabad, Telangana.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {activities.map(({ icon, label }) => (
              <li
                key={label}
                className="about-activity"
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}
              >
                {icon}
                {label}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naveen Reddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

