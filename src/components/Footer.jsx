import {
  resumeData,
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  GithubIcon,
} from "../utils";

/**
 * Footer Component
 *
 * Displays the copyright information and social media links at the bottom of the page.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 max-w-full ">
      <div className="w-full px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
  );
};

export default Footer;
