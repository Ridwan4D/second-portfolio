import { useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_SECTION_DETAILS } from '../utils/utils';

// Define animation variants for staggering characters
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Delay between each character
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
    const [showMore, setShowMore] = useState(false);
    const name = "Ridwanul Islam".split('');

    return (
        <section className="flex flex-col md:flex-row justify-between py-10 bg-gray-100">
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left space-y-2 xl:space-y-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 flex"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {name.map((letter, index) => (
                        <motion.span key={index} variants={childVariants}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                <p className="text-lg sm:text-2xl md:text-3xl xl:text-4xl font-medium text-cyan-600">
                    Frontend Developer
                </p>

                {/* Show more text on small devices */}
                <div className={`text-gray-600 text-base md:text-sm font-medium lg:text-lg xl:text-xl text-left transition-all duration-500 ${showMore ? 'max-h-96' : 'max-h-24'} overflow-hidden md:overflow-visible`}>
                    {HERO_SECTION_DETAILS}
                </div>

                {/* Show more button only on small devices */}
                <button
                    className="block md:hidden mt-2 text-cyan-600 font-medium"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 mt-8 md:mt-0 flex  justify-center md:justify-end"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="https://res.cloudinary.com/duv5fiurz/image/upload/v1729313673/about_yv3svk.jpg"
                    alt="Ridwanul Islam"
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[25rem] xl:h-[25rem] rounded-full object-cover shadow-lg"
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
