"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCopy } from "react-icons/fa6";
import Hero from "./components/Hero";
import * as Skills from "./skills/info.json";

export default function Home() {
  const skills = Skills.default || [];
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) setVisibleCount(8);
      else if (window.innerWidth >= 768) setVisibleCount(6);
      else setVisibleCount(5);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleSkills = skills.slice(0, visibleCount);
  const hasMore = visibleCount < skills.length;

  const projects = [
    {
      name: "Mini bank",
      description: "A banking application that allows users to manage their accounts, transfer funds, and view transaction history.",
      technologies: ["HTML", "CSS", "JavaScript", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Docker", "JWT", "bycript"],
      image: "/projects/chulbul-bank.png",
      background: "/projects/chulbul-bank-background.png",
      github: "https://github.com/vimal-79/Mini-Bank",
      liveDemo: "https://chulbul-bank.netlify.app"
    },
    {
      name: "bit-link",
      description: "A URL shortening service that allows users to create their own custom short links for long URLs, track click statistics, and manage their links.",
      technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
      image: "/projects/bit-link.png",
      background: "/projects/bit-link-background.webp",
      github: "https://github.com/Vimal-79/BitLink",
      liveDemo: "https://bit-link.netlify.app"
    },
  ]

  return (
    <>
      <Hero />

      {/* ============================================================= About Me ========================================================= */}

      <section className="scroll-mt-24 flex flex-col items-center px-4 py-16 text-white about selection:bg-white/80 selection:text-black/80 sm:px-6 lg:px-8" id="about">
        <h1 className="text-center text-4xl font-bold md:text-6xl bg-linear-to-r from-[#F96D15] from-25% via-[#F68E33] via-40% to-[#805bd0] bg-clip-text text-transparent">About Me</h1>
        <div className="mt-8 mb-6 h-1 w-40 rounded-full bg-white" />

        <div className="my-10 flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex w-full flex-col justify-center gap-6 text-center text-gray-300/80 *:font-medium lg:w-[55%] lg:pr-8 lg:text-left">
            <p className="text-base md:text-[1.05rem]">I&apos;m a passionate developer focused on building clean, efficient, and user-friendly digital experiences. What started as curiosity has grown into a strong interest in solving real-world problems through technology.</p>
            <p className="text-base md:text-[1.05rem]">I enjoy working with modern tools, exploring new concepts, and constantly improving my skills. Whether it&apos;s developing projects or learning something new, I aim to create solutions that are both practical and impactful.</p>
            <p className="text-base md:text-[1.05rem]">My goal is to grow as a developer while building applications that are simple, effective, and meaningful.</p>
          </div>
          <div className="w-full max-w-sm overflow-hidden rounded-2xl border-4 select-none border-gray-300/30 lg:w-[35%]">
            <Image src="/vimal.jpeg" alt="vimal&apos;s image" width={400} height={400} className="[-webkit-user-drag:none] [user-drag:none]" />
          </div>
        </div>
      </section>

      {/* ========================================================= Skills & Technologies ========================================================= */}

      <section className="scroll-mt-24 flex flex-col items-center px-6 py-16 text-white skills_&_Technologies selection:bg-white/80 selection:text-black/80" id="skills">
        <h1 className="text-center text-4xl font-bold md:text-6xl bg-linear-to-r from-[#F96D15] from-25% via-[#F68E33] via-40% to-[#805bd0] bg-clip-text text-transparent">Skills & Technologies</h1>
        <div className="mt-8 mb-6 h-1 w-40 rounded-full bg-white" />
        <p className="mb-10 max-w-3xl text-center text-gray-300/80">
          The technologies and tools I use to build fast, scalable, and user-focused web applications. Passionate about learning new technologies and improving coding skills.
        </p>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-4 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_36px_rgba(34,211,238,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%)] opacity-80" />
              <div className="relative select-none mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-gray-200/40 to-gray-50/90 shadow-lg shadow-cyan-500/20">
                <Image src={skill.image} alt={skill.name} width={48} height={48} className="object-contain" />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-wide text-white">{skill.name}</h3>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-5 text-gray-300/80">
                  {skill.description || "Focused on building polished and reliable user experiences."}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-200">
                  <span className="font-medium">Experience</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-700/80">
                  <div className="progress-fill-shimmer h-2 rounded-full bg-linear-to-r from-purple-700 via-cyan-400 to-green-500 shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-[width] duration-500 ease-out"
                    style={{ width: `${((Number(skill.progress) / 10) * 100).toFixed(0)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <button
            onClick={() => setVisibleCount((count) => Math.min(count + 8, skills.length))}
            className=" cursor-pointer mt-8 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Load More Skills
          </button>
        )}
      </section>

      {/* ==================================================================== Projects ========================================================= */}

      <section className="scroll-mt-24 flex flex-col items-center px-6 py-16 text-white selection:bg-white/80 selection:text-black/80 projects" id="projects">
        <h1 className="text-center text-4xl font-bold md:text-6xl bg-linear-to-r from-[#F96D15] from-25% via-[#F68E33] via-40% to-[#805bd0] bg-clip-text text-transparent">Projects</h1>
        <div className="mt-8 mb-6 h-1 w-40 rounded-full bg-white" />
        <p className="mb-10 max-w-3xl text-center text-gray-300/80">
          A selection of projects that showcase my skills, problem-solving approach, and passion for building modern web applications.
        </p>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative cursor-default flex flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-4 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_36px_rgba(34,211,238,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%)] opacity-80" />
              <div className="relative">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold tracking-wide text-white">{project.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-5 text-gray-300/80">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4">
                  <p className="text-sm leading-5 font-semibold text-gray-300">Tech:</p>
                  <p className="text-sm leading-5 text-gray-300/80">{project.technologies.join(", ")}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <p className="text-sm leading-5 font-semibold text-gray-300">GitHub:</p>
                  <Link href={project.github} target="_blank" rel="noreferrer" className="text-sm leading-5 underline text-blue-300 hover:text-blue-400">
                    Click here 
                  </Link>
                  < FaCopy onClick={(e)=>{navigator.clipboard.writeText(project.github)}} className="cursor-pointer mx-2 hover:scale-130 transition transition-ease-in-out duration-180 text-purple-600" />
                </div>
                <div className="flex gap-2 mt-4">
                  <p className="text-sm leading-5 font-semibold text-gray-300">Live URL:</p>
                  <Link href={project.liveDemo} target="_blank" rel="noreferrer" className="text-sm leading-5 underline text-blue-300 hover:text-blue-400">
                    Click here 
                  </Link>
                  < FaCopy onClick={(e)=>{navigator.clipboard.writeText(project.liveDemo)}} className="cursor-pointer mx-2 hover:scale-130 transition transition-ease-in-out duration-180 text-purple-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li><strong>Project 1:</strong> A web application for task management built with React and Node.js.</li>
          <li><strong>Project 2:</strong> A personal portfolio website created using Next.js and Tailwind CSS.</li>
          <li><strong>Project 3:</strong> A simple blog application built with React and Firebase .</li>
        </ul> */}
      </section>



      <section className="scroll-mt-24 flex flex-col items-center px-6 py-16 text-white contact selection:bg-white/80 selection:text-black/80" id="contact">
        <h1 className="text-center text-4xl font-bold md:text-6xl bg-linear-to-r from-[#F96D15] from-25% via-[#F68E33] via-40% to-[#805bd0] bg-clip-text text-transparent">Contact Me</h1>
        <div className="mt-8 mb-6 h-1 w-40 rounded-full bg-white" />
        <p className="mb-10 max-w-3xl text-center text-gray-300/80">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you and discuss ideas.
        </p>

        <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="group relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-6 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_36px_rgba(34,211,238,0.2)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%)] opacity-80" />
            <div className="relative">
              <h2 className="text-2xl font-semibold text-white">Let&apos;s connect</h2>
              <p className="mt-3 text-sm leading-6 text-gray-300/80">
                I&apos;m open to freelance work, collaborations, and new opportunities. Reach out and I&apos;ll get back to you soon.
              </p>

              <div className="mt-6 space-y-3">
                <Link href="mailto:vimal.kumar.799@gmail.com" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:border-[#F68E33]/40 hover:bg-white/10">
                  <span className="block text-xs uppercase tracking-[0.25em] text-[#F68E33]">Email</span>
                  <span className="mt-1 block font-medium">vimal.kumar.799@gmail.com</span>
                </Link>
                <Link href="https://www.linkedin.com/in/vimal-kumar-3b618935b/" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:border-[#805bd0]/40 hover:bg-white/10">
                  <span className="block text-xs uppercase tracking-[0.25em] text-[#805bd0]">LinkedIn</span>
                  <span className="mt-1 block font-medium">linkedin.com/in/vimal-kumar-3b618935b</span>
                </Link>
                <Link href="https://github.com/vimal-79" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:border-[#F96D15]/40 hover:bg-white/10">
                  <span className="block text-xs uppercase tracking-[0.25em] text-[#F96D15]">GitHub</span>
                  <span className="mt-1 block font-medium">github.com/vimal-79</span>
                </Link>
              </div>
            </div>
          </div>

          <form action="post" className="group relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-6 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_36px_rgba(34,211,238,0.2)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%)] opacity-80" />
            <div className="relative grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">Name</label>
                <input type="text" id="name" name="name" className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#F68E33] focus:ring-2 focus:ring-[#F68E33]/20" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">Email</label>
                <input type="email" id="email" name="email" className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#805bd0] focus:ring-2 focus:ring-[#805bd0]/20" placeholder="Your email" />
              </div>
            </div>

            <div className="relative mt-4">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">Message</label>
              <textarea id="message" name="message" rows={6} className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#F96D15] focus:ring-2 focus:ring-[#F96D15]/20" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" className="mt-6 cursor-pointer rounded-full bg-linear-to-r from-[#F96D15] via-[#F68E33] to-[#805bd0] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(249,109,21,0.25)]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
