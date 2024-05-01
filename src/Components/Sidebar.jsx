import React from "react";
import logo from "../../public/images/logo.svg";
import overview from "../../public/images/overview.svg";
import tickets from "../../public/images/tickets.svg";
import ideas from "../../public/images/ideas.svg";
import contacts from "../../public/images/contacts.svg";
import agents from "../../public/images/agents.svg";
import articles from "../../public/images/articles.svg";
import settings from "../../public/images/settings.svg";
import subscription from "../../public/images/subscription.svg";

const Sidebar = () => {
  return (
    <div className="bg-gray-700 h-screen w-[28%] ">
      <div className="container mx-auto py-10 ">
        <div className="sidebar ">
          <div className="top px-12">
            <div className="logo flex items-center gap-4">
              <img src={logo} alt="" />
              <h1 className="text-gray-300 font-semibold text-xl">
                Dashboard Kit
              </h1>
            </div>
          </div>

          <div className="links flex flex-col mt-7">
            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={overview} alt="" />
              <h2 className="text-gray-300 font-semibold">Overview</h2>
            </div>

            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={tickets} alt="" />
              <h2 className="text-gray-300 font-semibold">Tickets</h2>
            </div>

            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={ideas} alt="" />
              <h2 className="text-gray-300 font-semibold">Ideas</h2>
            </div>

            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={contacts} alt="" />
              <h2 className="text-gray-300 font-semibold">Contacts</h2>
            </div>

            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={agents} alt="" />
              <h2 className="text-gray-300 font-semibold">Agents</h2>
            </div>

            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={articles} alt="" />
              <h2 className="text-gray-300 font-semibold">Articles</h2>
            </div>

            <div className="h-[2px] w-full bg-gray-600 mt-2 mb-2"></div>

            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={settings} alt="" />
              <h2 className="text-gray-300 font-semibold">Settings</h2>
            </div>

            <div className="link flex gap-6 px-8 py-4 duration-300 transition-all hover:border-l-gray-300 border-gray-700  border-l-[3px] border-solid hover:bg-gray-600">
              <img src={subscription} alt="" />
              <h2 className="text-gray-300 font-semibold">Subscriptions</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
