import React, { useState } from "react";
import { Card } from "antd";
import Nav from "../Component/Nav";
import { Avatar } from 'antd';
const { Meta } = Card;

// Project items
const items = [
  {
    id: 10,
    title: "Drive Wave",
    image: "../images/DriveWave.png",
    type: "major",
    subtitle: "Car rental website node, express, mongodb and hbs",
    description:
      "Drive Wave is a car rental website designed to provide a seamless experience for users looking to rent vehicles. Built using modern web technologies such as Node.js, Express, MongoDB, and Handlebars (HBS), Drive Wave offers robust backend management paired with an intuitive user interface, catering to customers, administrators, and vendors. The platform not only allows users to rent cars but also enables third-party car owners to list and manage their vehicles, expanding the range of available options for renters.",
  },
  {
    id: 20,
    title: "Recipe Fusion",
    type: "mini",
    image: "../images/RecipeFusion.png",
    description:
      "This project involves developing a robust backend for a recipe-sharing application using Node.js, Express, and MongoDB. The application leverages JWT (JSON Web Tokens) for secure user authentication, including the implementation of refresh tokens to maintain long-term user sessions without compromising security.",
    subtitle:
      "Secure and Scalable Recipe Sharing Backend with JWT Authentication",
  },
  {
    id: 30,
    image: "../images/Seminar.png",
    type: "mini",
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
    title: "Kanban To-do",
    subtitle: "Task management system using Node.js, Express, MongoDB, and HBS",
    description:
      "A Kanban-style to-do list application for managing tasks with drag-and-drop functionality and real-time updates.",
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
            <div className="grid md:grid-cols-3 grid-col-1 gap-4">
              {filteredItems.map((item) => (
                // <div key={item.id} className="w-full h-full p-3 flex flex-col scroll-smooth rounded-lg shadow-2xl items-start justify-start">
                //   <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                //   <h2 className="text-xl font-bold mt-4">{item.title}</h2>
                //   <p className="text-sm italic">{item.subtitle}</p>
                // </div>
                <Card
                  key={item.id}
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                     src={item.image}
                    className="h-40"
                    />
                  }
                  // actions={[
                  //   <SettingOutlined key="setting" />,
                  //   <EditOutlined key="edit" />,
                  //   <EllipsisOutlined key="ellipsis" />,
                  // ]}
                >
                  <Meta
      // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
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
