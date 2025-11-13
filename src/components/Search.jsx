import React from 'react'

function Search({allProducts,setAllProductData}) {
    function handleSearch(searchedText){
        setAllRestData( allProducts.filter((item)=>item.title.toLowerCase().includes(searchedText.toLowerCase())))
    }
  return (
    <div>
        <input className=' m-8 border text-2xl rounded-2xl p-2' placeholder='Enter name here...' onChange={(e)=>handleSearch(e.target.value)} type="text" />
    </div>
  )
}

export default Search