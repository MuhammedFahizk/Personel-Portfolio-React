import { useState } from "react";
import { motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const SampleProject = () => {
  const items = [
   
    {
      id: 11,
      title: "Chat Hive",
      image: "../images/ChatHive.png",
      type: "Project",
      link: 'https://chathivemedia.vercel.app/',
      subtitle: "Full-Stack Social Media Application with Admin Panel",
      description:
        " Description: A dynamic social media platform built using the MERN stack (MongoDB, Express, React, Node.js) following the MVC architecture. The platform features secure user authentication via JWT (JSON Web Token) and supports role-based access for admins and users. Users can engage in real-time messaging with Socket.IO, post feeds, share stories, write blogs, and interact through comments and likes. Additionally, users have the ability to report inappropriate content or users and hide posts they do not wish to see. Admins have full control to manage users, posts, reports, and notifications. The website is fully responsive thanks to Tailwind CSS, and ESLint ensures high code quality and consistency throughout the project." 
       },
       { 
        id: 10,
        title: "Drive Wave",
        image: "../images/DriveWave.png",
        type: "Project",
        subtitle: "car rental website node, express, mongodb and hbs",
        description:
          " is a car rental website designed to provide a seamless experience for users looking to rent vehicles. Built using modern web technologies such as Node.js, Express, MongoDB, and Handlebars (HBS), Drive Wave offers robust backend management paired with an intuitive user interface, catering to customers, administrators, and vendors. The platform not only allows users to rent cars but also enables third-party car owners to list and manage their vehicles, expanding the range of available options for renters.",
      },
   
      {
        id: 21,
        title: "AuthCore",
        type: "mini",
        image: "../images/AuthCore.png",
        description:
          "AuthCore is a secure and scalable authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It leverages JWT (JSON Web Tokens) for secure authentication and implements a robust system with access and refresh tokens for session management. The backend is designed to follow RESTful principles, while the frontend integrates authentication flows seamlessly with Axios interceptors to handle token refreshing automatically. This system ensures high performance, secure user access, and a smooth developer experience.",
        subtitle: "Advanced MERN Authentication System with JWT and Axios Interceptors",
      },
    

      {
        id: 22,
        title: "Spotify Clone",
        type: "mini",
        image: "../images/SpotifyClone.png",
        description:
          "A responsive Spotify frontend clone built using React, featuring seamless integration with Spotify's original API for music-related functionalities such as fetching tracks, albums, and artist details. User authentication and playlist management are handled through a custom backend built with Node.js and Express, using JWT for secure access and refresh tokens for session management. User-generated playlists are stored in a dedicated database, while all music streaming and browsing data are fetched directly from Spotify's API, ensuring a rich and authentic user experience.",
        subtitle: "Spotify Frontend Clone with Custom User Management and Spotify API Integration",
      },
      {
        id: 23,
        title: "Countdown Timer Shopify App",
        type: "mini",
        image: "../images/CountdownTimerApp.png",
        description:
          "The Countdown Timer Shopify App allows Shopify merchants to create customizable countdown timers to display promotions and discounts on product pages. Built using the MERN stack, it features a React-based admin interface and integrates seamlessly into Shopify through a theme app extension. It enables merchants to manage timers with unique start and end dates, descriptions, and display options, helping drive customer urgency and boost sales.",
        subtitle: "Shopify Countdown Timer App with MERN Stack and Theme App Extension",
      },
    
  ];
  const [selectedId, setSelectedId] = useState(null);

  const onItemClick = (itemId) => {
    setSelectedId(itemId === selectedId ? null : itemId);
  };

  const selectedItem = items.find((item) => item.id === selectedId);

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <>
      <h1 className="text-black dark:text-white text-center text-3xl font-bold opacity-35">
        PROJECTS
      </h1>
      <div className="grid grid-cols-2 gap-4 p-8 md:px-24 relative">
        {items
          .filter((item) => item.type.toLowerCase() === "project")
          .map((item, index) => (
            <motion.div
              key={index}
              layoutId={item.id}
              onClick={() => onItemClick(item.id)}
              className="item p-5 rounded-2xl bg-[#999f04] dark:bg-[#A6A001] flex flex-col justify-center shadow-2xl z-0 text-white cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                className="hover:grayscale relative object-cover flex-shrink-0 h-[200px] rounded-lg"
                alt={item.title}
              />
              <motion.h2 className="text-2xl font-bold text-center my-3">
                {item.title}
              </motion.h2>
            </motion.div>
          ))}
      </div>

      <h1 className="text-black dark:text-white text-center text-3xl font-bold opacity-35">
        MINI PROJECTS
      </h1>
      <div className="grid-cols-1 grid md:grid-cols-3 gap-4 p-8 md:px-24 relative">
        {items
          .filter((item) => item.type.toLowerCase() === "mini")
          .map((item, index) => (
            <motion.div
              key={index}
              layoutId={item.id}
              onClick={() => onItemClick(item.id)}
              className="item p-5 rounded-2xl bg-[#999f04] dark:bg-[#A6A001] flex flex-col justify-center shadow-2xl z-0 text-white cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                className="hover:grayscale relative object-cover flex-shrink-0 h-[200px] rounded-lg"
                alt={item.title}
              />
              <motion.h2 className="text-2xl font-bold text-center my-3">
                {item.title}
              </motion.h2>
            </motion.div>
          ))}
      </div>

      <Button className="w-40 flex shadow-lg items-center h-fit mx-24 ms-auto">
        <Link to="/projects">View All Projects</Link>
        <FaArrowRightLong />
      </Button>

      {/* Modal for Project Details */}
      <Modal
        title={selectedItem?.title}
        open={selectedId !== null}
        onCancel={closeModal}
        footer={null}
      >
        {selectedItem && (
          <>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{selectedItem.subtitle}</h3>
            <p className="mt-2">{selectedItem.description}</p>
            {selectedItem.link && (
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 block"
              >
                Visit Project
              </a>
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default SampleProject;
