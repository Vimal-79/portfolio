import Image from "next/image";
import Hero from "./components/Hero";
import * as Skills from "./skills/info.json";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ============================================================= About Me ========================================================= */}

      <section className='flex flex-col items-center text-white about h-screen box-border py-10 my-5 [user-select:none]' id="about">
        <h1 className="text-center text-6xl font-bold">About Me</h1>
        <div className='border-4 rounded-full border-white w-40 mt-8 mb-4'></div>

        <div className="w-[70vw] h-auto flex gap-5 justify-center my-10">
          <div className="w-[50%] flex flex-col justify-center gap-10 pr-30 text-gray-300/80 *:font-medium">
            <p className="text-[1.1rem]">I'm a passionate developer focused on building clean, efficient, and user-friendly digital experiences. What started as curiosity has grown into a strong interest in solving real-world problems through technology. </p>
            <p className="text-[1.1rem]">I enjoy working with modern tools, exploring new concepts, and constantly improving my skills. Whether it's developing projects or learning something new, I aim to create solutions that are both practical and impactful.</p>
            <p className="text-[1.1rem]">My goal is to grow as a developer while building applications that are simple, effective, and meaningful.</p>
          </div>
          <div className="cursor-pointer w-[32%] border-4 rounded-2xl overflow-hidden border-gray-300/30">
            <img className=" [-webkit-user-drag:none] [user-drag:none] " src="./vimal.jpeg" alt="vimal's image" />
          </div>
        </div>
      </section>

      {/* ========================================================= Skills & Technologies ========================================================= */}

      <section className="flex flex-col items-center px-6 py-16 text-white skills_&_Technologies" id="skills_&_Technologies">
        <h1 className="text-4xl font-bold text-center md:text-6xl">Skills & Technologies</h1>
        <div className="mt-8 mb-6 h-1 w-40 rounded-full bg-white" />
        <p className="mb-10 max-w-3xl text-center text-gray-300/80">
          Familiar with Git version control and agile methodologies. Passionate about learning new technologies and improving coding skills.
        </p>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Skills.default.map((skill) => (
            <div
              key={skill.name}
              className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-4 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_36px_rgba(34,211,238,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%)] opacity-80" />
              <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-violet-600 shadow-lg shadow-cyan-500/20">
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
                  <div
                    className="progress-fill-shimmer h-2 rounded-full bg-linear-to-r from-purple-700 via-cyan-400 to-green-500 shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-[width] duration-500 ease-out"
                    style={{ width: `${((Number(skill.progress) / 10) * 100).toFixed(0)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== Projects ========================================================= */}

      <section className="text-white Projects">
        <h1>Projects</h1>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li><strong>Project 1:</strong> A web application for task management built with React and Node.js.</li>
          <li><strong>Project 2:</strong> A personal portfolio website created using Next.js and Tailwind CSS.</li>
          <li><strong>Project 3:</strong> A simple blog application built with React and Firebase .</li>
        </ul>
      </section>



      <section className=' text-white contact' id="contact">
        <h1>Contact Me</h1>
        <div>
          <div>
            <h1>Get in Touch</h1>
            <ul>
              <li>Email</li>
              <li>Linkedin</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div>
            <form action="post">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
