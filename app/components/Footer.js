import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-6 text-white backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <ul className="space-y-1">
          <li className="text-sm font-medium text-gray-100">
            &copy; {new Date().getFullYear()} Vimal Kumar
          </li>
          <li className="text-sm text-gray-400">
            created with ❤️ and code
          </li>
        </ul>

        <div className="h-px w-24 rounded-full bg-linear-to-r from-[#F96D15] via-[#F68E33] to-[#805bd0] gradient-shift sm:hidden" />
      </div>
    </footer>
  )
}

export default Footer