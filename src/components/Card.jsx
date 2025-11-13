import React from 'react';

function Card({ product }) {
  return (
    <div className='border border-gray-300 rounded-xl  bg-white flex flex-col justify-center items-center p-6'>
      <img
        className='w-40 h-40 object-contain mb-4'
        src={product.image}
        alt={product.title}
      />
      <div className='text-center'>
        <h1 className='font-semibold text-lg mb-2 line-clamp-2'>{product.title}</h1>
        <h3 className='text-gray-600 mb-3 text-base font-normal'>{`$ ${product.price} USD`}</h3>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 shadow font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;
