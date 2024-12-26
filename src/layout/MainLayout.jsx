import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
