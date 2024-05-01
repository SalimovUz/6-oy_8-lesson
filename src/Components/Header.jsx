import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import regodev from "../../public/images/my-img.jpg"
import "../App.css"


const Header = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl text-blue-950 font-bold">Tickets</h1>

        <div className="right flex items-center gap-6">

          <div className="person flex gap-3 items-center justify-end">
          <IoSearch className='w-10' />
          <IoMdNotifications className='w-10' />

          <span className="h-8 w-[2px] bg-gray-500"></span>
            <h3 className="text-xl font-semibold text-blue-900">
              Salimov To'lqin
            </h3>

            <img className='regodev' src={regodev} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header