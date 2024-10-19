import { PROJECTS } from "../utils/utils";

const ProjectsSection = () => {
  return (
    <div id="myProjects" className="pb-8 lg:mb-10">
      <h2 className="my-10 xl:my-20 mb-5 text-center text-4xl lg:text-6xl font-bold text-gray-800">
        My <span className="text-cyan-600">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg hover:scale-105 overflow-hidden transition-all duration-300 transform p-5" // Set standard background color
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg h-48 w-full object-cover hover:scale-95 transition-all"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-700 my-2">{project.description}</p>
              <ul className="text-gray-600">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-cyan-600 mr-2">•</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <span className="text-sm text-gray-600">Technologies: </span>
                <span className="font-semibold text-cyan-800">
                  {project.technologies.join(", ")}
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 font-medium hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
