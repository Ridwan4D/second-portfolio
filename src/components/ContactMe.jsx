import { useState } from 'react';
import { init, send } from '@emailjs/browser';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        init(`${import.meta.env.VITE_PUBLIC_KEY}`);

        const formData = {
            email: 'ridwanul161@gmail.com',
            message: message,
        };

        send('service_6e52vid', 'template_fgw0got', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setMessage('');
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setStatus('Failed to send message. Please try again later.');
            });
    };

    return (
        <div id='contactMe' className="mt-20 py-12 bg-white shadow-lg rounded-lg md:px-8 mb-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-x-10 items-start px-4 lg:px-0">
                <div className="flex flex-col items-start space-y-3 w-full lg:w-1/2">
                    <h2 className="text-4xl font-semibold mb-3 text-center lg:text-left">
                        Contact <span className="text-cyan-600">Me</span>
                    </h2>
                    <p className="text-gray-700 text-lg mb-3 text-left xl:w-3/5">
                        Feel free to reach out through my social channels or leave a message!
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-6">
                        <a href="https://www.facebook.com/profile.php?id=100070321345858" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-4xl text-gray-600 hover:text-cyan-600 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/ridwanul-islam-rt" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-4xl text-gray-600 hover:text-cyan-600 transition" />
                        </a>
                        <a href="https://github.com/Ridwan4D" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-4xl text-gray-600 hover:text-cyan-600 transition" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0 w-full lg:w-1/2">
                    <form onSubmit={handleSubmit} className="">
                        <div className="mb-3">
                            <label className="block text-gray-800 text-lg lg:text-xl font-medium mb-2 md:text-end" htmlFor="message">
                                Message Me
                            </label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={handleChange}
                                required
                                rows="2"
                                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-600"
                                placeholder="Type your message here..."
                            />
                        </div>
                        <div className="flex items-center md:justify-end">
                            <button
                                type="submit"
                                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-center text-green-600 mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
