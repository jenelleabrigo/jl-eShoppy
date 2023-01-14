import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toggle } from "../redux/actions/toggleAction";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cart);
  const cartTotalPrice = cartProduct
    .map((product) => {
      return product.price * product.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const toggleCart = () => {
    dispatch(toggle());
  };

  const clearCart = () => {
    localStorage.removeItem("myCart");
  };

  return (
    <div className="mx-4 xl:mx-[18rem]">
      <div className="w-full grid grid-cols-4 text-center items-center justify-between text-lg lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white border-b p-4">
        <p></p>
        <p></p>
        <p>Qty</p>
        <p>Total</p>
      </div>
      {cartProduct.map((product) => (
        <div key={product.id} className="p-4 w-full grid grid-cols-4 text-center items-center justify-center gap-x-6 [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-4 hover:bg-gray-100">
          <div className="max-w-[5rem]">
            <img className="rounded-t-lg" src={product.image} alt="" />
          </div>
          <div className="grow flex flex-col justify-between text-xs text-left">
            <h5 className="mb-1 break-words font-bold tracking-tight text-gray-900 dark:text-white max-sm:truncate-2">{product.title}</h5>
            <div>
              <p>{product.category}</p>
              <h3 className="font-bold">$ {product.price}</h3>
            </div>
          </div>
          <p>{product.quantity}x</p>
          <h3 className="font-bold">$ {product.price * product.quantity}</h3>
        </div>
      ))}
      <div className="w-full text-md text-right lg:text-l xl:text-xl font-bold tracking-tight text-primary dark:text-white p-4">
        <p>
          Total <span className="mx-8">${cartTotalPrice.toFixed(3)}</span>
        </p>
      </div>
      <div className="text-right p-4 mx-8">
        <NavLink to={`/success`} onClick={clearCart} className={`btn text-center text-sm mt-1 py-1 px-8 w-full ${cartProduct.length === 0 ? "opacity-50 pointer-events-none" : ""}`}>
          Place Order
        </NavLink>
      </div>
    </div>
  );
}
