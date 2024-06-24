import Button from '../Component/Button';
import Nav from '../Component/Nav';

const HeroPage = () => {
  return (
    <div className='dark:text-white text-white'>

      <Nav />
      
      <div className='md:px-20 md:flex items-center h-[500px] text-black dark:text-white my-20'>
        <div className='grid gap-2 px-5 md:w-1/2 text-center md:text-start'>
          <p className='font-semiBold text-sm'>Hey There</p>
          <h1 className='md:text-4xl text-2xl font-semiBold'>I'm <span style={{color:'#A6A001'}}>Fahiz</span></h1>
          <h1 className='md:text-4xl text-2xl font-semibold'>A MERN Stack Developer</h1>
          <p className='md:w-4/6 text-sm'>Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops with composable commerce architecture.</p>
          <Button value={'About '} />
        </div>

        <div className='md:w-1/2 flex justify-center items-center relative my-10'>
          <div className='relative grid justify-center items-center'>
            <div style={{ backgroundColor: '#A6A001' }} className="z-10 w-20 h-20 rounded-full blur-3xl p-14 shadow-lg absolute ms-14 md:ms-0 -top-4"></div>
            <div className='z-20 md:-ms-16 bg-[#A6A001] text-black px-4 dark:text-black rounded-sm shadow-lg absolute md:top-24 top-10'>
              React js
            </div>
            <div className="md:w-[300px] md:mx-0 mx-20 relative z-30">
              <img className="rounded-3xl shadow-md md:rotate-6 sm:rotate-6 md:h-[400px]" src='../images/HeroImage.jpg' alt="ses" />
            </div>
            <div className='z-40 bg-[#A6A001] text-black px-4 dark:text-black rounded-sm mb-40 shadow-lg absolute top-60 md:-right-10 right-0 '>
              Express js
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold mb-4 rotate-90 hidden md:block text-yellow-400 opacity-10 mt-40 "> MERN Stack Developer</h1>
      {/* <h1 className="text-4xl font-bold mb-4 rotate-90 opacity-20 ms-10 "> Fahiz K</h1> */}
      
    </div>
  );
}

export default HeroPage;
