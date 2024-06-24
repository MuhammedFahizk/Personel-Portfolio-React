import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMongoose, SiJsonwebtokens, SiAxios, SiPostman, SiAmazonroute53, SiRazorpay, SiHandlebarsdotjs, SiRedux, SiReduxsaga, SiBootstrap, SiEjs, SiChartdotjs, SiNginx, SiVercel, } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { CiMail } from "react-icons/ci";


const skills = [
  { id: 1, name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { id: 2, name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { id: 3, name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { id: 4, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 5, name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38B2AC" },
  { id: 6, name: "Node.js", icon: FaNode, color: "#339933" },
  { id: 7, name: "Express.js", icon: SiExpress, color: "#000000" },
  { id: 8, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 9, name: "Mongoose", icon: SiMongoose, color: "#800000" },
  { id: 10, name: "Redux", icon: SiRedux, color: "#764ABC" },
  { id: 11, name: "Redux Toolkit", icon: SiReduxsaga, color: "#764ABC" },
  { id: 12, name: "Bootstrap", icon: SiBootstrap, color: "#563D7C" },
  { id: 13, name: "EJS", icon: SiEjs, color: "#A91E50" },
  { id: 14, name: "Media Queries", icon: SiMongodb, color: "#47A248" },
  { id: 15, name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
];

const tools = [
  { id: 16, name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
  { id: 17, name: "Axios", icon: SiAxios, color: "#5A29E4" },
  { id: 18, name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { id: 19, name: "AWS", icon: FaAws, color: "#FF9900" },
  { id: 20, name: "Amazon Route 53", icon: SiAmazonroute53, color: "#232F3E" },
  { id: 21, name: "Figma", icon: FiFigma, color: "#F24E1E" },
  { id: 22, name: "Razorpay", icon: SiRazorpay, color: "#02042B" },
  { id: 23, name: "Handlebars", icon: SiHandlebarsdotjs, color: "#000000" },
  { id: 24, name: "Git", icon: FaGitAlt, color: "#F05032" },
  { id: 25, name: "GitHub", icon: FaGithub, color: "#181717" },
  { id: 26, name: "Multer", icon: SiMongodb, color: "#47A248" },
  { id: 27, name: "Nodemailer", icon: CiMail, color: "#0073AA" },
  { id: 28, name: "Nginx", icon: SiNginx, color: "#009639" },
  { id: 29, name: "Vercel", icon: SiVercel, color: "#000000" },
];

const Skill = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const renderSkills = (skills) => {
    return skills.map((skill) => (
      <motion.div
        key={skill.id}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, threshold: 0.8 }}
        className="col-span-1 z-10 flex flex-col justify-center items-center bg-white dark:bg-dark-400 rounded-lg shadow-lg p-2 py-4 hover:text-yellow-900 m-3 "
      >
        <skill.icon className="text-4xl mb-2" style={{ color: skill.color }} />
        <h2 className="text-xl font-bold text-center">{skill.name}</h2>
      </motion.div>
    ));
  };

  return (
    <div className="md:mx-20  z-50">
      <h2 style={{color:'#A6A001',}} className=" text-4xl font-bold mb-6 text-center dark:text-white">Skills</h2>
      <div  className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-1">
        {renderSkills(skills)}
      </div>
      <h2 style={{color:'#A6A001'}} className="text-4xl font-bold mb-6 mt-10 text-center dark:text-white">Tools</h2>
      <div  className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-1">
        {renderSkills(tools)}
      </div>
    </div>
  );
};

export default Skill;
