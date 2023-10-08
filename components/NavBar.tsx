'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import '../src/app/globals.css'
import Image  from 'next/image';

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div>
           <Image alt="Vercel Logo" width={150} height={120} src="/vercel.svg"></Image>
        </div>
       <div>
        <Link href="/">Home</Link>
        <Link style={{ marginLeft: "10px"}} href="/about">About</Link>
        <Link  style={{ marginLeft: "10px"}}  className="ml-2" href="/dashboard">Setting</Link>
        <button style={{ marginLeft: "10px"}} onClick={() => router.push("/dashboard")}> Dashboard</button>
       </div>
      </div>
    </nav>
  )
}

export default NavBar