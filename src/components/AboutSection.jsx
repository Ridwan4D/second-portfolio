import { FaDownload } from "react-icons/fa";
import { ABOUT_TEXT } from "../utils/utils";
import resume from "../../public/resume-2024-10-19.pdf";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutSection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id="aboutMe" className="pb-4 lg:mb-10">
            <h2 className="my-10 xl:mt-16 mb-5 text-center text-4xl lg:text-6xl font-bold text-gray-800">
                About <span className="text-cyan-600">Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/2 lg:p-8"
                >
                    <div className="flex justify-center items-center">
                        <img
                            src="https://res.cloudinary.com/duv5fiurz/image/upload/v1729316665/LinkedIn_Prof_veg3zc.jpg"
                            alt="Ridwanul Islam"
                            className="w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[25rem] xl:h-[25rem] rounded-lg object-cover shadow-lg"
                        />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/2 lg:py-8"
                >
                    <div className="flex justify-center lg:justify-start flex-col">
                        <p
                            className={`mb-2 max-w-xl pb-6 text-gray-500 text-base xl:text-lg font-medium transition-all duration-500 overflow-hidden md:overflow-visible ${showMore ? "max-h-96" : "max-h-24"
                                }`}
                        >
                            {ABOUT_TEXT}
                        </p>

                        {/* Show the "Show More" button on small devices only */}
                        <button
                            className="block md:hidden mt-2 text-cyan-600 font-medium transition-all"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>

                    <div className="md:hidden">
                        <a
                            href={resume}
                            download="resume.pdf"
                            className="btn lg:btn-wide flex justify-between items-center px-10 rounded-md py-2 bg-gray-700 border-0 text-cyan-500 mt-4"
                        >
                            Download Resume <FaDownload />
                        </a>
                    </div>
                </motion.div>
            </div>
            
            <div className="hidden md:flex mt-4 lg:-mt-28 justify-end">
                        <a
                            href={resume}
                            download="resume.pdf"
                            className="btn lg:btn-wide w-full lg:w-1/2 flex justify-between items-center px-10 rounded-md py-2 bg-gray-700 border-0 text-cyan-500 mt-4"
                        >
                            Download Resume <FaDownload />
                        </a>
                    </div>
        </div>
    );
};

export default AboutSection;
