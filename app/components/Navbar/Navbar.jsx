'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CloseOutlined } from '@ant-design/icons'
import NavbarMenu from './NavbarMenu'
import './style.css'
import { NAVBAR_LINKS } from './contants.js'

function Navbar () {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='navbarWrapper'>
      <nav
        className='navbarContainer shadow-xl shadow-gray-400'
        role='navigation'
        aria-label='Main Navigation'
      >
        <div className='flex justify-between items-center pr-4 md:pr-10'>
          {/* Logo */}
          <Link href='/' aria-label='Navigate to Home'>
            <Image
              src='/assets/srzYapiLogo.png'
              alt='SRZ Yapı Logo'
              width={130}
              height={130}
              className='srzLogoContiner cursor-pointer'
              priority
            />
          </Link>

          {/* Hamburger Menu */}
          <div
            className='menuLogo'
            onClick={handleNav}
            aria-label='Toggle navigation menu'
            role='button'
            tabIndex={0}
          >
            <RxHamburgerMenu size={25} />
          </div>

          {/* Desktop Menu */}
          <NavbarMenu />
        </div>
      </nav>

      {/* Mobile Menu */}
      {/*  dark:bg-slate-800 */}
      <div
        className={`${
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-50 p-10 z-[1000]'
            : 'fixed left-[-100%] top-0 p-10 bg-slate-50'
        }`}
        role='dialog'
        aria-modal='true'
        aria-labelledby='mobile-menu-title'
      >
        <div className='flex w-full items-center pt-3'>
          {/* Close Button */}
          {/* dark:text-white */}
          <button
            onClick={handleNav}
            className='closeIcon rounded-full shadow-lg ml-auto shadow-gray-400 p-3 cursor-pointer text-black'
            aria-label='Close navigation menu'
          >
            <CloseOutlined />
          </button>
        </div>

        <div className='py-4 flex flex-col'>
          <h2 id='mobile-menu-title' className='sr-only'>
            Mobile Navigation Menu
          </h2>
          <ul className='uppercase'>
            {NAVBAR_LINKS.map(link => (
              // dark:text-white
              <li
                key={link.href}
                onClick={() => setNav(false)}
                className='py-4 text-sm text-black'
              >
                <Link href={link.href}>
                  <div aria-label={`Navigate to ${link.label}`}>
                    {link.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
