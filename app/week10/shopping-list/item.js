import React from 'react';


const Item = ({ name, quantity, category }) => {
  return (
    <li className="cursor-pointer border border-sky-500 bg-sky-600 m-3 p-2">
      {/* Item name */}
      <div className="font-semibold text-lg">{name}</div>

      {/* Item category */}
      <div className="text-white-600">{category}</div>

      {/* Item quantity */}
      <div className="text-sm text-white-500">{`Quantity: ${quantity}`}</div>
    </li>
  );
};

export default Item;
