import React from 'react'

const Mail = () => {
  return (
    <div className="flex text-blue-700 item-center text-black gap-8 fixed bottom-[200px] -right-[220px] rotate-90 z-40 sm-mx:hidden">

      <a href="mailto:fardeenazim46235@gmail.com" className="font-bold text-lg tracking-widest hover:text-primaryColor
      hover:-translate-x-2 transition-transform duration-300 ease-in-out">fardeenazim46235@gmail.com</a>

      <hr className="border-[5px] w-40 rounded-full font-bold bg-black-400 border-black-400 mt-2.5"/>
    </div>
  )
}

export default Mail;
