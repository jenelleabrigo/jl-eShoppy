import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts, removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import { Rating } from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log(err);
    });
    dispatch(selectedProduct(res.data));
  };

  const addToCart = (product) => {
    const item = { ...product, quantity: 1 };
    dispatch(cartProducts(item));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="flex gap-x-16 max-w-fit m-auto">
          <div className="w-full h-full max-w-[20rem]">
            <img src={product.image} alt="" />
          </div>
          <div className="max-w-lg">
            <h1 className="mb-5 grow text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h1>
            <div className="flex items-center justify-between">
              <div>
                <Rating>
                  {[...Array(Math.round(product.rating.rate))].map((e, i) => {
                    return <Rating.Star key={i} />;
                  })}
                </Rating>
                <p>{product.category}</p>
              </div>
              <h3 className="font-bold text-4xl">$ {product.price}</h3>
            </div>
            <p className="my-8 leading-normal">{product.description}</p>
            <button type="button" className="btn text-center mt-5 inline-block" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <div className=" mt-10">
              <NavLink to={"/"} className="text-secondary hover:text-primary transition duration-300">
                ← Back to product list
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
