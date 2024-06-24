import Skill from "../Pages/Skill.jsx";
import Services from "../Pages/Services.jsx";
import HeroPage from "./HeroPage.jsx";
import SampleProject from "../Component/SampleProject.jsx";
const Home = () => {
  return (
    <>
      <HeroPage />
      <Services />
    <SampleProject/>
      <Skill />
    </>
  );
};

export default Home;
