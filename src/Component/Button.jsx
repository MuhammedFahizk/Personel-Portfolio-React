import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
const Button = ({value}) => {
  return (
    <div className=' flex   justify-center  md:justify-start   '>
        <p className=' text-sm  rounded-full w-6 h-6 px-2   ' style={{backgroundColor: '#A6A001'}}>
            {value}

        </p>
        <IoIosArrowDropright  className=' m-1 ms-12'/>

    </div>
  )
}

export default Button