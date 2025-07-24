import ideaIcon1 from '../assets/idea1.svg';
import ideaIcon2 from '../assets/idea2.svg';
import ideaIcon3 from '../assets/idea3.svg';
import ideaIcon4 from '../assets/idea4.svg';
import ideaIcon5 from '../assets/idea5.svg';
import ideaIcon6 from '../assets/idea6.svg';

const Idea = () => {
    return (
        <section className="bg-[#151719] text-white py-24" id="idea">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-4xl md:text-4xl font-bold leading-snug mb-12">
                    The majority of our customers do not <br className="hidden md:block" />
                    understand their workflows.
                </h2>
                <p className="text-lg text-gray-400 mb-15">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                    {[ideaIcon1, ideaIcon2, ideaIcon3, ideaIcon4, ideaIcon5, ideaIcon6].map((icon, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center px-4">
                            <img src={icon} alt={`idea${idx + 1}`} className="w-12 h-12 mb-4" />
                            <p className="text-gray-300 text-sm">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </p>
                        </div>
                    ))}
                </div>
                <hr className="mt-16 border-gray-700" />
            </div>
        </section>
    );
};

export default Idea;
