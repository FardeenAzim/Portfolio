import React from "react";

const Timeline = () => {
  const events = [
    {
      id:"1",
      year: "2022 - 2025",
      title: "Computer Science",
      content: "Bachelor of Computer Application",
      description: "St. Paul's College Ranchi",
    },
    {
      id:"2",
      year: "2020 - 2022",
      title: "Science",
      content: "Intermediate",
      description: "St. Aloysius Intermediate College Ranchi",
    },
    {
      id:"3",
      year: "2020",
      title: "Matriculation",
      content: "Matric",
      description: "St. Aloysius High School Ranchi",
    },
  ];
  return (
    <div className="flex flex-col items-center md:px-20 my-20 mt-20">
      <h1 className="text-4xl font-bold mb-20 text-center">Education</h1>
      <div className="relative ml-">
        {events.map((event, index) => (
          <div key={event.id} className="mb-8 flex justify-center w-full">
            <div className="flex justify-center">
              <div className=" absolute bg-blue-500 w-3 h-4 mt-5 left-[-1rem] rounded-full"></div>
            </div>
            <div className={`${index % 1 === 0 ? "pl-5" : "pr-8"}`}>
              <div className="flex flex-col  md:w-[550px] md:h-[200px] sm-mx:w-[350px] sm-mx:h-[300px]
               xs-mx:w-[250px] xs-mx:h-[350px] text-justify items-center justify-center border-[2px] text-center 
              rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 !border-primaryColor border-2 
              hover:!shadow-[0_0_10px_1px_#64FFDA]">

                <h1 className="text-4xl font-bold text-textColor p-2">{event.title}</h1>
                <p className="text-2xl font-semibold text-black p-2">
                  {event.description}
                </p>
                
                <p className="text-2xl font-semibold text-black p-2">
                  {event.content}
                </p>
                 
                <p className="text-2xl font-semibold text-black p-2">
                  {event.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
