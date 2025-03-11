import { useState } from "react";
import { ProjectType } from "../types";
import arrowIcon from "/assets/arrow.png";
import ProjectInfoModal from "./ProjectInfoModal";

interface Props {
  projects: ProjectType[];
}
function Projects({ projects }: Props) {
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);
  const handleClose = () => {
    setActiveProject(null);
  };
  return (
    <>
      <section id="projects">
        ء<p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="project-containers">
            {projects.map((item: ProjectType, index: number) => (
              <div className="details-container color-container" key={index}>
                <h1 className="experience-sub-title project-title">
                  {item.title}
                </h1>
                {item.image && (
                  <div>
                    <img
                      src={`/assets/${item.image}`}
                      alt={item.title}
                      className="project-img"
                    />
                  </div>
                )}
                <div
                  className="text-container"
                  style={{ paddingTop: "15px", paddingBottom: "15px" }}
                >
                  <p>{item.shortDescription}</p>
                </div>

                <div
                  style={{
                    marginTop: "60px",
                  }}
                >
                  <button
                    className="btn btn-color-2 project-btn"
                    style={{ margin: "20px" }}
                    onClick={() => setActiveProject(item)}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#contact")}
        />
      </section>
      {activeProject && (
        <ProjectInfoModal
          show={!!activeProject}
          onClose={() => handleClose()}
          project={activeProject}
        />
      )}
    </>
  );
}

export default Projects;
