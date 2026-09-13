

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Social Links */}
                <div className="flex justify-center items-center gap-6 mb-6">

                    {/* GitHub */}
                    <a
                        href="https://github.com/SaphalKhatri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        
                        <span>GitHub</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/saphal-kumar-khatri-840764280/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                       
                        <span>LinkedIn</span>
                    </a>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-5 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} My Portfolio. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
