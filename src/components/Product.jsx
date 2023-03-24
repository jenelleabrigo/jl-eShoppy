import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Rating } from "flowbite-react";
import { cartProducts } from "../redux/actions/productActions";
import cart from "../assets/icn-add.png";

export default function Product({ category }) {
  const products = useSelector((state) => state.allProducts.products);
  const [renderProducts, setRenderProducts] = useState(products);
  const dispatch = useDispatch();

  const filteredProducts = products.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });

  const check = () => {
    try {
      if (Object.keys(filteredProducts).length === 0) {
        setRenderProducts(products);
      } else {
        setRenderProducts(filteredProducts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = (product) => {
    try {
      dispatch(cartProducts({ ...product, quantity: 1 }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    check();
  }, [category, products]);

  return (
    <>
      {renderProducts.map((product) => {
        return (
          <div key={product.id} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-[12rem] md:h-[15rem] m-auto p-4" src={product.image} alt={product.title} loading="lazy" />{" "}
            <div className="p-5 grow flex flex-col justify-between">
              <h5 className="mb-2 grow text-lg break-words lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
              <div>
                <div>
                  <Rating>
                    {[...Array(Math.round(product.rating.rate))].map((e, i) => {
                      return <Rating.Star key={i} />;
                    })}
                  </Rating>
                  <p>{product.category}</p>
                </div>
                <h3 className="font-bold">$ {product.price}</h3>
              </div>
              <div className="flex items-center justify-between mt-5 ">
                <NavLink to={`/product/${product.id}`} className="btn text-center mr-6 grow">
                  See details
                </NavLink>
                <button type="button" className="addToCartBtn" onClick={() => addToCart(product)}>
                  <img src={cart} alt="" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
