import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-0 md:ml-5">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
