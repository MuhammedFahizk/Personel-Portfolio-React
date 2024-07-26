/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Nav from "../Component/Nav";
import Skill from "../Pages/Skill.jsx";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Education from "../Component/Education.jsx";
import Contact from "../Component/Contact.jsx";

const AboutMe = () => {
  useEffect(() => {
    // Simulate fetching data from an API or data file
  }, []);

  const icons = [
    {
      icon: FaGithub,
      link: "https://github.com/MuhammedFahizk",
      color: '#FFFFFF'
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/muhammed-fahiz-96726b287/",
      color: '#0072b1'
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/",
      color: '#e1306c'
    },
    {
      icon: FaWhatsapp,
      link: "https://api.whatsapp.com/send?+919961130563",
      color: '#34af23'
    },
  ];

  const imageVariants = {
    offscreen: {
      scale: 0.8,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const containerVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    offscreen: {
      opacity: 0,
      x: -50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
      },
    },
  };

  const iconVariants = {
    offscreen: {
      scale: 0.8,
      opacity: 0,
      y: 300,
    },
    onscreen: {
      y: -10,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <>
      <Nav />
      <motion.div
        className="my-10"
        initial="offscreen"
        animate="onscreen"
        variants={containerVariants}
      >
        <motion.div className="text-white relative" variants={containerVariants}>
          <motion.img
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&"
            alt=""
          />
          <motion.div className="bg-black bg-opacity-50 relative w-full h-full" variants={contentVariants}>
            <div className="flex flex-col md:flex-row p-4 md:px-20 md:py-10 gap-4 md:gap-8">
              <div className="rounded-3xl md:items-center shadow-md md:flex hidden sm:block w-full md:w-1/5 lg:w-1/4 h-[410px] object-cover">
                <motion.img
                  variants={imageVariants}
                  className="relative rounded-3xl shadow-md"
                  src="../images/HeroImage.jpg"
                  alt="Profile"
                />
                <div className="absolute start-[300px] rounded p-1 flex flex-col gap-3 bg-[#080808bb]">
                  {icons.map((icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      whileTap={{
                        scale: 0.8,
                        rotate: -12,
                        borderRadius: "100%",
                      }}
                    >
                      <a
                        href={icon.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <icon.icon
                          size={30}
                          style={{ color: icon.color }}
                          className={`text-['#000] hover:text-[${icon.color}] transition duration-300 ease-in-out`}
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="bg-gray-800 bg-opacity-80 p-6 rounded-3xl h-fit w-full md:w-1/2 lg:w-2/3"
                variants={contentVariants}
              >
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello!
                  My name is Muhammed Fahiz k, and I'm a MERN Stack Developer
                  from Calicut. I graduated with a BCA from the University of
                  Calicut, where I built a strong foundation in computer science
                  and software development.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Over
                  the past 8 Months, I've been passionately honing my skills in
                  the MERN stack (MongoDB, Express.js, React, Node.js) under the
                  guidance of an experienced mentor. This intensive practice has
                  allowed me to develop a deep understanding of full-stack
                  development and modern web technologies.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; During
                  this time, I've successfully completed over 30 mini projects,
                  which have helped me master various aspects of the MERN stack.
                  Additionally, I have built One that showcases my ability to
                  design, develop, and deploy full-stack applications from
                  scratch.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I
                  believe in the power of technology to solve real-world
                  problems and am eager to contribute to innovative projects.
                  Feel free to reach out to me at Fahizk100@gmail.com or connect
                  with me on{" "}
                  <a
                    href="https://www.linkedin.com/in/muhammed-fahiz-96726b287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    LinkedIn
                  </a>
                  . I'm always open to new opportunities and collaborations.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className="flex justify-start">
          <Education />
        </div>
      </motion.div>
      <Skill />
      <Contact />
    </>
  );
};

export default AboutMe;
