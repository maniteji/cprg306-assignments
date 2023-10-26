"use client";
import Link from 'next/link'
import ItemList from "./item-list"

export default function Page() {
  return (
    <main>
      <h1 style={{ fontSize:55}}>My Shopping List</h1>
      <ItemList/>

      <Link href="../">Main Page</Link>
    </main>
   
  )
}