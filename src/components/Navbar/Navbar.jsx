import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoImage from '../../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="logo" className="h-10" />
          </div>

          {/* Hamburger Menu (มือถือ) */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* เมนู (desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-gray-800">
            <a href="#" className="hover:text-purple-600 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Post</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Admin Panel</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Report Page</a>
            <a href="#" className="hover:text-purple-600 transition-colors">About us</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          {/* ปุ่ม Login / Sign up (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/login">
              <button className="px-4 py-2 rounded-lg border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors">
                Login
              </button>
            </a>
            <a href="/signup">
              <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium shadow-sm hover:bg-purple-700 transition-colors">
                Sign Up
              </button>
            </a>
          </div>
        </div>

        {/* เมนู (mobile dropdown) */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 text-gray-800">
            <a href="#" className="block hover:text-purple-600 transition-colors">Dashboard</a>
            <a href="#" className="block hover:text-purple-600 transition-colors">Post</a>
            <a href="#" className="block hover:text-purple-600 transition-colors">Admin Panel</a>
            <a href="#" className="block hover:text-purple-600 transition-colors">Report Page</a>
            <a href="#" className="block hover:text-purple-600 transition-colors">About us</a>
            <a href="#" className="block hover:text-purple-600 transition-colors">Contact</a>
            <div className="pt-4 space-y-2">
              <a href="/login">
                <button className="w-full px-4 py-2 rounded-lg border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors">
                  Login
                </button>
              </a>
              <a href="/signup">
                <button className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-medium shadow-sm hover:bg-purple-700 transition-colors">
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}