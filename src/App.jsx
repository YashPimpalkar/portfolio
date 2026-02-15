import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

/**
 * App Component
 *
 * The main entry point of the application. It structures the portfolio by
 * composing various sections (Navbar, Hero, Skills, etc.) into a single-page layout.
 *
 * @returns {JSX.Element} The main application component.
 */
function App() {
  return (
    <>
      <div className="bg-gray-900 text-gray-200 font-inter">
        {/* Navbar */}
        <Navbar />

        {/* Main container with padding and max width */}
        <div
          id="home"
          className="container mx-auto px-4 py-8 md:px-14 md:py-16 max-w-[1440px]"
        >
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
