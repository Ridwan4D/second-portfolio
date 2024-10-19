import { motion } from "framer-motion";
const Education = () => {
  return (
    <div className="pb-4" id="myEducation">
      <h2
        className="xl:mb-20 mb-5 text-center text-4xl lg:text-6xl font-bold text-gray-800"
      >
        Education
      </h2>
      <motion.ol 
      whileInView={{opacity: 1, x:0}}
      initial= {{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="relative border-s border-gray-700 dark:border-gray-700 space-y-5">
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-900 dark:text-slate-800">
            2020 - 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            SSC Exam
          </h3>
          <p className="text-base font-normal text-slate-800 dark:text-gray-900">
            From: Bagmoniram Abdur Rashid City Corporation High School
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-900 dark:text-slate-800">
            2022 - 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            HSC Exam
          </h3>
          <p className="text-base font-normal text-slate-800 dark:text-gray-900">
            From: Hossain Ahmed Chy. City Corporation School and College
          </p>
        </li>
      </motion.ol>
    </div>
  );
};

export default Education;
