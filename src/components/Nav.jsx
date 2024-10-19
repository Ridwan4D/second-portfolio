import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation, MdContactPhone } from "react-icons/md";
import { PiProjectorScreenDuotone } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => setIsOpen(!isOpen);

    // Collapse the menu after clicking a link
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="md:mb-10 flex justify-between items-center bg-slate-500 px-4">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
                <img
                    className="w-28"
                    src="https://res.cloudinary.com/duv5fiurz/image/upload/v1729339771/logo-removebg-preview_cmsvtv.png"
                    alt="Logo"
                />
            </div>

            {/* Menu Button for Small Devices */}
            <div className="block md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white text-3xl focus:outline-none"
                >
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            {/* Navigation Links */}
            <ul
                className={`fixed top-0 left-0 w-3/4 h-full bg-slate-700 md:text-2xl space-x-4 text-white flex flex-col items-start justify-start pt-20 px-6 space-y-4 z-50 transition-transform duration-300 ease-in-out md:static md:flex-row md:items-center md:justify-center md:w-auto md:h-auto md:bg-transparent md:space-y-0 md:pt-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
            >

                <li onClick={closeMenu}>
                    <a
                        href="#aboutMe"
                        className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded transition duration-300 w-full flex items-center gap-1 text-lg"
                    >
                        <BsInfoCircleFill
                            data-tooltip-id="my-tooltip-1"
                            data-tooltip-content="About"
                            className="cursor-pointer"
                        />
                        <span className="ml-2 md:hidden">About</span>
                    </a>
                </li>
                <li onClick={closeMenu}>
                    <a
                        href="#myEducation"
                        className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded transition duration-300 w-full flex items-center gap-1 text-lg"
                    >
                        <MdCastForEducation
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Education"
                            className="cursor-pointer"
                        />
                        <span className="ml-2 md:hidden">Education</span>
                    </a>
                </li>
                <li onClick={closeMenu}>
                    <a
                        href="#skillSet"
                        className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded transition duration-300 w-full flex items-center gap-1 text-lg"
                    >
                        <GiSkills
                            data-tooltip-id="my-tooltip1"
                            data-tooltip-content="Skill"
                            className="cursor-pointer"
                        />
                        <span className="ml-2 md:hidden">Skills</span>
                    </a>
                </li>
                <li onClick={closeMenu}>
                    <a
                        href="#myProjects"
                        className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded transition duration-300 w-full flex items-center gap-1 text-lg"
                    >
                        <PiProjectorScreenDuotone
                            data-tooltip-id="my-tooltip2"
                            data-tooltip-content="Projects"
                            className="cursor-pointer"
                        />
                        <span className="ml-2 md:hidden">Projects</span>
                    </a>
                </li>
                <li onClick={closeMenu}>
                    <a
                        href="#contactMe"
                        className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded transition duration-300 w-full flex items-center gap-1 text-lg"
                    >
                        <MdContactPhone
                            data-tooltip-id="my-tooltip3"
                            data-tooltip-content="Contact"
                            className="cursor-pointer"
                        />
                        <span className="ml-2 md:hidden">Contact</span>
                    </a>
                </li>
            </ul>

            {/* Tooltips */}
            <Tooltip id="my-tooltip-1" />
            <Tooltip id="my-tooltip" />
            <Tooltip id="my-tooltip1" />
            <Tooltip id="my-tooltip2" />
            <Tooltip id="my-tooltip3" />
        </nav>
    );
};

export default Nav;
