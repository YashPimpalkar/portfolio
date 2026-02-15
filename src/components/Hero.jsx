import { resumeData, MailIcon, LinkedinIcon, GithubIcon } from "../utils";

/**
 * Hero Component
 *
 * Displays the introduction section of the portfolio, including the user's name,
 * title, summary, social links, and a resume download button.
 *
 * @returns {JSX.Element} The rendered Hero component.
 */
const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 md:mb-16 space-y-8 md:space-y-0 pt-20 md:pt-0">
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-2">
          {resumeData.name}
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold text-cyan-400 animate-pulse">
          {resumeData.title}
        </h2>
        <p className="text-center md:text-left mt-4 text-gray-400 max-w-2xl mx-auto md:mx-0">
          {resumeData.summary}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {resumeData.contact.resumeLink && (
          <a
            href={resumeData.contact.resumeLink}
            download={resumeData.contact.resumeLink}
            className="md:hidden flex items-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            Download Resume
          </a>
        )}
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
      </div>
    </header>
  );
};

export default Hero;
