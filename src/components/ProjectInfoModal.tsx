import { useEffect, useRef } from "react";
import { ProjectType } from "../types";

import Slider from "./Slider";
interface ModalProps {
  show: boolean;
  onClose: () => void;
  project: ProjectType;
}

const ProjectInfoModal: React.FC<ModalProps> = ({ show, onClose, project }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => onClose(), 300);
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <div className="modal-header">
          <h2 className="modal-subtitle">{project.title}</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {project.technologies && (
            <>
              {/* <h5>Tech Stack</h5> */}
              <div className="technologies-container">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <span className="technology-tag" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}
          <div className="text-container custom-margin">
            <p>{project.description}</p>
          </div>
          {project.features && (
            <div className="custom-margin">
              <h3 className="modal-subtitle">Features</h3>
              <ul>
                {project.features?.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.name}: </strong>
                    {feature.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.disclaimer && (
            <>
              {" "}
              <hr className="custom-margin" />
              <h3 className="modal-subtitle">Disclaimer</h3>
              <p>{project.disclaimer}</p>
            </>
          )}{" "}
          {project.assets && <Slider assets={project.assets} />}
          <div className="btn-container">
            {project.repository && (
              <button
                className="btn btn-color-2"
                onClick={() => (location.href = `${project.repository}`)}
              >
                GitHub
              </button>
            )}

            {project.demo && (
              <button
                className="btn btn-color-2"
                onClick={() => (location.href = `${project.demo}`)}
              >
                Link
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoModal;
