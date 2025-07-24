const ZapIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
)

const TargetIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
)

const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
    </svg>
)

const LightbulbIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
    </svg>
)

const RocketIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
)

const ShieldIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
    </svg>
)

const First = () => {
    const features = [
        {
            icon: ZapIcon,
            title: "Lightning Fast",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            icon: TargetIcon,
            title: "Precise Targeting",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        },
        {
            icon: UsersIcon,
            title: "Team Collaboration",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
        },
        {
            icon: LightbulbIcon,
            title: "Smart Solutions",
            description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
        },
        {
            icon: RocketIcon,
            title: "Fast Deployment",
            description:
                "Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.",
        },
        {
            icon: ShieldIcon,
            title: "Secure & Safe",
            description:
                "Sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ]
    return (
        <section className="bg-[#151719] text-white py-24" id="idea">
            <div className="container mx-auto px-4 text-center max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
                    The majority of our customers do not <br className="hidden md:block" />
                    understand their workflows.
                </h2>

                <p className="text-xl text-gray-400 mb-20 max-w-3xl mx-auto">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => {
                        const IconComponent = feature.icon
                        return (
                            <div
                                key={idx}
                                className="group p-8 rounded-2xl bg-[#1F2124] hover:bg-[#252830] transition-all duration-300 border border-gray-800 hover:border-[#5D5DFF]/30">
                                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#5D5DFF] to-[#4b4bff] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <IconComponent />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
                <hr className="mt-20 border-gray-700" />
            </div>
        </section>
    )
}

export default First
