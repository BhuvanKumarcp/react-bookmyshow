import React from "react";

const Movielayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
      <MovieNavbar />
        <Component {...props} />
      </div>
    );
  };

export default Movielayout;
