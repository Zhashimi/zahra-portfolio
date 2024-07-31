import { ProfileType } from "../types";
import emailIcon from "/assets/email.png";
import linkedinIcon from "/assets/linkedin.png";
interface Props {
  profile: ProfileType;
}

function Contact({ profile }: Props) {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href={profile.linkedin} target="_blank">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
