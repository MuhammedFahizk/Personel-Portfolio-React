import React, { useState } from "react";
import { Card, Modal, Button } from "antd";
import Nav from "../Component/Nav";
import { AiOutlineGithub } from "react-icons/ai"; // Import GitHub icon
const { Meta } = Card;

// Project items
const items = [
  {
    id: 11,
    title: "Chat Hive",
    image: "../images/ChatHive.png",
    type: "major",
    git: "https://github.com/MuhammedFahizk/Social-Media-Frontend",
    link: 'https://chathivemedia.vercel.app/',
    subtitle: "Full-Stack Social Media Application with Admin Panel",
    description:
      " Description: A dynamic social media platform built using the MERN stack (MongoDB, Express, React, Node.js) following the MVC architecture. The platform features secure user authentication via JWT (JSON Web Token) and supports role-based access for admins and users. Users can engage in real-time messaging with Socket.IO, post feeds, share stories, write blogs, and interact through comments and likes. Additionally, users have the ability to report inappropriate content or users and hide posts they do not wish to see. Admins have full control to manage users, posts, reports, and notifications. The website is fully responsive thanks to Tailwind CSS, and ESLint ensures high code quality and consistency throughout the project."  },
 
  {
    id: 10,
    title: "Drive Wave",
    image: "../images/DriveWave.png",
    type: "major",
    git: "https://github.com/MuhammedFahizk/drive-Wave",
    link: 'https://www.drivewave.site',
    subtitle: "Car rental website node, express, mongodb and hbs",
    description:
      "Drive Wave is a car rental website designed to provide a seamless experience for users looking to rent vehicles. Built using modern web technologies such as Node.js, Express, MongoDB, and Handlebars (HBS), Drive Wave offers robust backend management paired with an intuitive user interface, catering to customers, administrators, and vendors. The platform not only allows users to rent cars but also enables third-party car owners to list and manage their vehicles, expanding the range of available options for renters.",
  },
  {
    id: 21,
    title: "AuthCore",
    type: "major",
    image: "../images/AuthCore.png",
    git : "https://github.com/MuhammedFahizk/MERN-User-Management",
    description:
      "AuthCore is a secure and scalable authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It leverages JWT (JSON Web Tokens) for secure authentication and implements a robust system with access and refresh tokens for session management. The backend is designed to follow RESTful principles, while the frontend integrates authentication flows seamlessly with Axios interceptors to handle token refreshing automatically. This system ensures high performance, secure user access, and a smooth developer experience.",
    subtitle: "Advanced MERN Authentication System with JWT and Axios Interceptors",
  },


  {
    id: 22,
    title: "Spotify Clone",
    type: "major",
    image: "../images/SpotifyClone.png",
    git: "https://github.com/MuhammedFahizk/TrackVoice",
    description:
      "A responsive Spotify frontend clone built using React, featuring seamless integration with Spotify's original API for music-related functionalities such as fetching tracks, albums, and artist details. User authentication and playlist management are handled through a custom backend built with Node.js and Express, using JWT for secure access and refresh tokens for session management. User-generated playlists are stored in a dedicated database, while all music streaming and browsing data are fetched directly from Spotify's API, ensuring a rich and authentic user experience.",
    subtitle: "Spotify Frontend Clone with Custom User Management and Spotify API Integration",
  },
  {
    id: 23,
    title: "Countdown Timer Shopify App",
    type: "mini",
    image: "../images/CountdownTimerApp.png",
    git: "https://github.com/MuhammedFahizk/countdown-timer",
    description:
      "The Countdown Timer Shopify App allows Shopify merchants to create customizable countdown timers to display promotions and discounts on product pages. Built using the MERN stack, it features a React-based admin interface and integrates seamlessly into Shopify through a theme app extension. It enables merchants to manage timers with unique start and end dates, descriptions, and display options, helping drive customer urgency and boost sales.",
    subtitle: "Shopify Countdown Timer App with MERN Stack and Theme App Extension",
  },
   {
    id: 20,
    image: "../images/portfolio.png",
    type: 'mini',
    git: "https://github.com/MuhammedFahizk/Personel-Portfolio-React",
    link: 'https://fahiz.vercel.app/',
    title: 'Personal Portfolio Website',
    description: 'Developed a responsive and interactive personal portfolio website from scratch using React and Tailwind CSS to highlight my skills, projects, and professional background.'
  },
  {
    id: 30,
    image: "../images/Seminar.png",
    type: "mini",
    link: 'https://exhibition-hall-booking-app-react.vercel.app/',
    title: "Seminar Hall Booking",
    subtitle:
      "Seminar hall booking system built with Node.js, Express, MongoDB, and Handlebars (HBS)",
    description:
      "A system for booking seminar halls with user authentication and scheduling capabilities.",
  },
  {
    id: 40,
    image: "../images/TODO.png",
    type: "mini",
    link: 'https://to-do-kanban-app.vercel.app/',
    title: "Kanban To-do",
    subtitle: "Task management system using Node.js, Express, MongoDB, and HBS",
    description:
      "A Kanban-style to-do list application for managing tasks with drag-and-drop functionality and real-time updates.",
  },
  {
    id: 50,
    title: "Recipe Fusion",
    type: "mini",
    link: 'https://flavorfusion-two.vercel.app/',
    image: "../images/RecipeFusion.png",
    description:
      "This project involves developing a robust backend for a recipe-sharing application using Node.js, Express, and MongoDB. The application leverages JWT (JSON Web Tokens) for secure user authentication, including the implementation of refresh tokens to maintain long-term user sessions without compromising security.",
    subtitle:
      "Secure and Scalable Recipe Sharing Backend with JWT Authentication",
  },
  {
    id: 60,
    title: 'XYLEM',
    link: 'https://fahiz-mavoor.github.io/Xylem/',
    image: "../images/Xylem.png",
    subtitle: 'Xylem clone',
    type: 'clone',
    description:
      "Xylem is a responsive website created using HTML and CSS. It is a clone of the original Xylem site, designed to replicate its layout and styling."
  },
  {
    id: 70,
    title: 'AJMI',
    link: 'https://fahiz-mavoor.github.io/ajmi/',
    image: "../images/Ajmi.png",
    subtitle: 'Ajmi clone',
    type: 'clone',
    description:
      "Ajmi is a responsive website created using HTML and CSS. It is a clone of the original Ajmi site, designed to replicate its layout and styling."
  },
  
  
  {
    id: 80,
    title: 'Netflix',
    link: 'https://fahiz-mavoor.github.io/Netflix/',
    image: "../images/Netflix.png",
    subtitle: 'Netflix clone',
    type: 'clone',
    description:
      "Netflix is a responsive website created using HTML and CSS. It is a clone of the original Netflix site, designed to replicate its layout and styling."
  },
  {
    id: 90,
    title: 'Swiggy',
    link: 'https://fahiz-mavoor.github.io/Swiggy/',
    image: "../images/Swiggy.png",
    subtitle: 'Swiggy clone',
    type: 'clone',
    description:
      "Swiggy is a responsive website created using HTML and CSS. It is a clone of the original Swiggy site, designed to replicate its layout and styling."
  },
  {
    id: 100,
    title: 'kitchen',
    link: 'https://fahiz-mavoor.github.io/kitchen-/',

    image: "../images/kitchen.png",
    subtitle: 'Kitchen clone',
    type: 'clone',

    description:
      "Kitchen is a responsive website created using HTML and CSS."
  },
];

