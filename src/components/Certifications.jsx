import { resumeData } from "../utils";

/**
 * Certifications Component
 *
 * Displays a list of professional certifications and achievements.
 * Each entry links to the certificate verification or course page.
 *
 * @returns {JSX.Element} The rendered Certifications component.
 */
const Certifications = () => {
  return (
    <section id="certifications" className="mb-16">
      <h3 className="text-3xl font-bold text-white mb-6">Certifications</h3>
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
              <h4 className="text-xl font-bold text-white">{cert.name}</h4>
              <span className="text-sm text-cyan-400 mt-1 sm:mt-0">
                {cert.issuer}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
