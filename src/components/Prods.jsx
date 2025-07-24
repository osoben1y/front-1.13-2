const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
)
const features = [
    "Duis aute irure dolor in reprehenderit",
    "Excepteur sint occaecat cupidatat",
    "Amet consectetur adipiscing elit",
]
const Product = () => {
    const ProductSection = ({ title, subtitle, description, features, imagePosition = "right", emoji }) => (
        <div
            className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between mb-24 gap-12`}
        >
            <div className="max-w-lg text-left">
                <p className="text-[#5D5DFF] font-semibold text-xl mb-2" style={{ fontFamily: "Architects Daughter, cursive" }}>
                    {subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">{title}</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{description}</p>
                <div className="space-y-4">
                    {features.map((text, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                <CheckIcon />
                            </div>
                            <p className="text-gray-300 text-base">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full max-w-xl h-96 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl flex items-center justify-center border border-gray-700 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5D5DFF]/10 to-transparent"></div>
                <div className="text-center relative z-10">
                    <div className="w-20 h-20 bg-[#5D5DFF] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <span className="text-white text-3xl">{emoji}</span>
                    </div>
                    <p className="text-gray-400 text-lg font-medium">Feature Illustration</p>
                    <p className="text-gray-500 text-sm mt-2">Interactive demo coming soon</p>
                </div>
            </div>
        </div>
    )
    return (
        <section className="bg-[#151719] text-white py-24" id="product">
            <div className="container mx-auto px-4 text-center max-w-6xl">
                <div className="inline-block bg-gradient-to-r from-[#C6F6D5] to-[#A7F3D0] text-[#065F46] text-sm font-bold px-8 py-3 rounded-full mb-6 shadow-lg">
                    Reach goals that matter
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-snug mt-2 mb-6">One product, unlimited solutions</h2>
                <p className="text-xl text-gray-400 mb-20 max-w-4xl mx-auto leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper
                    quis lectus nulla.
                </p>
                <ProductSection
                    subtitle="More speed. Less spend"
                    title="Keep projects on schedule"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    features={features}
                    imagePosition="right"
                    emoji="📊"
                />
                <ProductSection
                    subtitle="Better insights. Faster decisions"
                    title="Analyze performance metrics"
                    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    features={features}
                    imagePosition="left"
                    emoji="⚡"
                />
                <ProductSection
                    subtitle="Smart automation. Real results"
                    title="Streamline your workflow"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    features={features}
                    imagePosition="right"
                    emoji="🎯"
                />
                <hr className="mt-20 border-gray-700" />
            </div>
        </section>
    )
}

export default Product
