import { FaNode, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../Component/Button';
import CommonBt from '../Component/CommonBt';
import Nav from '../Component/Nav';
import SocialMEdiaLinks from '../Component/SocialMEdiaLinks';
import { SiExpress } from 'react-icons/si';

const HeroPage = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 10,
      x: 10,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

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

  const textVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <div className='dark:text-white text-white'>
      <div className='md:px-20 md:flex my-20 md-my-0 items-center h-[500px] text-black dark:text-white'>
        <div className='grid gap-2 px-5 md:w-1/2 text-center md:text-start'>
          <motion.p 
            variants={textVariants}
            initial="offscreen"
            animate="onscreen"
            className='font-semiBold text-sm'>
            Hey There
          </motion.p>
          <motion.h1 
            variants={textVariants}
            initial="offscreen"
            animate="onscreen"
            className='md:text-4xl text-2xl font-semiBold'>
            I'm <span style={{ color: '#A6A001' }}>Fahiz</span>
          </motion.h1>
          <motion.h1 
            variants={textVariants}
            initial="offscreen"
            animate="onscreen"
            className='md:text-4xl  text-2xl font-semibold'>
            A MERN Stack Developer
          </motion.h1>
          <motion.p 
            variants={textVariants}
            initial="offscreen"
            animate="onscreen"
            className='md:w-4/6 text-sm'>
            Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops with composable commerce architecture.
          </motion.p>
          <motion.div 
            variants={textVariants}
            initial="offscreen"
            animate="onscreen"
            className='flex gap-4 md:justify-start justify-center'>
            <Button value={'About '} />
            <CommonBt />
          </motion.div>
          <SocialMEdiaLinks />
        </div>

        <div className='md:w-1/2 flex justify-center items-center relative my-10'>
          <div className='relative grid justify-center items-center'>
            <div style={{ backgroundColor: '#A6A001' }} className="z-10 w-20 h-20 rounded-full blur-3xl p-14 shadow-lg absolute ms-14 md:ms-0 -top-4"></div>
            <motion.div 
              variants={cardVariants}
              initial="offscreen"
              animate="onscreen"
              className='z-20 md:-ms-16 bg-[#f8f8f6] hidden sm:block text-black p-2 dark:text-black rounded-2xl shadow-lg absolute md:top-24 top-10'>
              <SiExpress className='text-2xl text-[#000]' />
            </motion.div>
            <motion.div 
              variants={iconVariants}
              initial="offscreen"
              animate="onscreen"
              className='z-30 md:-ms-16 bg-[#f8f8f6] hidden sm:block text-black p-2 dark:text-black rounded-2xl shadow-lg absolute md:top-0 -right-3 top-20'>
              <FaNode className='text-2xl text-[#31f531]' />
            </motion.div>
            <motion.div 
              variants={imageVariants}
              initial="offscreen"
              animate="onscreen"
              className="md:w-[300px] md:mx-0 mx-10 relative z-30">
              <img className="rounded-3xl shadow-md md:rotate-6 sm:rotate-6 md:h-[400px]" src='../images/HeroImage.jpg' alt="ses" />
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              animate="onscreen"
              className='z-40 bg-white rounded-2xl hidden sm:block text-black p-2 dark:text-black mb-40 shadow-lg absolute top-60 md:-right-2 right-0'>
              <FaReact className='text-2xl text-blue-400' />
            </motion.div>
          </div>
        </div>
      </div>
      
      <h1 
       
        className="text-4xl font-bold mb-1 rotate-90 hidden md:block text-yellow-400 opacity-10">
        MERN Stack Developer
      </h1>
    </div>
  );
}

export default HeroPage;
