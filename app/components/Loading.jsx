import React from "react";
import "./loader.css";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
        <span className="loaders"></span>
        <span className="loaders"></span>
        <span className="loaders"></span>
    </div>
  );
};

export default Loading;
