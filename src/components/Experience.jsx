import { resumeData } from "../utils";

/**
 * Experience Component
 *
 * Render's the professional experience timeline.
 * Displays role, company, date, and description for each experience entry.
 *
 * @returns {JSX.Element} The rendered Experience component.
 */
const Experience = () => {
  return (
    <section id="experience" className="mb-12 md:mb-16">
      <h3 className="text-3xl font-bold text-white mb-6">Experience</h3>
      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 sm:pl-16 after:absolute after:top-0 after:left-0 sm:after:left-4 after:w-1 sm:after:w-2 after:h-full after:bg-gray-700 after:rounded-full"
          >
            <div className="absolute left-0 sm:left-4 top-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-cyan-500 rounded-full z-10 -translate-x-[40%] sm:-translate-x-1/2 mt-1 sm:mt-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></span>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {exp.role}
                </h4>
                <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                  {exp.date}
                </span>
              </div>
              <h5 className="text-lg font-medium text-cyan-400 mb-2">
                {exp.company}
              </h5>
              <ul className="list-disc list-outside space-y-1 text-gray-400 text-left ml-5">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
