import React from "react";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  return (
    <div className="p-4 w-full h-full">
      <Router />
      <ToastContainer
        className="text-2xl"
        position="top-center"
        autoClose={0}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
