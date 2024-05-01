import React from 'react'
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import regodev from "../../public/images/my-img.jpg";
import Text from './text';
import { BsThreeDotsVertical } from "react-icons/bs";



const Clients = () => {
  return (
    <div>
      <div className="clients mt-10 bg-white h-[440px] w-full py-5">
        <div className="top px-5 flex justify-between items-center">
          <h1 className="text-xl text-blue-950 font-semibold">All tickets</h1>

          <div className="div flex justify-between items-center gap-5 opacity-50">
            <div className="flex gap-1 items-center">
              <FaSortAmountUp />
              <h2 className="font-semibold text-md">Sort</h2>
            </div>

            <div className="flex gap-1 items-center">
              <FaFilter />
              <h2 className="font-semibold text-md">Filter</h2>
            </div>
          </div>
        </div>
        <div className="types px-5 flex justify-between mt-[2%]">
          <h3 className="text-md text-semibold text-gray-500 mr-[15%]">
            Ticket details
          </h3>
          <h3 className="text-md text-semibold text-gray-500">Customer name</h3>
          <h3 className="text-md text-semibold text-gray-500">Date</h3>
          <h3 className="text-md text-semibold text-gray-500 mr-[10%]">
            Priority
          </h3>
        </div>

        <hr className="mt-2" />

        <div className="client px-5 py-3 flex items-center hover:bg-slate-100">
          <img className="w-[4%] h-[2%] rounded-full" src={regodev} alt="" />

          <div className="name flex flex-col gap-[1px] ml-3 mr-[170px]">
            <Text text="Contact Email not Linked" />
            <Text title="Updated 1 day ago" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[175px]">
            <Text text="Regodev" />
            <Text title="on 24.05.2019" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[90px]">
            <Text text="May 26, 2019" />
            <Text title="6:30 PM" />
          </div>

          <button className="uppercase bg-red-600 text-white font-semibold rounded-2xl px-3 py-1 text-sm mr-[6%]">
            High
          </button>

          <BsThreeDotsVertical className="pointer" />
        </div>

        <div className="client px-5 py-3 flex items-center hover:bg-slate-100">
          <img className="w-[4%] h-[2%] rounded-full" src={regodev} alt="" />

          <div className="name flex flex-col gap-[1px] ml-3 mr-[170px]">
            <Text text="Contact Email not Linked" />
            <Text title="Updated 1 day ago" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[175px]">
            <Text text="Regodev" />
            <Text title="on 24.05.2019" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[90px]">
            <Text text="May 26, 2019" />
            <Text title="6:30 PM" />
          </div>

          <button className="uppercase bg-yellow-400 text-white font-semibold rounded-2xl px-3 py-1 text-sm mr-[6%]">
            Low
          </button>

          <BsThreeDotsVertical className="pointer" />
        </div>

        <div className="client px-5 py-3 flex items-center hover:bg-slate-100">
          <img className="w-[4%] h-[2%] rounded-full" src={regodev} alt="" />

          <div className="name flex flex-col gap-[1px] ml-3 mr-[170px]">
            <Text text="Contact Email not Linked" />
            <Text title="Updated 1 day ago" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[175px]">
            <Text text="Regodev" />
            <Text title="on 24.05.2019" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[90px]">
            <Text text="May 26, 2019" />
            <Text title="6:30 PM" />
          </div>

          <button className="uppercase bg-red-600 text-white font-semibold rounded-2xl px-3 py-1 text-sm mr-[6%]">
            High
          </button>

          <BsThreeDotsVertical className="pointer" />
        </div>

        <div className="client px-5 py-3 flex items-center hover:bg-slate-100">
          <img className="w-[4%] h-[2%] rounded-full" src={regodev} alt="" />

          <div className="name flex flex-col gap-[1px] ml-3 mr-[170px]">
            <Text text="Contact Email not Linked" />
            <Text title="Updated 1 day ago" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[175px]">
            <Text text="Regodev" />
            <Text title="on 24.05.2019" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[90px]">
            <Text text="May 26, 2019" />
            <Text title="6:30 PM" />
          </div>

          <button className="uppercase bg-green-600 text-white font-semibold rounded-2xl px-3 py-1 text-sm mr-[4%]">
            Normal
          </button>

          <BsThreeDotsVertical className="pointer" />
        </div>

        <div className="client px-5 py-3 flex items-center hover:bg-slate-100">
          <img className="w-[4%] h-[2%] rounded-full" src={regodev} alt="" />

          <div className="name flex flex-col gap-[1px] ml-3 mr-[170px]">
            <Text text="Contact Email not Linked" />
            <Text title="Updated 1 day ago" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[175px]">
            <Text text="Regodev" />
            <Text title="on 24.05.2019" />
          </div>

          <div className="name flex flex-col gap-[1px] mr-[90px]">
            <Text text="May 26, 2019" />
            <Text title="6:30 PM" />
          </div>

          <button className="uppercase bg-red-600 text-white font-semibold rounded-2xl px-3 py-1 text-sm mr-[6%]">
            High
          </button>

          <BsThreeDotsVertical className="pointer" />
        </div>
      </div>
    </div>
  );
}

export default Clients