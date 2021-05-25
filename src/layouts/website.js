import React from "react";
import Nav from "../components/Nav";

const LayoutWebsite = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default LayoutWebsite;
