import React, { useEffect, useState } from 'react'
import Card from './Card'
import Apicalling from './Apicalling'
import Header from './Header'

function Body() {
  const allProducts = Apicalling();
  const [allProductData, setAllProductData] = useState(allProducts);

  useEffect(() => {
    if (allProducts && allProducts.length) {
      setAllProductData(allProducts);
    }
  }, [allProducts]);

  return (
    <div>
      {/* Pass props to Header */}
      <Header allProducts={allProducts} setAllProductData={setAllProductData} />

      <div className='text-center my-8'>
        <h1 className='text-4xl font-bold'>Store</h1>
        <p className='text-gray-500 text-lg'>Buy with Web3 Wallet</p>
      </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto'>
 { allProductData.map((product)=>{ return( <Card product={product} /> ) }) } </div>
    </div>
  )
}

export default Body
