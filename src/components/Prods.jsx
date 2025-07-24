import React from "react";
import tick from "../assets/tick.svg";
import illustrate1 from "../assets/Illustration.png";
import illustrate2 from "../assets/Illustration2.png";
import illustrate3 from "../assets/Illustration3.png";

const features = [
    "Duis aute irure dolor in reprehenderit",
    "Excepteur sint occaecat",
    "Amet consectetur adipiscing elit",
];

const Product = () => {
    return (
        <section className="bg-[#151719] text-white py-24" id="product">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <div className="inline-block bg-[#C6F6D5] text-[#36A269] text-sm font-semibold px-6 py-2 rounded-full mb-4">
                    Reach goals that matter
                </div>
                <h2 className="text-4xl md:text-4xl font-bold leading-snug mt-2 mb-4">
                    One product, unlimited solutions
                </h2>
                <p className="text-gray-400 mb-16">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
                    <div className="max-w-lg text-left">
                        <p className="text-[#5D5DFF] font-semibold text-xl font-[Architects Daughter]">
                            More speed. Less spend
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Keep projects on schedule</h3>
                        <p className="text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {features.map((text, idx) => (
                            <div key={idx} className="flex items-start gap-3 mb-3">
                                <img src={tick} alt="tick" className="mt-1 w-5 h-5" />
                                <p className="text-gray-300 text-sm">{text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full max-w-xl">
                        <img src={illustrate1} alt="Illustration" className="w-full h-auto object-contain" />
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-24 gap-12">
                    <div className="w-full max-w-xl">
                        <img src={illustrate2} alt="Illustration" className="w-full h-auto object-contain" />
                    </div>
                    <div className="max-w-lg text-left">
                        <p className="text-[#5D5DFF] font-semibold text-xl font-[Architects Daughter]">
                            More speed. Less spend
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Keep projects on schedule</h3>
                        <p className="text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {features.map((text, idx) => (
                            <div key={idx} className="flex items-start gap-3 mb-3">
                                <img src={tick} alt="tick" className="mt-1 w-5 h-5" />
                                <p className="text-gray-300 text-sm">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-lg text-left">
                        <p className="text-[#5D5DFF] font-semibold text-xl font-[Architects Daughter]">
                            More speed. Less spend
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Keep projects on schedule</h3>
                        <p className="text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {features.map((text, idx) => (
                            <div key={idx} className="flex items-start gap-3 mb-3">
                                <img src={tick} alt="tick" className="mt-1 w-5 h-5" />
                                <p className="text-gray-300 text-sm">{text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full max-w-xl">
                        <img src={illustrate3} alt="Illustration" className="w-full h-auto object-contain" />
                    </div>
                </div>
                <hr className="mt-16 border-gray-700" />
            </div>
        </section>
    );
};

export default Product;
