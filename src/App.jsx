import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* โลโก้ */}
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="h-16" />
      </div>

      {/* เมนู */}
      <nav className="flex gap-6 text-lg font-semibold text-gray-800">
        <a href="#" className="hover:text-purple-600">Dashboard</a>
        <a href="#" className="hover:text-purple-600">Post</a>
        <a href="#" className="hover:text-purple-600">Admin Panel</a>
        <a href="#" className="hover:text-purple-600">Report Page</a>
        <a href="#" className="hover:text-purple-600">About us</a>
        <a href="#" className="hover:text-purple-600">Contact</a>
      </nav>

      {/* ปุ่ม Login / Sign up */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-100">
          Login
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-bold shadow-md hover:bg-purple-700">
          Sign Up
        </button>
      </div>
    </header>
  )
}