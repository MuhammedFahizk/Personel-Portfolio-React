import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion, useScroll } from "framer-motion"
import './App.css'
import Skill from './Pages/Skill.jsx'
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx'
function App() {
  const { scrollYProgress } = useScroll()


  return (
    <>
    <motion.svg 
        width="100%" 
        height="100" 
        // viewBox="100 10 100 100"
        style={{ position: 'fixed', top: 18, left: 0 }}
      >
        <motion.path
          // d="M 0, 50 a 25, 25 0 1,0 50,0 a 25, 25 0 1,0 -50,0" // Adjusted path to fit within the viewBox
          style={{ pathLength: scrollYProgress }}
          d="M 0, 50 L 1300, 50" // Line path from (10, 50) to (90, 50)
          stroke="#A6A001"
          fill='transparent' // Use transparent fill to see the stroke
          strokeWidth="5" // Optional: adjust stroke width for better visibility
        />
        </motion.svg>
      <Home/>
      <Services/>
      
      <Skill/>
     
    </>
  )
}

export default App
