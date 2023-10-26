// week6/page.js
"use client"
import React, { useState } from 'react';
import ItemList from './item-list'; // Import the ItemList component
import NewItem from './new-item'; // Import the NewItem component
import itemsData from './items.json'; // Import the items data from items.json

const Page = () => {
  // Initialize state variable for items
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-gray-200 min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;