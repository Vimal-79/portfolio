import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaGithub   } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const shortLinks = [
    { name: 'GitHub', href: 'https://github.com/vimal-79', icon: <FaGithub size={34} />, hoverClass: 'hover:text-gray-400' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/vimal-kumar-3b618935b/', icon: <FaLinkedinIn size={34} />, hoverClass: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://www.instagram.com/thewolfco', icon: <FaInstagram size={34} />, hoverClass: 'hover:text-pink-500' },
    { name: 'Email', href: 'mailto:vimal.kumar.799@gmail.com', icon: <CiMail size={34} />, hoverClass: 'hover:text-red-500' },
];

function Hero() {
    return (
        <section id="home" className="scroll-mt-0 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-white selection:bg-transparent sm:px-6 lg:px-8">
            <h1 className="mt-8 text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-linear-to-r from-[#F96D15] from-25% via-[#F68E33] via-40% to-[#805bd0] bg-clip-text text-transparent">
                Frontend Web Developer
            </h1>

            <div className="mt-6 h-1 w-32 rounded-full border-4 border-white sm:w-40" />

            <p className="mt-6 max-w-3xl text-center text-base leading-7 sm:text-lg md:text-xl lg:text-2xl">
                I create interactive and responsive web applications using modern technologies.
            </p>
            <p className="mt-3 max-w-3xl text-center text-base leading-7 sm:text-lg md:text-xl lg:text-2xl">
                Passionate about developing responsive web interfaces using React and writing clean, maintainable code.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center *:cursor-pointer">
                <button className="rounded-full bg-linear-to-r from-blue-500 to-green-500 px-6 py-3 text-sm font-bold text-white transition hover:scale-105 sm:px-8 sm:py-4 sm:text-lg">
                    Know My Work
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-gray-300/30 px-6 py-3 text-sm font-bold text-white transition hover:scale-105 sm:px-8 sm:py-4 sm:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                        <line x1="17.5" x2="30.5" y1="22.5" y2="22.5" />
                        <line x1="17.5" x2="26.5" y1="29.5" y2="29.5" />
                        <path d="M22.1,42.5h13.4c1.7,0,3-1.3,3-3v-25h-7c-1.1,0-2-0.9-2-2v-7" />
                        <path d="M24,5.5H12.5c-1.7,0-3,1.3-3,3v31c0,1.7,1.3,3,3,3h3.9" />
                        <line x1="38.5" x2="29.5" y1="14.5" y2="5.5" />
                    </svg>
                    <span>Download CV</span>
                </button>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-5">
                {shortLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition duration-300 hover:scale-110 ${link.hoverClass}`}
                        >
                            {link.icon}
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="mt-6 bg-linear-to-r from-yellow-400 to-purple-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent sm:text-base">
                Scroll to explore
            </p>
        </section>
    )
}

export default Hero