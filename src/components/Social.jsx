import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandInstagram} from "@tabler/icons-react";
import React from 'react';


const Social = () => {
    const socialLinks = [
        { link: "https://github.com/FardeenAzim", icon: IconBrandGithub },
        { link: "https://www.linkedin.com/in/fardeen-azim", icon: IconBrandLinkedin },
        { link: "https://leetcode.com/u/Fardeen_Azim/", icon: IconBrandLeetcode }
        // { link: "https://instagram.com/azim.fardeen/", icon: IconBrandInstagram }
    ];
    const socialIcons=socialLinks.map((socialLink => {
        return  <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor
        hover:-translate-x-2 transition-transform duration-300 ease-in-out">
            <socialLink.icon className="-rotate-90" size={30}/>
        </a>
    }))
  return (
    <div className="flex item-center text-black gap-8 fixed bottom-[180px] -left-[180px] rotate-90 z-40 sm-mx:hidden">
      {socialIcons}
    <hr className="border-[5px] w-60 rounded-full font-bold bg-black-400 border-black-400 mt-2.5"/>
  </div>
  )
}

export default Social;
