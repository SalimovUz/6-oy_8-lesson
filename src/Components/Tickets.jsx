import React from "react";
import Header from "./Header";
import Clients from "./Clients";

const Tickets = () => {
  return (
    <div className="container mx-auto py-8 px-8 bg-slate-200" >
      <div>
        <Header />
        <Clients/>
      </div>
    </div>
  );
};

export default Tickets;
