const Hero = () => {
  return (
    <section className="bg-[#151719] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Landing template for startups
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Our landing page template works on all devices, so you only have to set it up once, and get beautiful results
          forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-[#5D5DFF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4b4bff] transitionå-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start free trial
          </button>
          <button className="text-white bg-[#33363A] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#151719] transition-all duration-200 border border-gray-600 hover:border-white">
            Learn more
          </button>
        </div>
        <div className="mx-auto w-full max-w-5xl h-[400px] md:h-[500px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl flex items-center justify-center border border-gray-700 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5D5DFF]/10 to-transparent"></div>
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-[#5D5DFF] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl">🚀</span>
            </div>
            <p className="text-gray-400 text-lg font-medium">Dashboard Preview</p>
            <p className="text-gray-500 text-sm mt-2">Beautiful interface coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
