// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/" className="d-flex">
//           <img src={logo} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Projects
//               </Nav.Link>
//             </Nav.Item>

//    <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Contact
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
//               </Nav.Link>
//             </Nav.Item>
// {/* 
//             <Nav.Item>
//               <Nav.Link
//                 href="https://soumyajitblogs.vercel.app/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <ImBlog style={{ marginBottom: "2px" }} /> Blogs
//               </Nav.Link>
//             </Nav.Item> */}

//             <Nav.Item className="fork-btn">
//               <Button
//                 href="https://github.com/naveenreddy018"
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;


import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  FolderKanban,
  FileText,
  Mail,
  GitFork,
  Star,
} from "lucide-react";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinks = [
    { to: "/", icon: <Home size={16} />, label: "Home" },
    { to: "/about", icon: <User size={16} />, label: "About" },
    { to: "/project", icon: <FolderKanban size={16} />, label: "Projects" },
    { to: "/contact", icon: <Mail size={16} />, label: "Contact" },
    { to: "/resume", icon: <FileText size={16} />, label: "Resume" },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        {/* ── Logo ── */}
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center"
          style={{ padding: 0 }}
        >
          <img
            src={logo}
            alt="brand"
            style={{
              height: "52px",
              width: "auto",
              maxWidth: "180px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Navbar.Brand>

        {/* ── Hamburger ── */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* ── Nav Links ── */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            {navLinks.map(({ to, icon, label }) => (
              <Nav.Item key={label}>
                <Nav.Link
                  as={Link}
                  to={to}
                  onClick={() => updateExpanded(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {icon}
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            {/* ── GitHub Button ── */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/naveenreddy018"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <GitFork size={18} />
                <Star size={16} />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


