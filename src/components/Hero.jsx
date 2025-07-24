import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#151719] text-white py-10x">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Landing template for startups
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button className="bg-[#5D5DFF] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4b4bff] transition">
            Start free trial
          </button>
          <button className="text-white bg-[#33363A] px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#151719] transition">
            Learn more
          </button>
        </div>
        <img
          src={heroImg}
          alt="Hero"
          className="mx-auto w-[1024px] h-[576px] top-3 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
