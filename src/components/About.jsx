import ana from "../assets/ana.png";
import roman from "../assets/roman.png";
import akex from "../assets/akex.png";

const About = () => {
    return (
        <section className="bg-[#151719] text-white py-20" id="about">
            <div className="about__wrapper container mx-auto px-4 text-center max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Don't take our word for it
                </h1>
                <p className="text-gray-400 mb-20">
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
                    quis lectus <br /> nulla at volutpat diam ut venenatis tellus—in ornare.
                </p>
                <div className="about__users grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="ana bg-[#1F2124] p-6 rounded-xl text-left flex flex-col items-start">
                        <img src={ana} alt="" className="w-16 h-16 rounded-full mb-4 object-cover" />
                        <p className="text-gray-300 italic mb-6 leading-relaxed">
                            — Open PRO lets me quickly get the insights I care about so that I
                            can focus on my productive work. I've had Open PRO for about 24
                            hours now and I honestly don't know how I functioned without it
                            before.
                        </p>
                        <div className="ana__name mt-auto">
                            <h4 className="font-semibold inline">Anastasia Dan /</h4>{' '}
                            <a href="#" className="text-[#5D5DFF] ml-1">UX Board</a>
                        </div>
                    </div>
                    <div className="roman bg-[#1F2124] p-6 rounded-xl text-left flex flex-col items-start">
                        <img src={roman} alt="" className="w-16 h-16 rounded-full mb-4 object-cover" />
                        <p className="text-gray-300 italic mb-6 leading-relaxed">
                            — Open PRO lets me quickly get the insights I care about so that I
                            can focus on my productive work. I've had Open PRO for about 24
                            hours now and I honestly don't know how I functioned without it
                            before.
                        </p>
                        <div className="roman__name mt-auto">
                            <h4 className="font-semibold inline">Roman Level /</h4>{' '}
                            <a href="#" className="text-[#5D5DFF] ml-1">AppName</a>
                        </div>
                    </div>
                    <div className="akex bg-[#1F2124] p-6 rounded-xl text-left flex flex-col items-start">
                        <img src={akex} alt="" className="w-16 h-16 rounded-full mb-4 object-cover" />
                        <p className="text-gray-300 italic mb-6 leading-relaxed">
                            — Open PRO lets me quickly get the insights I care about so that I
                            can focus on my productive work. I've had Open PRO for about 24
                            hours now and I honestly don't know how I functioned without it
                            before.
                        </p>
                        <div className="akex__name mt-auto">
                            <h4 className="font-semibold inline">Akex Sackett /</h4>{' '}
                            <a href="#" className="text-[#5D5DFF] ml-1">Reform Layouts</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
