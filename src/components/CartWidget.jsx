import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart className="text-white text-2xl mr-11 hover: cursor-pointer" />
      <span className="absolute top-0 right-0 mt-7 text-center mr-8 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">1</span>
    </div>
  );
};

export default CartWidget;