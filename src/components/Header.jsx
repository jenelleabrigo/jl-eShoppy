import React, { useState } from "react";
import logo from "../assets/logo-eShoppy.png";
import cart from "../assets/icn-cart.png";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/actions/toggleAction";

export default function Header() {
  const cartProducts = useSelector((state) => state.cart.cart);
  // let simplifiedCart = cartProducts.filter( (ele, ind) => ind === cartProducts.findIndex( elem => elem.id === ele.id))
  const cartState = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggle());
  };

  return (
    <div className="flex items-center justify-between w-full md:px-[10rem] p-4">
      <h1 className="w-[10rem] md:w-[15rem]">
        <a href="/" className="inline-block">
          <img src={logo} alt="eShoppy" />
        </a>
      </h1>
      <div className="relative">
        <button className="relative" onClick={toggleCart}>
          <p
            className="bg-primary rounded-full md:w-[1.5rem] md:h-[1.5rem] w-[1rem]
h-[1rem] text-white border-2 border-secondary flex items-center justify-center absolute -right-[0.5rem] -top-[0.5rem] text-xs"
          >
            {cartProducts?.length}
          </p>
          <img src={cart} alt="" className="md:w-auto w-[rem]" />
        </button>
        <div className="absolute right-0">{cartState ? <Cart /> : ""}</div>
      </div>
    </div>
  );
}
