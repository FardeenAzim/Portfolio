import React, { useState } from 'react';
import iconx from '../assets/iconx.png'; 
import iconmenu from '../assets/iconmenu.png'; 
import { navLinks } from './Header';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      {/* Button to toggle the drawer */}
      <img
        src={isOpen ? iconx : iconmenu} 
        onClick={toggleDrawer}
        className="sm:block h-[40px] mr-2 lg:hidden bg-blue-500 text-white rounded cursor-pointer"
        alt={isOpen ? 'Close Menu' : 'Open Menu'} 
      />

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-40' : 'opacity-0 pointer-events-none'
        } sm:block lg:hidden`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 z-20 right-0 h-full w-64 bg-gray-600 shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:block lg:hidden`}
      >
        <div className="p-2 mt-30 flex flex-col">
          <div className="flex justify-end">
    
            <img
              src={iconx}
              onClick={toggleDrawer}
              className="h-[40px] cursor-pointer bg-red-300"
              alt="Close Menu"
            />
          </div>
          <h2 className="text-lg font-semibold p-5"></h2>
          <div  className="flex flex-col gap-5">
            {navLinks()}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;



