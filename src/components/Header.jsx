import Logoo from '../assets/Logo.svg';
import shape from '../assets/Shape.png';

const Header = () => {
    return (
        <header className="bg-[#151719] relative pt-6 pb-20">
            <img
                src={shape}
                alt="Shape"
                className="absolute top-6 -right-28 w-[550px] md:w-[650px] lg:w-[750px] z-0 pointer-events-none"
            />

            <nav className="container mx-auto px-4 flex justify-between items-center relative z-10 h-20">
                <img src={Logoo} alt="Logo" className="h-10" />
                <div className="flex items-center space-x-10">
                    <a href="#" className="text-[#5D5DFF] font-medium hover:underline">Sign In</a>
                    <button className="bg-[#5D5DFF] text-white px-4 py-2 rounded-md hover:bg-[#4b4bff] transition">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
