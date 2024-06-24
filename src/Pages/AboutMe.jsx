/* eslint-disable react/no-unescaped-entities */
import Nav from "../Component/Nav";
import Skill from "../Pages/Skill.jsx";

const AboutMe = () => {
  return (
    <><Nav />
    <div className=" my-10">

      <div className=" text-white ">
        <img className="absolute" src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&" alt="" />
        <div className="bg-[#00000051] relative md:w-full md:h-full    ">
          <div className="flex  gap-4  px-24 py-28">
            <img className="rounded-3xl shadow-md    md:h-[400px]" src='../images/HeroImage.jpg' alt="ses" />
            <div className="bg-[#f3f1f129] px-10 py-5 w-fit rounded-3xl  ">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p>Hello! My name is Muhammed Fahiz, and I'm a MERN Stack Developer from Calicut. I graduated with a Bachelor of Computer Applications (BCA) from the University of Calicut, where I built a strong foundation in computer science and software development.

Over the past 8 months, I've been passionately honing my skills in the MERN stack (MongoDB, Express.js, React, Node.js) under the guidance of an experienced mentor. This intensive practice has allowed me to develop a deep understanding of full-stack development and modern web technologies.

During this time, I've successfully completed over 30 mini projects, which have helped me master various aspects of the MERN stack. Additionally, I have built one major project that showcases my ability to design, develop, and deploy full-stack applications from scratch.


I believe in the power of technology to solve real-world problems and am eager to contribute to innovative projects. Feel free to reach out to me at [Your Email] or connect with me on [Your LinkedIn/Other Social Media]. I'm always open to new opportunities and collaborations.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    {/* <div className="bg-red-500 h-[500px]">

    </div> */}
      <Skill />
      </>);
};

export default AboutMe;
