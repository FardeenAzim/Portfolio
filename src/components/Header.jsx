import React, { useState, useEffect } from 'react';
import SideBar from "./SideBar"

const links=["Home", "Skills", "Projects", "Education", "Contact"];
const navLinks=()=>{
  return links.map((link, index)=>{
    return <a key={link.id} className="text-textColor text-2xl mt-4 mr-4 lg-mx:text-textColor 
    font-mono hover:text-primaryColor " href={`#${link}`}>
      <span className="text-textColor hover:text-primaryColor">0{index+1}.
      </span>{link}</a>
  })
}
 
const Header = () => {
   const [show, setShow] = useState(true);
   const [lastScrollY, setlastScrollY] = useState(0);
   const controlNavbar = () => {
          if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
          else setShow(true);
          setlastScrollY(window.scrollY);
   }
   useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return ()=> window.removeEventListener('scroll', controlNavbar);
   })

  return (
    <nav>
    <div name="Header" className="items-center display-flex font-bold pt-1">
      <div className={`flex ${show?"":"hidden"} fixed w-full z-40 justify-between pb-7`}>
            <div>
              <h1 className="font-semibond text-green-300 ml-3 text-4xl mt-3 cursor-pointer">
                F<span className="text-4xl">A</span>
              </h1>
            </div>
            <div className="flex gap-4 lg-mx:!hidden">
                 {navLinks()}
            </div>
         <SideBar />
          </div>
        </div>
  </nav>
  )
}

export default Header;
export {navLinks};

