

Sabse pehle ek naya React project banaya:
npm create vite@latest

Ab TailwindCSS ko install kara:

npm install -D tailwindcss postcss autoprefixer

fir vite.config.js m ye likha

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})




`src/index.css` file mein sab kuch delete karke ye line likhi

@import "tailwindcss";

FakeStore API:  
https://fakestoreapi.com/products

`src/components/Apicalling.jsx` file:

import React, { useEffect, useState } from "react";
import axios from "axios";

function Apicalling() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const API = "https://fakestoreapi.com/products";
    async function calling() {
      let resp = await axios.get(API);
      setAllProducts(resp.data);
    }
    calling();
  }, []);

  return allProducts;
}

export default Apicalling;

---
Components Create Kare

Header.jsx
Body.jsx
Card.jsx


Components ko App.jsx mein Import Kare



npm run dev



Browser mein open--  http://localhost:3000  
