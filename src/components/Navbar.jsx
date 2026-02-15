import { useState } from "react";
import { navLinks, resumeData, MenuIcon, CloseIcon } from "../utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-cyan-400">
            YASH
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumeData.contact.resumeLink}
              download="Yash_Pimpalkar_Resume.pdf"
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <span className="text-cyan-400 font-bold text-lg">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 text-lg transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeData.contact.resumeLink}
            download="Yash_Pimpalkar_Resume.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300 text-center"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[72px]"></div>
    </>
  );
};

export default Navbar;
