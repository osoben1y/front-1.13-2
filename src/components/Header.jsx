const Header = () => {
    return (
        <header className="bg-[#151719] relative pt-6 pb-20 overflow-hidden">
            <div className="absolute top-6 -right-28 w-[550px] md:w-[650px] lg:w-[750px] h-[400px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl z-0 pointer-events-none" />
            <nav className="container mx-auto px-4 flex justify-between items-center relative z-10 h-20">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#5D5DFF] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="text-white font-semibold text-lg">StartUp</span>
                </div>
                <div className="flex items-center space-x-10">
                    <a href="#" className="text-[#5D5DFF] font-medium hover:underline transition-all duration-200">
                        Sign In
                    </a>
                    <button className="bg-[#5D5DFF] text-white px-6 py-2 rounded-md hover:bg-[#4b4bff] transition-all duration-200 font-medium">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
