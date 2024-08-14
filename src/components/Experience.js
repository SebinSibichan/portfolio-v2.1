// components/Experience.js
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2023 — Present",
    title: "Fullstack software engineer",
    company: "Freelance",
    description: `
      As a freelance developer, high-quality websites, learning management system, and digital products were built, styled, and shipped for a diverse range of clients, including training institutions, travel agencies, art studios, schools, events, and small businesses. Projects involved creating tailored solutions to meet each client's unique needs, enhancing their online presence and functionality. 
      <li> A variety of tools and technologies were utilized to deliver top-notch results, consistently exceeding client expectations. React and Next.js were used to develop dynamic and responsive web applications. Strapi served as a flexible CMS for content management, while Tailwind CSS ensured modern and efficient designs. Figma was key in designing intuitive user interfaces, and secure backend solutions were deployed using AWS and Firebase. Git facilitated version control and collaboration. Additionally, WordPress and Wix Studio were used for versatile content management and website development, and reliable APIs were implemented with FastAPI.  </li>  `,
    link: "",
    skills: [
      "React.Js",
      "Next.Js",
      "Strapi",
      "Tailwind CSS",
      "Figma",
      "AWS",
      "Firebase",
      "Wordpress",
      "Wix Studio",
      "FastAPI",
      "Git",
    ],
  },

  {
    date: "2022 — 2023",
    title: "Software Engineer",
    company: "tsworks Technologies India pvt ltd.",
    description: `
    <li>
      <strong>Backend Development:</strong> Contributed significantly as a key member of the backend development team, specializing in REST API design using the FastAPI framework.
    </li>
    <li>
      <strong>Reusable Code & ORM:</strong> Developed reusable code components and implemented Object-Relational Mapping (ORM) techniques for seamless database interaction.
    </li>
    <li>
      <strong>API Orchestration:</strong> Orchestrated API interactions, optimizing internal processes for increased efficiency and reliability.
    </li>
    <li>
      <strong>AWS Services:</strong> Utilized a variety of AWS services, including AWS Lambda, CloudFormation, ECS, EC2, CloudWatch, API Gateway, and S3, to implement robust solutions.
    </li>
    <li>
      <strong>Azure Services:</strong> Implemented services using Azure technologies such as Azure Functions, resource groups, KeyVault, and Storage accounts.
    </li>
    <li>
      <strong>Automated Testing:</strong> Ensured comprehensive test coverage and reduced bugs by implementing automated testing with pytest.
    </li>
    <li>
      <strong>Database Design:</strong> Designed and developed SQL queries to create new database tables and associated functions for API development.
    </li>
    <li>
    
    <li>
      <strong>Agile Practices:</strong> Actively participated in agile development processes, including daily stand-ups, sprint planning, and retrospectives, fostering effective teamwork and efficient project management.
    </li>
    
  `,
    link: "https://tsworks.io",
    skills: [
      "Python",
      "FastAPI",
      "AWS",
      "Azure",
      "PostgreSQL",
      "CI/CD",
      "SonarQube",
      "Unit testing",
      "Git Lab",
      "HTML",
      "Strapi",
    ],
  },

  {
    date: "2022",
    title: "UI/UX Intern",
    company: "Exposys Data Labs",
    description:
      "Conducted user research and created case studies to inform design decisions, developing wireframes and prototypes using Figma to visualize and test concepts. By conducting usability testing and incorporating feedback, I continuously improved the user experience. My work included designing UIs for an e-commerce app and redesigning the UI for WhatsApp, focusing on enhanced functionality and user satisfaction as a case study.",

    link: "https://www.exposys.com",
    skills: [
      "UI/UX Design",
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User research & usability testing",
      "Mockup",
    ],
  },
];

const Experience = () => {
  return (
    <div>
      <section id="experience" className="mb-20 mt-50">
        <motion.h2
          className="text-3xl font-semibold mb-8 mt-40 text-accent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 hover:bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-opacity-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h3 className="text-lg font-medium text-text-primary">
                {exp.title}
              </h3>
              <span className="text-sm text-text-secondary">{exp.date}</span>
            </div>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline mb-2 inline-block"
            >
              {exp.company}
            </a>
            <ul
              className="text-text-secondary"
              dangerouslySetInnerHTML={{ __html: exp.description }}
            />

            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
              {exp.skills.map((skill, index) => (
                <li class="mr-1.5 mt-2" key={index}>
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
      <div class="mt-12">
        <a
          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          href="/Sebin_Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full&nbsp;
            <span class="inline-block">
              {" "}
              Résumé
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Experience;
