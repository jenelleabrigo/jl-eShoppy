import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import {Product} from "."
import { setProducts } from '../redux/actions/productActions';
import { Dropdown } from 'flowbite-react'

export default function ProductList() {
    const [category, setCatergory] = useState("All Items")
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log(err)
            })
            dispatch(setProducts(res.data))
    }

    const getCatergory = (e) => {
      setCatergory(e.target.attributes.value.nodeValue)
    }

    useEffect(() => {
      fetchProducts();
    }, [])
    

  return (
    <>
      <div className='flex items-center justify-end mb-7'>
        <Dropdown label={category} style={{backgroundColor: "#82015a", border: "2px solid #798c97"}}>
          <Dropdown.Item><p value="All Items" onClick={getCatergory}>All Items</p></Dropdown.Item>
          <Dropdown.Item><p value="Men's Clothing" onClick={getCatergory}>Men's Clothing</p></Dropdown.Item>
          <Dropdown.Item><p value="Jewelery" onClick={getCatergory}>Jewelery</p></Dropdown.Item>
          <Dropdown.Item><p value="Electronics" onClick={getCatergory}>Electronics</p></Dropdown.Item>
          <Dropdown.Item><p value="Women's Clothing" onClick={getCatergory}>Women's Clothing</p></Dropdown.Item>
        </Dropdown>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6'>
          <Product category={category} /> 
      </div>
    </>
  )
}
