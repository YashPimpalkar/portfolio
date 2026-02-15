import { resumeData } from "../utils";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Projects Component
 *
 * Displays a grid of project cards with details including title, description,
 * technologies used, and links to the GitHub repository and live demo.
 *
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects = () => {
  return (
    <section id="projects" className="mb-16">
      <h3 className="text-3xl font-bold text-white mb-6">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col justify-between h-full bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Header with title */}
            <header>
              <h4 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-left">
                {project.description}
              </p>
            </header>

            {/* Footer with technologies, date, and links */}
            <footer className="mt-6">
              {/* Technologies */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Date */}
              {project.date && (
                <div className="text-sm text-gray-500 mb-3">{project.date}</div>
              )}

              {/* Links */}
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
