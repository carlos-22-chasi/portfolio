"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';



const navLinks = [
  {title: "About", path: "#about"},
  {title: "Projects", path: "#projects"},
  {title: "Contact", path: "#contact"}

]
const NavBar = () => {
  const[navbarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-80'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-3'>
        <Link href="/" className='text-2xl md:text-4xl font-semibold text-primary-700 italic'>
        CarlosChasi22
        </Link>
        {/* mobile verion */}
        <div className='moblie-menu block md:hidden'>
          {
            navbarOpen ? (
              <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5'/>
              </button>
            ) : (
              <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5'/>
              </button>
            )
          }
        </div>
        {/* big window size version */}
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {
              navLinks.map((link, index) => {
                return(
                  <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
                );
              })
            }
          </ul>
        </div>
      </div>
      {/* Mobile dropdown menu: Only show if navbarOpen is true and screen size is small */}
      {navbarOpen && (
        <div className="md:hidden">
          <MenuOverlay links={navLinks} />
        </div>
      )}
    </nav>
  )
}

export default NavBar