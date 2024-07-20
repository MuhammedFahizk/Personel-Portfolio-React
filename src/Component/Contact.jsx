import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { message, Button } from 'antd';
import { CiLocationOn, CiPhone, CiMail } from 'react-icons/ci';
import SocialMEdiaLinks from './SocialMEdiaLinks';

const Contact = () => {
  const scriptUrl = import.meta.env.VITE_SCRIPT_URL;
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
      .then(res => {
        setLoading(false);
        message.success('Successfully submitted!');
        console.log("SUCCESSFULLY SUBMITTED");
        reset(); // Clear form fields after successful submission
      })
      .catch(err => {
        setLoading(false);
        message.error('Submission failed. Please try again.');
        console.log(err);
      });
  };

  return (
    <div className='grid md:grid-cols-2 h-full items-center grid-cols-1 md:mx-20 gap-6 my-5 border rounded-lg p-10 text-black dark:text-white'>
      <div className='mr-10'>
        <p>Contact Us</p>
        <h1 className='text-2xl font-bold'>Get In Touch With Us</h1>
        <p className='text-md font-semibold my-4 me-20'>
          Hello! My name is Muhammed Fahiz k, and I'm a MERN Stack Developer from Calicut. I graduated with a BCA from the University of Calicut.
        </p>
        <SocialMEdiaLinks/>
      </div>
      <div className='shadow-2xl p-10 rounded-lg'>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='flex flex-col' name="google-sheet">
          <label htmlFor='name'>Name</label>
          <input 
            id='name'
            name='name'
            type='text'
            {...register('name', { required: "Name is required" })}
            className='border p-2 rounded mb-4'
          />
          {errors.name && <span className='text-red-500'>{errors.name.message}</span>}

          <label htmlFor='email'>Email</label>
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

          <label htmlFor='message'>Message</label>
          <textarea 
            id='message'
            name='message'
            {...register('message', { required: "Message is required" })}
            className='border p-2 rounded mb-4'
          />
          {errors.message && <span className='text-red-500'>{errors.message.message}</span>}

          <Button 
            type='primary'
            htmlType='submit'
            className='bg-blue-500 text-white p-2 rounded'
            loading={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
