import experienceIcon from "/assets/experience.png";
import educationIcon from "/assets/education.png";
import arrowIcon from "/assets/arrow.png";
import { AboutType } from "../types";

interface Props {
  about: AboutType;
}

function About({ about }: Props) {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          {about.aboutPic && (
            <div className="section__pic-container">
              {" "}
              <img
                src={`/assets/${about.aboutPic}`}
                alt="Profile picture"
                className="about-pic"
              />{" "}
            </div>
          )}

          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experienceIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  {about.experienceSummaryLines.map(
                    (item: string, index: number) => (
                      <span key={index}>
                        {item}
                        <br />
                      </span>
                    )
                  )}
                </p>
              </div>
              <div className="details-container">
                <img
                  src={educationIcon}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  {about.educationSummaryLines.map(
                    (item: string, index: number) => (
                      <span key={index}>
                        {item}
                        <br />
                      </span>
                    )
                  )}
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>{about.bio}</p>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#experience")}
        />
      </section>
    </>
  );
}

export default About;
