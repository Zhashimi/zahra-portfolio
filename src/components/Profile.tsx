import linkedinIcon from "/assets/linkedin.png";
import githubIcon from "/assets/github.png";
import { ProfileType } from "../types";

interface Props {
  profile: ProfileType;
}
function Profile({ profile }: Props) {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={`/assets/${profile.profilePicture}`}
            alt="B. Zahra Hashimi's profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{profile.fullName}</h1>
          <p className="section__text__p2">{profile.position}</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => (location.href = `/assets/${profile.resume}`)}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinIcon}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => (location.href = profile.linkedin)}
            />
            <img
              src={githubIcon}
              alt="My Github profile"
              className="icon"
              onClick={() => (location.href = profile.github)}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
