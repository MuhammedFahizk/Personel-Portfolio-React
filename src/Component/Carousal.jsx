const Carousal = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      Description:
        "Comprehensive web development services from concept to deployment, ensuring high performance and responsiveness",
      img: "https://images.pexels.com/photos/20529772/pexels-photo-20529772/free-photo-of-a-woman-posing-in-a-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "Full-Stack Web Development",
      Description:
        "Comprehensive web development services from concept to deployment, ensuring high performance and responsiveness",
      img: "https://images.pexels.com/photos/20529772/pexels-photo-20529772/free-photo-of-a-woman-posing-in-a-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "Full-Stack Web Development",
      Description:
        "Comprehensive web development services from concept to deployment, ensuring high performance and responsiveness",
      img: "https://images.pexels.com/photos/20529772/pexels-photo-20529772/free-photo-of-a-woman-posing-in-a-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className=" grid grid-cols-3 p-10 gap-2   ">
      {services.map((service, index) => (
        <div key={index} className=" h-[300px] w-[250px]">
          <img src={service.img} alt="" className="border-2 border-x-2 r rounded-t-2xl " />
          <div className="">
            <h2>
              {service.title}
            </h2>
            <p>
              {service.Description}
              </p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousal;
