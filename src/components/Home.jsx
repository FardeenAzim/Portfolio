import React from 'react';
import { Info } from "../Data";
import Typewriter from "typewriter-effect";
import Resume from '../assets/Resume.pdf';
import img from '../assets/img.avif'
// import VantaBackground from "./VantaBackground";
import AnimatedImage from './AnimatedImage';
import download from '../assets/down.png'
import Mail from './Mail';
import Social from './Social';



const Home = () => {
     
    return (
        <>
            <div id="#Home"></div>
            <Mail />
            <Social />
            <div className="relative w-full h-[100vh] sm-mx:h-[130vh] mt-30 flex relative z-10 overflow-hidden mt-5
            justify-around items-center font-mono px-10 mt-[10px] sm-mx:px-4 xs-mx:px-2 xs-mx:py-4
            lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 
            md-mx:px-6 " >             
            {/* <VantaBackground className="absolute inset-0 z-0"/>   */}
              <div className="flex text-3xl md-mx:flex-col text-2xl justify-center items-center z-10">

                <div className="w-full sm:w-full md:w-3/5 md-mx:order-2 ml-27 w-5/5 mr-50 md-mx:gap-3 ml-26">
                    <div className="text-blue-700 text-3xl lg-mx:text-2xl xs-mx:text-xl p-2 xs-mx:text-lg font-semibold mb-3">Hi, I am</div>
                    <div className="text-blue-700 text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl
                     xs-mx:text-[27px] xs-mx:px-4 ml-8 ">{Info.name}</div>

                    <div className="text-black text-4xl flex font-semibold lg-mx:text-[27px] py-2 sm-mx:text-2xl xs-mx:text-xl
                     xsm-mx:text-lg mt-4">I'm a&nbsp;<span className="text-green-400  "><Typewriter
                     options={{ strings: Info.stack, autoStart: true, loop: true, }} /> </span></div>

                    <div className="text-textColor text-xl w-[90%] text-justify mt-3 font-semibold
                      sm-mx:text-sm ml-5">{Info.bio}</div>

                    
                    <a 
                      href={Resume} download 
                      className="mt-10 flex w-[200px] items-center p-2 bg-green-500 text-white rounded hover:bg-green-600 px-3 mx-4 rounded !border-primaryColor border-2 hover:!shadow-[0_0_10px_1px_#4CAF50]">
                      Download
                      <img src={download} alt="Download Icon" className="ml-2 w-8 h-8 mb-2 " /> 
                    </a>
                   
                 
                </div>

                  <div className="flex ml-20 md-mx:order-1 py-4 z-0 items-center justify-center md-mx:ml-1 sm-mx:mx-4 xs-mx:ml-11">
                  <AnimatedImage  src={img} alt="Profile" />
                  
                   
                   </div>

                </div>
            </div>
        </>
    )
}
export default Home;
