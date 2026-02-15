import { resumeData } from "../utils";

/**
 * Skills Component
 *
 * Displays the user's technical skills categorized by type (e.g., Frontend, Backend).
 * Renders a grid of skill cards for each category.
 *
 * @returns {JSX.Element} The rendered Skills component.
 */
const Skills = () => {
  return (
    <section id="skills" className="mb-12 md:mb-16">
      <h3 className="text-3xl font-bold text-white mb-6">Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(resumeData.skills).map(([category, skills], index) => (
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
        ))}
      </div>
    </section>
  );
};

export default Skills;
