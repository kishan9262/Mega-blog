import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Conf/Store/authslice";
import authservice from "../../appwrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logouthandeler = () => {
    authservice.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logouthandeler}
      className="px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
