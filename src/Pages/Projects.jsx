import React, { useState } from "react";
import { Card } from "antd";
import Nav from "../Component/Nav";
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
const { Meta } = Card;

// Project items
const items = [
  {
    id: 10,
    title: "Drive Wave",
    image: "../images/DriveWave.png",
    type: "major",
    link: 'https://www.drivewave.site',
    subtitle: "Car rental website node, express, mongodb and hbs",
    description:
      "Drive Wave is a car rental website designed to provide a seamless experience for users looking to rent vehicles. Built using modern web technologies such as Node.js, Express, MongoDB, and Handlebars (HBS), Drive Wave offers robust backend management paired with an intuitive user interface, catering to customers, administrators, and vendors. The platform not only allows users to rent cars but also enables third-party car owners to list and manage their vehicles, expanding the range of available options for renters.",
  },
  {
    id: 20,
    image: "../images/portfolio.png",
    type: 'mini',
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
  {
    key: "all",
    label: "All",
  },
  {
    key: "major",
    label: "Major Project",
  },
  {
    key: "mini",
    label: "Mini Projects",
  },
  {
    key: "clone",
    label: "Clone Sites",
  },
];

const Projects = () => {
  const [activeTabKey, setActiveTabKey] = useState("all");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const filteredItems =
    activeTabKey === "all"
      ? items
      : items.filter((item) => item.type.toLowerCase() === activeTabKey);

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
                  cover={
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="h-48 object-cover"
                      />
                    </a>
                  }
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
    </>
  );
};

export default Projects;
