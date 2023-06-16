import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-[240px] h-screen bg-dark flex flex-col items-start px-6 box-border">
      <Link to={"/"} className="text-light2 text-2xl font-bold py-10">
        <span className="text-3xl me-2">@</span> kasir
      </Link>
      <ul className="flex flex-col text-light2 items-start gap-7 py-5 font-semibold text-lg">
        <Link to={"/"} className="flex flex-row gap-4 items-center">
          <ion-icon name="grid-outline"></ion-icon>
          <span>Overview</span>
        </Link>
        <Link to={"/product"} className="flex flex-row gap-4 items-center">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <span>Product</span>
        </Link>
        <li className="flex flex-row gap-4 items-center">
          <ion-icon name="copy-outline"></ion-icon>
          <span>Orders</span>
        </li>
      </ul>
      <div className="w-5/6 border text-light2 h-0 my-16"></div>
    </div>
  );
};

export default Navbar;
