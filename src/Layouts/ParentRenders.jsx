import React from "react";
import { Outlet } from "react-router-dom";
import Navbar  from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

function ParentRenders() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTopButton/>
    </>
  );
}

export default ParentRenders;
