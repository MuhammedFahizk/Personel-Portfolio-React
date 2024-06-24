import { createRoot } from "react-dom/client";
import { motion, useScroll } from "framer-motion"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Home from './Pages/Home'
import AboutMe from "./Pages/AboutMe";
function App() {
  const { scrollYProgress } = useScroll()

  const router = createBrowserRouter( [
    {
      path: '/',
      element: (
        <Home/>
      )
    },
    {
      path: '/home',
      element: (
        <Home/>
      )
    },
    {
      path: '/About',
      element: (
        <AboutMe/>
      )
    }
  ])

  return (
    <>
    <motion.svg
          width="100%"
          height="100"
          // viewBox="100 10 100 100"
          style={{ position: 'fixed', top: 18, left: 0, zIndex:12 }}
      >
          <motion.path
              // d="M 0, 50 a 25, 25 0 1,0 50,0 a 25, 25 0 1,0 -50,0" // Adjusted path to fit within the viewBox
              style={{ pathLength: scrollYProgress }}
              d="M 0, 50 L 1300, 50"
              stroke="#A6A001"
              fill='transparent'
              strokeWidth="3"
          />
      </motion.svg>
     <RouterProvider router={router} />

    </>
  )
}

export default App
