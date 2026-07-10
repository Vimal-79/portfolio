"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'Home', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg> },
  { label: 'About', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
  { label: 'Skills', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
  { label: 'Projects', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg> },
  { label: 'Contact', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 pt-4 backdrop-blur-sm selection:bg-transparent">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-gray-300/20 px-4 pb-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full">
            <Image src="/codinglogo.jpg" alt="Logo" width={44} height={44} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">Vimal Kumar</p>
            <p className="text-sm text-white/70">Front-End Web Developer</p>
          </div>
        </div>

        <ul className="hidden flex-wrap items-center justify-center gap-2 rounded-full border border-gray-300/30 bg-black/10 p-1 text-gray-300 md:flex">
          {navItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition hover:bg-gray-300/20">
              {item.icon({ className: 'text-gray-300' })}
              <span>{item.label}</span>
            </li>
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
            <a key={item.label} href="#" className="flex items-center gap-2 rounded-xl border border-gray-300/20 bg-white/5 px-4 py-3">
              {item.icon({ className: 'text-gray-300' })}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar