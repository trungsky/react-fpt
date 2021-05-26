import React from "react";
import NavAdmin from "../components/NavAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <NavAdmin children={children} />
    </div>
  );
};

export default LayoutAdmin;
