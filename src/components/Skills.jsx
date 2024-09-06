import React from "react";
import { cardItems } from "../Data";
function Skills() {
   
  return (
    <div id="Skills"className="max-w-screen-2xl mx-auto px-4 md:px-20 sm-mx:mt-10">
      <div>
        <h1 className="text-4xl font-bold mb-20 text-center text-violet-400">Skills</h1>
      </div>
      <div className="mx-auto grid grid-cols-2 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-3 px-4 sm:px-10 md:px-20 w-full">
        {cardItems.map(({ id, logo, name }) => (
          <div
            className="flex flex-col px-10 py-4 mx-15 items-center justify-center md:w-[200px] md:h[220px] border-[2px]
            rounded-lg shadow-md p-1 cursor-pointer hover:scale-110 sm-mx:w-[150px] xs-mx:w-[130px]
            duration-300 !border-primaryColor border-2 hover:!shadow-[0_0_10px_1px_#64FFDA] md:ml-14" key={id}
          >
            <img
              src={logo}
              className="w-[50px] h-[50px] p-1 rounded-lg border-[2px] !shadow-[0_0_5px_1px_#4CAF50]"
              alt=""
            />
             <p className="px-2 font-bold text-xl mb-2 text-black">{name}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
