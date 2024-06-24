import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";

const SampleProject = () => {
  const items = [
    {
      id: 10,
      title: "Drive Wave",
      subtitle: "car rental website node, express, mongodb and hbs",
    },
    {
      id: 20,
      title: "Recipe Fusion",
      image: '../images/RecipeFusion.png',
      description: 'This project involves developing a robust backend for a recipe-sharing application using Node.js, Express, and MongoDB. The application leverages JWT (JSON Web Tokens) for secure user authentication, including the implementation of refresh tokens to maintain long-term user sessions without compromising security.',
      subtitle: "Secure and Scalable Recipe Sharing Backend with JWT Authentication",
    },
    {
      id: 30,
      title: "Drive Wave",
      subtitle: "car rental website node, express, mongodb and hbs",
    },
    {
      id: 40,
      title: "Knaban",
      subtitle: "car rental website node, express, mongodb and hbs",
    },
  ];
  const [selectedId, setSelectedId] = useState(null);

  const onItemClick = (itemId) => {
    setSelectedId(itemId === selectedId ? null : itemId);
  };

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 md:px-24 relative">
      {items.map((item, index) => (
        <motion.div
          key={index}
          layoutId={item.id}
          onClick={() => onItemClick(item.id)}
          style={{ backgroundColor: '#E5E3B7'}}
          className="item p-10 rounded-2xl shadow-2xl z-10 cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <motion.h2>{item.title}</motion.h2>
          <motion.h5>{item.subtitle}</motion.h5>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ backgroundColor: '#A6A001' }}
              className="bg-white z-40 p-5 flex flex-col justify-center items-center rounded-lg max-w-lg text-center text-white gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.image && (
                <img src={selectedItem.image} className=" flex-shrink-0 " alt={selectedItem.title} />
              )}
              <div className="flex flex-col justify-between  text-black">
                <motion.h5 className="text-2xl text-center">
                  {selectedItem.title}
                </motion.h5>
                <motion.h2 className=" text-start">
                  {selectedItem.subtitle}
                </motion.h2>
                <motion.p  className=" text-start">
                  {selectedItem.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SampleProject;
