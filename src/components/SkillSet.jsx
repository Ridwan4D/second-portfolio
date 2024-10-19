import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiExpress, SiTailwindcss } from "react-icons/si";

const SkillSet = () => {
    return (
        <div id="skillSet" className="pb-4 lg:mb-10">
            <h2 className="xl:my-20 mb-5 text-center text-4xl lg:text-6xl font-bold text-gray-800">
                My <span className="text-cyan-600">Skills</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center mt-10">
                {[
                    { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-600" },
                    { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-600" },
                    { icon: <FaJsSquare />, label: "JavaScript", color: "text-yellow-500" },
                    { icon: <FaReact />, label: "React", color: "text-cyan-600" },
                    { icon: <SiMongodb />, label: "MongoDB", color: "text-green-600" },
                    { icon: <SiFirebase />, label: "Firebase", color: "text-yellow-500" },
                    { icon: <SiExpress />, label: "Express.js", color: "text-gray-500" },
                    { icon: <FaNodeJs />, label: "Node.js", color: "text-green-600" },
                    { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "text-cyan-500" },
                    { icon: <FaGithub />, label: "GitHub", color: "text-gray-700" },
                ].map((skill, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center transition-transform duration-300 transform hover:scale-110`}
                    >
                        <div className={`text-6xl ${skill.color} animate-float bg-white p-4 rounded-full shadow-lg`}>
                            {skill.icon}
                        </div>
                        <p className="mt-2 text-base font-medium text-gray-800">{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSet;
