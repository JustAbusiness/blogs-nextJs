'use client'
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24 gap-4">
      <div className="text-3xl font-semibold text-blue-500">HomePage</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor
        aut ad sunt repellendus quas nam id veniam in maiores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor
        aut ad sunt repellendus quas nam id veniam in maiores.
      </p>

      <Link href='/dashboard'>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Let see my list
        </button>
      </Link>
    </main>
  );
}
