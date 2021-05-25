import React from "react";
import NavAdmin from "../components/NavAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <NavAdmin />
      <div>{children}</div>
    </div>
  );
};

export default LayoutAdmin;
