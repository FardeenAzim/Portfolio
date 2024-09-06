import React from 'react'
import { Info } from '../Data';
import Social from './Social';
import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandInstagram} from "@tabler/icons-react";

function Footer () {
  const socialLinks = [
    { link: "https://github.com/FardeenAzim", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/fardeen-azim", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/Fardeen_Azim/", icon: IconBrandLeetcode }
    // { link: "https://instagram.com/azim.fardeen/", icon: IconBrandInstagram }
];
const socialIcons=socialLinks.map((socialLink => {
    return  <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor
    hover:scale-105 transition-transform duration-300 ease-in-out">
        <socialLink.icon className="rotate-60" size={30}/>
    </a>
}))
  
  return (
    <footer className="py-2">
    <div className="mt-10 mb-5 font-mono flex flex-col gap-2 items-center">
      <div className="text-3xl md-mx-2xl text-textColor font-bold">{Info.name}</div>
        <div className="md-mx:flex gap-8 sm-mx:gap-6 justify-center flex py-4 text-textColor">{socialIcons}</div>
      <div className="text-textColor text-xl md-mx:lg sm-mx:text-base xs-mx:sm sx-sm:flex flex-col items-center py-1">
        Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="sm-mx:hidden xs-mx:hidden">|</span>
        <span className="xs-mx:hidden xs-mx:hidden"> All Rights Reserved</span>
      </div>
    </div>
    </footer>
  )
}

export default Footer;