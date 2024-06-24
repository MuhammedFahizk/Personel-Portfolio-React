import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux } from 'react-icons/si';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const services = [
    {
      name: 'MERN Stack Developer',
      description: 'Specialized in developing full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      icons: [
        <FaNode  size={30} color={'#8BC34A'} />,
        <SiExpress size={30} color={'#FFFFFF'} className="dark:text-white" />,
        <FaReact size={30} color={'#61DBFB'} />,
        <SiMongodb size={30} color={'#47A248'} />
      ]
    },
    {
      name: 'Frontend Developer',
      description: 'Expert in building responsive and interactive user interfaces using React.',
      icons: [
        <FaReact size={30} color={'#61DBFB'} />,
        <SiRedux size={30} color={'#764ABC'} />
      ]
    },
    {
      name: 'Backend Developer',
      description: 'Skilled in creating robust and scalable backend services with Node.js and Express.',
      icons: [
        <FaNode size={30} color={'#8BC34A'} />,
        <SiExpress size={30} color={'#FFFFFF'} className="dark:text-white" />
      ]
    }
  ];

  return (
    <div className="py-10 dark:text-white lg:flex px-5 items-center text-white justify-center">
      <div className="mt-10 sm:block lg:hidden">
        <h1 className="text-3xl font-rounded font-bold text-center my-4 opacity-20 text-black dark:text-white">SERVICES</h1>
      </div>
      <div className="md:grid md:grid-cols-3 lg:gap-9 md:gap-10 justify-center flex flex-col items-center">
        {services.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            key={index} 
            style={{ backgroundColor: '#1E1E1E' }} 
            className="flex flex-col rounded-lg justify-center items-center mb-10 shadow-lg p-5 w-full md:w-[250px]"
          >
            <div className="flex justify-center md:mb-4">
              {item.icons.map((icon, iconIndex) => (
                <div key={iconIndex} className="mx-1">
                  {icon}
                </div>
              ))}
            </div>
            <div className="text-center flex flex-col h-[100px] p-2">
              <h2 className="text-lg">{item.name}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-10 hidden lg:block">
        <h1
          className="transform rotate-90 text-3xl font-rounded font-bold opacity-20 text-black dark:text-white"
        >
          SERVICES
        </h1>
      </div>
    </div>
  );
};

export default Services;