const tabListNoTitle = [
  { key: "all", label: "All" },
  { key: "major", label: "Major Project" },
  { key: "mini", label: "Mini Projects" },
  { key: "clone", label: "Clone Sites" },
];

const Projects = () => {
  const [activeTabKey, setActiveTabKey] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const filteredItems =
    activeTabKey === "all"
      ? items
      : items.filter((item) => item.type.toLowerCase() === activeTabKey);

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Nav />
      <div className="md:p-20 py-20">
        <div className="container mx-auto p-4">
          <Card
            style={{ width: "100%" }}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey}
            onTabChange={onTabChange}
            tabProps={{ size: "middle" }}
          >
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  style={{ width: 300 }}
                  className="cursor-pointer"
                  cover={
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="h-48 object-cover"
                      />
                    </a>
                  }
                  onClick={() => showModal(item)}
                >
                  <Meta
                    className="meta-description h-40 dark:text-white"
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Ant Design Modal */}
      <Modal
        title={selectedItem?.title || "Project Details"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          selectedItem?.git && (
            <Button
              key="git"
              type="default"
              href={selectedItem.git}
              target="_blank"
              icon={<AiOutlineGithub />}
            >
              GitHub
            </Button>
          ),
          <Button key="link" type="primary" href={selectedItem?.link} target="_blank">
            Visit Project
          </Button>,
        ]}
        width={800}
        centered
      >
        {selectedItem && (
          <div>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{selectedItem.title}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.subtitle}</p>
            <p className="text-gray-800">{selectedItem.description}</p>
            {selectedItem.git && (
              <p className="mt-4">
                <a
                  href={selectedItem.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center"
                >
                  <AiOutlineGithub className="mr-2" />
                  View GitHub Repository
                </a>
              </p>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Projects;
