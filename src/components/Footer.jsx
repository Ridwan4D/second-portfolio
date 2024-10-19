import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mb-1">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-2">
                    <div className="">
                        <h2 className="text-xl font-semibold">Ridwanul Islam</h2>
                        <p className="text-gray-400">Passionate Web Designer & Developer</p>
                    </div>

                    <div className="flex space-x-4 md:justify-center">
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#projects" className="hover:underline">Projects</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </div>

                    <div className="flex space-x-6 md:justify-end">
                        <a href="https://www.facebook.com/profile.php?id=100070321345858" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl text-white hover:text-cyan-600 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/ridwanul-islam-rt" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl text-white hover:text-cyan-600 transition" />
                        </a>
                        <a href="https://github.com/Ridwan4D" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl text-white hover:text-cyan-600 transition" />
                        </a>
                    </div>
                </div>

                <div className="mt-4 md:mt-8 text-center text-gray-400">
                    <p>&copy; 2024 Ridwanul Islam. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
