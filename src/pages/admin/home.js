import React from "react";
import { isAuthenticated } from "../../auth";
const AdminHomePage = () => {
  const { user } = isAuthenticated();
  if (user === undefined || user === null || user.role !== 1) {
    window.location = "/404";
  }
  return <div>Hello Admin</div>;
};

export default AdminHomePage;
