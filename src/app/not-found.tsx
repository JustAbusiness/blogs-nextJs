'use client'
import Link from 'next/link';
import React from 'react'
import '../app/globals.css'

const NotFound = () => {
  return (
    <div>
        <div> 404 Not Found</div>
        <Link href="/" className="text-green-500 bg-transparent hover:bg-blue-50 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Go Back Home Page
        </Link>
    </div>
  )
}

export default NotFound;