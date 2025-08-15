import { resumeData } from "./utils";
import { MailIcon } from "./utils";
import { GithubIcon } from "./utils";
import { LinkedinIcon } from "./utils";
import { PhoneIcon } from "./utils";
import { navLinks } from "./utils";
import { MenuIcon } from "./utils";
import { CloseIcon } from "./utils";
import "./App.css";
import { useState } from "react";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-900 text-gray-200  font-inter">
         {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-5xl">
           <a href="#home" className="text-xl font-extrabold text-cyan-400 transition-colors duration-300">
            YASH
          </a>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 py-4">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-cyan-400 font-medium text-lg transition-colors duration-300 w-full text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
        {/* Main container with padding and max width */}
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-[1440px]">
          {/* Hero Section */}
          <header className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-2">
                {resumeData.name}
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold text-cyan-400 animate-pulse">
                {resumeData.title}
              </h2>
              <p className="text-left mt-4 text-gray-400 max-w-2xl">
                {resumeData.summary}
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <MailIcon />
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`https://${resumeData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            </div>
          </header>

          {/* Skills Section */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(resumeData.skills).map(
                ([category, skills], index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300"
                  >
                    <h4 className="text-xl font-semibold text-white mb-4">
                      {category}
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-gray-700 text-sm font-medium text-gray-300 py-1.5 px-3 rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Professional Experience Section */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 sm:pl-16 after:absolute after:top-0 after:left-0 after:sm:left-4 after:w-2 after:h-full after:bg-gray-700 after:rounded-full"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center bg-cyan-500 rounded-full z-10 -translate-x-1/2 sm:translate-x-0">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 ml-4 sm:ml-0">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h4 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                        {exp.date}
                      </span>
                    </div>
                    <h5 className="text-lg font-medium text-cyan-400 mb-2">
                      {exp.company}
                    </h5>
                    <ul className="list-disc list-outside space-y-1 text-gray-400 text-left ml-6">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section with clickable links */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resumeData.projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300 transform hover:-translate-y-2"
                >
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-left">
                    {project.description}
                  </p>
                  {project.date && (
                    <span className="block mt-4 text-sm text-gray-500">
                      {project.date}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </section>

          {/* Education Section with clickable links */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-cyan-400 hover:text-cyan-300 "
                    >
                      {edu.degree}
                    </a>
                    <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                      {edu.date}
                    </span>
                  </div>
                  <h5 className="text-lg text-left text-white mt-1">{edu.school}</h5>
                  <p className="text-gray-400 mt-2 text-left">
                    {edu.cgpa || edu.percentage}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h4 className="text-xl font-bold text-white">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-cyan-400 mt-1 sm:mt-0">
                      {cert.issuer}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-8">
          <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} {resumeData.name}. All Rights
              Reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Email"
              >
                <MailIcon />
              </a>
              <a
                href={`tel:${resumeData.contact.phone}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <PhoneIcon />
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`https://${resumeData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
