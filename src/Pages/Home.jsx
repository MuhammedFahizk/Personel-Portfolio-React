import Services from "../Pages/Services.jsx";
import HeroPage from "./HeroPage.jsx";
import SampleProject from "../Component/SampleProject.jsx";
import Nav from "../Component/Nav.jsx";
import Contact from "../Component/Contact.jsx";
const Home = () => {

  return (
    <>
     <div  className="flex flex-col gap-5">
    <Nav></Nav>
     <HeroPage />
      <Services />
    <SampleProject/>
    <Contact />

     </div>
    </>
  );
};

export default Home;
