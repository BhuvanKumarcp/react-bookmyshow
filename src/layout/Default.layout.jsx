import React from "react";
import Navbar from "../components/MovieNavbar.Component";

const Defaultlayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    );
  };

export default Defaultlayout;
