import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { message, Button } from 'antd';
import { CiLocationOn, CiPhone, CiMail } from 'react-icons/ci';
import SocialMEdiaLinks from './SocialMEdiaLinks';
import { motion } from 'framer-motion';
const Contact = () => {
  const scriptUrl = import.meta.env.VITE_SCRIPT_URL;
  console.log(scriptUrl);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
      .then(res => {
        setLoading(false);
        message.success('SUCCESSFULLY SUBMITTED');
        console.log("SUCCESSFULLY SUBMITTED");
        reset(); // Clear form fields after successful submission
      })
      .catch(err => {
        setLoading(false);
        message.error('Submission failed. Please try again.');
        console.log(err);
      });
  };
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
  return (
    <motion.div
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, threshold: 0.8 }}
     className='grid  md:grid-cols-2 h-fit mt-24 items-center grid-cols-1 md:mx-20 gap-6 my-5 border rounded-lg md:p-10 p-5   text-center md:text-start  text-black dark:text-white'>
      <motion.div
      variants={cardVariants}
       className='md:mr-10  text-center md:text-start'>
        <p className='text-[#A6A001]'>Contact Us</p>
        <h1 className='text-2xl font-bold'>Get In Touch With Us</h1>
        <p className='text-md font-semibold my-4 md:me-20 mx-4 md:mx-0 text-center md:text-start  '>
          Hello! My name is Muhammed Fahiz k, and I'm a MERN Stack Developer from Calicut. I graduated with a BCA from the University of Calicut.
        </p>
        <SocialMEdiaLinks/>
      </motion.div>
      <div className='shadow-2xl  md:p-10 p-5 rounded-lg'>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='flex flex-col dark:text-black' name="google-sheet">
          <label className='dark:text-white' htmlFor='name'>Name</label>
          <input 
            id='name'
            name='name'
            type='text'
            {...register('name', { required: "Name is required" })}
            className='border p-2 rounded mb-4'
          />
          {errors.name && <span className='text-red-500'>{errors.name.message}</span>}

          <label className='dark:text-white' htmlFor='email'>Email</label>
          <input 
            id='email'
            name='email'
            type='email'
            {...register('email', { 
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
              }
            })}
            className='border p-2 rounded mb-4'
          />
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}

          <label className='dark:text-white' htmlFor='message'>Message</label>
          <textarea 
            id='message'
            name='message'
            {...register('message', { required: "Message is required" })}
            className='border p-2 rounded mb-4'
          />
          {errors.message && <span className='text-red-500'>{errors.message.message}</span>}

       
           <button 

            type='submit'
            className='bg-[#A6A001] text-white font-bold py-2 px-4 rounded-md hover:bg-[#c7c111] hover:scale-110 hover:text-white transition-all duration-300 ease-in-out' 
            loading={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
