import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const SocialMEdiaLinks = () => {
  const iconVariants = {
    offscreen: {
      scale: 0.8,
      opacity: 0,
      y: 300,
    },
    hover: {
      scale: 1.5,
      color: "#999",
      y: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.6,
      },
    },
    onscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const linkVariants = {
    initial: {
      y: 0,
    },
    hover: {
      scale: 1.25,
      color: "#999",
      y: [0, -10, 0, -5, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.6,
      },
    },
  };

  return (
    <div className='flex gap-3 my-4 justify-center md:justify-start'>
      <motion.a
        href="https://github.com/MuhammedFahizk"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="offscreen"
        animate="onscreen"
        whileHover="hover"
      >
        <FaGithub className='text-2xl transition-transform duration-300 transform' />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/muhammed-fahiz-96726b287/"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="offscreen"
        animate="onscreen"
        whileHover="hover"
      >
        <IoLogoLinkedin className='text-2xl transition-transform duration-300 transform' />
      </motion.a>
      <motion.a
        href="mailto:fahizk100@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="offscreen"
        animate="onscreen"
        whileHover="hover"
      >
        <IoIosMail className='text-2xl transition-transform duration-300 transform' />
      </motion.a>
      <motion.a
        href="https://api.whatsapp.com/send?+919961130563"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="offscreen"
        animate="onscreen"
        whileHover="hover"
      >
        <IoLogoWhatsapp className='text-2xl transition-transform duration-300 transform' />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/fahiz_._k"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="offscreen"
        animate="onscreen"
        whileHover="hover"
      >
        <FaInstagram className='text-2xl transition-transform duration-300 transform' />
      </motion.a>
    </div>
  );
}

export default SocialMEdiaLinks;
