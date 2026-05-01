import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

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
      <section className='flex flex-col h-screen py-10 items-center text-white skills_&_Technologies' id="skills_&_Technologies">
        <h1 className="text-6xl font-bold">Skills & Technologies</h1>
        <div className='border-4 rounded-full border-white w-40 mt-8 mb-4'></div>
        <p> Familiar with Git version control and agile methodologies. Passionate about learning new technologies and improving coding skills.</p>
        <div>
          <div className="h-38 w-44 flex flex-col items-center border rounded-2xl p-3">
            <div className="w-12 h-12">
              <Image src="/tools_and_skills_images/html.png" alt="html" width={48} height={48} className="" />
            </div>
            <p>html</p>

          </div>
        </div>
      </section>
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
