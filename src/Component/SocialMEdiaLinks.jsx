
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
const SocialMEdiaLinks = () => {
  return (
    <div className='flex  gap-3 my-4  justify-center md:justify-start  '>
    <a href="https://github.com/MuhammedFahizk" target="_blank" rel="noopener noreferrer">
        <FaGithub className='text-2xl hover:text-gray-400 transition-transform duration-300 transform hover:scale-125' />
      </a>
      <a href="https://www.linkedin.com/in/muhammed-fahiz-96726b287/" target="_blank" rel="noopener noreferrer">
        <IoLogoLinkedin className='text-2xl hover:text-gray-400 transition-transform duration-300 transform hover:scale-125' />
      </a>
      <a href="mailto:fahizk100@gmail.com" target="_blank" rel="noopener noreferrer">
        <IoIosMail className='text-2xl hover:text-gray-400 transition-transform duration-300 transform hover:scale-125' />
      </a>
     
      <a href="https://api.whatsapp.com/send?+919961130563" target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp className='text-2xl hover:text-gray-400 transition-transform duration-300 transform hover:scale-125' />
      </a>
      <a href="https://www.instagram.com/fahiz_._k" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='text-2xl hover:text-gray-400 transition-transform duration-300 transform hover:scale-125' />
      </a>
  
    </div>
  )
}

export default SocialMEdiaLinks