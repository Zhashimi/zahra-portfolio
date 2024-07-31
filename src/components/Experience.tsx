import { ExperienceType, SkillType } from "../types";
import arrowIcon from "/assets/arrow.png";
import checkmarkIcon from "/assets/checkmark.png";

interface Props {
  experiences: ExperienceType[];
}

function Experience({ experiences }: Props) {
  return (
    <>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div id="experience-containers">
            {experiences.map((item, index) => (
              <div className="details-container" key={index}>
                <h2 className="experience-sub-title">{item.categoryName}</h2>
                <div className="article-container">
                  {item.skills.map((skill: SkillType, skillIndex: number) => (
                    <article key={skillIndex}>
                      <img
                        src={checkmarkIcon}
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#projects")}
        />
      </section>
    </>
  );
}

export default Experience;
