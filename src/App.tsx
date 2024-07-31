// import DesktopNav from "./components/DesktopNav";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import info from "./data/zahra-info.json";
import { PortfolioType } from "./types";

function App() {
  const portfolio: PortfolioType = info;
  return (
    <>
      {/* <DesktopNav /> */}
      <Header fullName={portfolio.profile.fullName} />
      <Profile profile={portfolio.profile} />
      <About about={portfolio.about} />
      <Experience experiences={portfolio.experiences} />
      <Projects projects={portfolio.projects} />
      <Contact profile={portfolio.profile} />
      <Footer fullName={portfolio.profile.fullName} />
    </>
  );
}

export default App;
