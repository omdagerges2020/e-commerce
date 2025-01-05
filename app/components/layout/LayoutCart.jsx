import React from "react";
import Footer from "../Footer";

const LayoutCart = ({ children }) => {
  return <div>
    {children}
    <Footer/>
    </div>;
};

export default LayoutCart;
