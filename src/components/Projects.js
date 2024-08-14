import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Learning Platform (Urvara Academy)",
      description:
        "Developed a comprehensive e-learning platform for a client, designed to provide an accessible and user-friendly online education experience. The website enables students to securely log in, browse courses, make payments, and enroll in their chosen courses. It also features built-in assessment tools for progress tracking. Admins and the owner have special access to manage courses, monitor student progress, and handle administrative tasks efficiently. The platform was meticulously crafted to balance cost-effectiveness with robust functionality, ensuring scalability, security, and a seamless user experience. The website is set to rollout soon!",
      thumbnail: "urvara_thumb.webp",
      skills: ["CSS", "Wix Studio", "Velo","AWS","Strapi","Git"],
    },

    {
      id: 2,
      title: "Travel Agency Website (Levanta)",
      description:
        "A modern and aesthetically designed responsive website showcasing the travel agency’s services, detailed information, and contact options. Users can explore various travel packages and destinations, view company details, explore various services provided, and easily reach out through integrated contact forms. The site is developed to provide a seamless and visually appealing experience, enhancing user engagement and satisfaction",
      thumbnail: "levanta_thumb.webp",
      skills: ["React", "Figma", "JavaScript", "CSS", "Firebase", "Git"],
    },

    {
      id: 3,
      title: "Cultural center website",
      description:
        "Aesthetically designed website for a center dedicated to training artists and craftsmen, showcasing their talents, and providing a space for self-discovery through art. The site aligns with the center's theme, featuring sections for artistic exhibitions, personal exploration, and spiritual encounters. Developed to reflect the serene and inspiring atmosphere of the center, the website aims to realize peace and happiness through art. The website is set to launch soon!",
      thumbnail: "sargaram_thumb.png",
      skills: [
        "NextJS",
        "React",
        "Tailwind CSS",
        "GSAP",
        "AWS lightsail",
        "Figma",
        "Git", "Illustrator",
      ],
    },

    {
      id: 4,
      title: "sebinsibichann.com",
      description: "A sleek portfolio website developed with Next.js and Tailwind CSS, coded in VSCode. Despite its minimalistic design, it effectively showcases functionality and highlights key aspects of the portfolio.",
      thumbnail: "portfolio_thumb.webp",
      skills: ["NextJS", "Tailwind CSS", "AWS", "Git"],
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-8 mt-40 text-accent"
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="group relative transition duration-300 hover:bg-slate-400 hover:bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-9 gap-2">
              <div className="md:col-span-7">
                <h3 className="text-2xl font-semibold mb-3 mr-4">
                  {project.title}
                </h3>
                <p className="text-text-secondary">{project.description}</p>
              </div>
              <div className="md:col-span-2 md:justify-self-end">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-32 h-20 object-cover rounded-lg"
                />
              </div>
            </div>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {project.skills.map((skill, index) => (
                <li className="mr-1.5 mt-2" key={index}>
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
{
  /* <li class="mb-12"><div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"><div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div><div class="z-10 sm:order-2 sm:col-span-6"><h3><a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)"><span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Build a Spotify Connected<!-- --> <span class="inline-block">App<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span></a></h3><p class="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p></div><img alt="Build a Spotify Connected App Newline course marketing card" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"></div></li> */
}
