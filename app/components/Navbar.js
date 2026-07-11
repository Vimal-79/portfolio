"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { LuFileCode2, LuHouse, LuCircleUser  } from "react-icons/lu";
import { IoMdCode } from "react-icons/io";
import { FiInfo } from "react-icons/fi";

const navItems = [
  { label: 'Home', id: "home", icon: (props) => < LuHouse {...props} size={16} /> },
  { label: 'About', id: "about", icon: (props) => < FiInfo {...props} size={16} /> },
  { label: 'Skills', id: "skills", icon: (props) => < IoMdCode {...props} size={16} /> },
  { label: 'Projects', id: "projects", icon: (props) => < LuFileCode2 {...props} size={16} /> },
  { label: 'Contact', id: "contact", icon: (props) => < LuCircleUser {...props} size={16} /> },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id) => {
    const target = document.getElementById(id)
    const startY = window.scrollY
    const endY = id === 'home'
      ? target
        ? target.getBoundingClientRect().top + window.scrollY
        : startY
      : target
        ? target.getBoundingClientRect().top + window.scrollY - 96
        : startY
    const duration = 800
    const startTime = performance.now()

    const animateScroll = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 0.5 - Math.cos(progress * Math.PI) / 2
      const currentY = startY + (endY - startY) * eased

      window.scrollTo(0, currentY)

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll)
      }
    }

    window.requestAnimationFrame(animateScroll)
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    setIsOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 pt-4 backdrop-blur-sm selection:bg-transparent">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-gray-300/20 px-4 pb-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full">
            <Image src="/Codinglogo.jpg" alt="Logo" width={44} height={44} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">Vimal Kumar</p>
            <p className="text-sm text-white/70">Front-End Web Developer</p>
          </div>
        </div>

        <ul className="hidden flex-wrap items-center justify-center gap-2 rounded-full border border-gray-300/30 bg-black/10 p-1 text-gray-300 md:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition hover:bg-gray-300/20 cursor-pointer"
            >
              {item.icon({ className: 'text-gray-300' })}
              <span>{item.label}</span>
            </button>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="rounded-full border border-gray-300/30 bg-white/10 p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="7" y2="7" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="17" y2="17" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-2 px-4 pb-4 text-sm text-gray-300 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="flex items-center gap-2 rounded-xl border border-gray-300/20 bg-white/5 px-4 py-3 text-left"
            >
              {item.icon({ className: 'text-gray-300' })}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar