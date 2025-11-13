import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Apicalling() {
    const [allProducts,setAllProducts]= useState([])

    useEffect(()=>{
        const API='https://fakestoreapi.com/products';
        async function calling(){
            let resp = await axios.get(API)
            setAllProducts(resp.data)
        }
        calling()
    },[])

  return allProducts;
}

export default Apicalling