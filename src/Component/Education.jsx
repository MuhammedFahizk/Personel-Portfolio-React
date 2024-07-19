import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
// import 'antd/dist/antd.css';

const Education = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <>
      <div className='my-20 w-full flex flex-col items-center text-black dark:text-white h-full justify-center  '>
        <h1 className='md:text-center text-2xl my-10 font-bold'>Education</h1>
        <Timeline
          className='dark:text-white'
          mode={mode}
          items={[
            {
              label: <span className="text-lg font-semibold">2023-09-01 to 2024-08-01</span>,
              children: (
                <div>
                  <strong>Self Stack</strong>
                  <p>Gained expertise in the MERN stack through intensive self-study and practical projects.</p>
                </div>
              ),
            },
            {
              label: <span className="text-lg font-semibold">2020-06-01 to 2023-05-01</span>,
              children: (
                <div>
                  <strong>Bachelor of Computer Application</strong>
                  <p>Completed undergraduate degree at the University of Calicut, with a focus on software development and computer science fundamentals.</p>
                </div>
              ),
            },
            {
              label: <span className="text-lg font-semibold">2018-06-01 to 2020-04-01</span>,
              children: (
                <div>
                  <strong>Higher Secondary Education Computer Commerce</strong>
                  <p>Studied computer commerce, gaining foundational knowledge in computer science and commerce principles.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default Education;
