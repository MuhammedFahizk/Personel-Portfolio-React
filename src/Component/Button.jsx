import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

const Button = ({ value, backgroundColor = '#A6A001', size = 'sm', showArrow = true, icon: Icon = IoIosArrowDropright }) => {
  const sizeClasses = {
    sm: 'text-sm w-6 h-6 px-2',
    md: 'text-md w-8 h-8 px-3',
    lg: 'text-lg w-10 h-10 px-4'
  };

  return (
    <Link to={'/about'} className='flex items-center '>
      <div 
        className={`rounded-full flex items-center justify-center absolute z-10  ${sizeClasses[size]}`}
        style={{ backgroundColor }}
      >
        
      </div>
      <span className='flex items-center  ms-2 z-30'>
          <span className='mr-1'>{value}</span>
          {showArrow && <Icon className='ml-1' />}
        </span>
    </Link>
  );
}

export default Button;
