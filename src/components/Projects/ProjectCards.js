

import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

  .project-card-view {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #0f1117;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    font-family: 'DM Sans', sans-serif;
  }

  .project-card-view:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,179,237,0.3);
    border-color: rgba(99,179,237,0.3);
  }

  .project-card-view .card-img-wrapper {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #1a1d2e;
    flex-shrink: 0;
  }

  .project-card-view .card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .project-card-view:hover .card-img-wrapper img {
    transform: scale(1.05);
  }

  .project-card-view .card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.4rem;
    gap: 0.75rem;
  }

  .project-card-view .card-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #e8eaf0;
    margin: 0;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .project-card-view .card-text {
    font-size: 0.875rem;
    line-height: 1.7;
    color: #9ba3b8;
    text-align: left;
    flex: 1;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .project-card-view .card-buttons {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .project-card-view .btn-card {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 1rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }

  .project-card-view .btn-github {
    background: rgba(255,255,255,0.08);
    color: #c9d1e0;
    border: 1px solid rgba(255,255,255,0.12);
  }

  .project-card-view .btn-github:hover {
    background: rgba(255,255,255,0.14);
    color: #fff;
    border-color: rgba(255,255,255,0.25);
  }

  .project-card-view .btn-demo {
    background: rgba(99,179,237,0.12);
    color: #63b3ed;
    border: 1px solid rgba(99,179,237,0.25);
  }

  .project-card-view .btn-demo:hover {
    background: rgba(99,179,237,0.22);
    color: #90cdf4;
    border-color: rgba(99,179,237,0.5);
  }
`;

function ProjectCards(props) {
  return (
    <>
      <style>{styles}</style>
      <div className="project-card-view">
        <div className="card-img-wrapper">
          <img src={props.imgPath} alt={props.title} />
        </div>
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p className="card-text">{props.description}</p>
          <div className="card-buttons">
            <a
              className="btn-card btn-github"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={14} />
              {props.isBlog ? "Blog" : "GitHub"}
            </a>
            {!props.isBlog && props.demoLink && (
              <a
                className="btn-card btn-demo"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite size={14} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;