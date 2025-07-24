const About = () => {
    const testimonials = [
        {
            name: "Anastasia Dan",
            company: "UX Board",
            initials: "AD",
            gradient: "from-pink-400 to-purple-500",
            text: "Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        },
        {
            name: "Roman Level",
            company: "AppName",
            initials: "RL",
            gradient: "from-blue-400 to-cyan-500",
            text: "The analytics dashboard is incredibly intuitive and saves me hours every week. The real-time data visualization helps me make better decisions faster than ever before.",
        },
        {
            name: "Alex Sackett",
            company: "Reform Layouts",
            initials: "AS",
            gradient: "from-green-400 to-emerald-500",
            text: "This platform has transformed how our team collaborates. The seamless integration with our existing tools and the powerful automation features are game-changers.",
        },
    ]

    return (
        <section className="bg-[#151719] text-white py-24" id="about">
            <div className="container mx-auto px-4 text-center max-w-6xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{"Don't take our word for it"}</h1>
                <p className="text-xl text-gray-400 mb-20 max-w-4xl mx-auto leading-relaxed">
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut
                    venenatis tellus—in ornare.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1F2124] p-8 rounded-2xl text-left flex flex-col border border-gray-800 hover:border-[#5D5DFF]/30 transition-all duration-300 group hover:transform hover:-translate-y-2"
                        >
                            <div
                                className={`w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                                <span className="text-white font-bold text-xl">{testimonial.initials}</span>
                            </div>
                            <p className="text-gray-300 italic mb-8 leading-relaxed text-base flex-grow">"— {testimonial.text}"</p>
                            <div className="mt-auto">
                                <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                                <a href="#" className="text-[#5D5DFF] hover:text-[#4b4bff] transition-colors duration-200 font-medium">
                                    {testimonial.company}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
