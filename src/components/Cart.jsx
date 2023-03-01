import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts, increaseQty, decreaseQty } from "../redux/actions/productActions";
import { NavLink } from "react-router-dom";
import { toggle } from "../redux/actions/toggleAction";

export default function Cart() {
  const cartProduct = useSelector((state) => state.cart.cart);
  const toggleCart = () => {
    dispatch(toggle());
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 max-h-[20rem] overflow-y-auto w-[15rem]">
      {cartProduct?.length !== 0 ? <CartItems /> : <p className="text-xs text-gray-700 text-center py-4">No items in your cart</p>}

      <NavLink to={`/checkout`} onClick={toggleCart} className={`btn text-center text-sm mt-1 p-2 w-full ${cartProduct?.length === 0 ? "opacity-50 pointer-events-none" : ""}`}>
        Checkout
      </NavLink>
    </div>
  );
}

function CartItems() {
  const cartProduct = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const increase = (product) => {
    dispatch(increaseQty(product.id));
  };

  const decrease = (product) => {
    dispatch(decreaseQty(product.id));
  };

  return (
    <>
      {cartProduct?.map((product) => (
        <div key={product.id} className="w-full flex items-center justify-center gap-x-2 [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-4 hover:bg-gray-100">
          <NavLink to={`/product/${product.id}`} className="flex items-center justify-center gap-x-2" onClick={() => dispatch(toggle())}>
            <div className="max-w-[3rem]">
              <img className="rounded-t-lg" src={product.image} alt="" />
            </div>
            <div className="grow flex flex-col justify-between text-xs">
              <h5 className="mb-1 break-words font-bold tracking-tight text-gray-900 dark:text-white truncate-2">{product.title}</h5>
              <div>
                <p>{product.category}</p>
                <h3 className="font-bold">$ {product.price * product.quantity}</h3>
              </div>
            </div>
            <p>{product.quantity}x</p>
          </NavLink>
          <div>
            <button type="button" className="btn p-[0.1rem] w-[1rem] flex justify-center items-center mb-2" onClick={() => increase(product)}>
              +
            </button>
            <button type="button" className="btn p-[0.1rem] w-[1rem] flex justify-center items-center" onClick={() => decrease(product)}>
              -
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
