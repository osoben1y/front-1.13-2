import logo from "../assets/Logo.svg";
import twitter from "../assets/twitter.svg";
import git from "../assets/git.svg";
import face from "../assets/face.svg";
import instagram from "../assets/instagram.svg";
import lin from "../assets/in.svg";

const Footer = () => {
    return (
        <footer className="bg-[#151719] text-white py-12">
            <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <img src={logo} alt="Logo" className="w-6" />
                        <p className="text-sm text-gray-400">
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual
                            mockups.
                        </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                        Made by <span className="text-white font-semibold">Cruip</span>. All right reserved
                    </p>
                </div>

                <div>
                    <h5 className="font-semibold text-lg mb-3">Products</h5>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Web Studio</li>
                        <li>DynamicBox Flex</li>
                        <li>Programming Forms</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-lg mb-3">Resources</h5>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Nostrud exercitation</li>
                        <li>Visual mockups</li>
                        <li>Nostrud exercitation</li>
                        <li>Visual mockups</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h5 className="font-semibold text-lg mb-3">Company</h5>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Consectetur adipiscing</li>
                            <li>Labore et dolore</li>
                            <li>Consectetur adipiscing</li>
                            <li>Labore et dolore</li>
                            <li>Consectetur adipiscing</li>
                        </ul>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <img src={twitter} alt="Twitter" className="w-5 h-5 cursor-pointer" />
                        <img src={git} alt="GitHub" className="w-5 h-5 cursor-pointer" />
                        <img src={face} alt="Facebook" className="w-5 h-5 cursor-pointer" />
                        <img src={instagram} alt="Instagram" className="w-5 h-5 cursor-pointer" />
                        <img src={lin} alt="LinkedIn" className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
