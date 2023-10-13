"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [itemCreated, setItemCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };
    console.log(newItem);

    setItemCreated(true);

    setName("");
    setQuantity("");
    setCategory("");

    setItemCreated(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main class="flex justify-center">
        <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        {itemCreated && (
          <div className="    ">
            Item Added
          </div>
        )}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md justify-between ">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Item Info
          </h1>
          <form onSubmit={handleSubmit}>
            <label>
              <span className="text-gray-800">Item Name:</span>
              <input required onChange={handleNameChange} value={name} className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" />
            </label>

            <label>
              <span className="text-gray-800">Number of Items</span>
              <input type="number" required onChange={handleQuantityChange} value={quantity} className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" />
            </label>

            <select onChange={handleCategoryChange} className="ml-1 border-2 border-black-300 p-2 rounded-lg font-sans text-black">
                <option value="produce" selected="">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            <button type="submit" class="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white" fdprocessedid="znirgw">+</button>
          </form>
        </div>
        </div>
    </main>
  );
}