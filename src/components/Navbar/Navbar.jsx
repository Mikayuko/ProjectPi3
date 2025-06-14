import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoImage from '../../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  const isActive = (path) => location.pathname === path

  const linkClass = (path) => 
    `hover:text-purple-600 transition-colors ${isActive(path) ? 'text-purple-600' : 'text-gray-800'}`

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logoImage} alt="logo" className="h-10" />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/post" className={linkClass('/post')}>Post</Link>
            <Link to="/admin" className={linkClass('/admin')}>Admin Panel</Link>
            <Link to="/report" className={linkClass('/report')}>Report Page</Link>
            <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
          </nav>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium shadow-sm hover:bg-purple-700 transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/" className="block hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/post" className="block hover:text-purple-600 transition-colors">Post</Link>
            <Link to="/admin" className="block hover:text-purple-600 transition-colors">Admin Panel</Link>
            <Link to="/report" className="block hover:text-purple-600 transition-colors">Report Page</Link>
            <Link to="/contact" className="block hover:text-purple-600 transition-colors">Contact</Link>
            <div className="pt-4 space-y-2">
              <Link to="/login" className="block">
                <button className="w-full px-4 py-2 rounded-lg border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors">
                  Login
                </button>
              </Link>
              <Link to="/signup" className="block">
                <button className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-medium shadow-sm hover:bg-purple-700 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

{/* In Login.jsx, update the sign up link */}
<Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
  Sign up now
</Link>

{/* In SignUp.jsx, update the login link */}
<Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
  Login here
</Link>