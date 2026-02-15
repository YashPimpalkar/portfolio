import { resumeData } from "../utils";

/**
 * Education Component
 *
 * Displays a list of the user's educational background, including degree,
 * school, dates, and CGPA/Percentage.
 *
 * @returns {JSX.Element} The rendered Education component.
 */
const Education = () => {
  return (
    <section id="education" className="mb-16">
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
  );
};

export default Education;
