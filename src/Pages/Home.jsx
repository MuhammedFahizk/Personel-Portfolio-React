import Services from "../Pages/Services.jsx";
import HeroPage from "./HeroPage.jsx";
import SampleProject from "../Component/SampleProject.jsx";
import Nav from "../Component/Nav.jsx";


const Home = () => {

  return (
    <>
     <div  className="flex flex-col gap-5">
    <Nav></Nav>
     <HeroPage />
      <Services />
    <SampleProject/>
  
   
     </div>
    </>
  );
};

export default Home;
