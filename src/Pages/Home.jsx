import Services from "../Pages/Services.jsx";
import HeroPage from "./HeroPage.jsx";
import SampleProject from "../Component/SampleProject.jsx";
import Nav from "../Component/Nav.jsx";
import { FloatButton } from 'antd';
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
import Contact from "../Component/Contact.jsx";

const Home = () => {
  const contact = () => {
    window.scrollTo(0, document.body.scrollHeight);

  }
  return (
    <>
     <div  className="flex flex-col gap-5">
    <Nav></Nav>
     <HeroPage />
      <Services />
    <SampleProject/>
  
   <FloatButton
   onClick={contact}
    icon={<MdContactPage/>}
    />
<Contact/>

     </div>
    </>
  );
};

export default Home;
