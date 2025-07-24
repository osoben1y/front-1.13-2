import React from "react";
import fill from "../assets/Fill.png";

const Message = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl bg-[#5D5DFF] relative">
                <img
                    src={fill}
                    alt="decorative fill"
                    className="absolute top-0 right-0 opacity-20 pointer-events-none select-none z-0"
                />
                <div className="py-12 px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white max-w-md">
                        <h3 className="text-2xl md:text-3xl font-bold">Stay in the loop</h3>
                        <p className="mt-2 text-sm md:text-base">
                            Join our newsletter to get top news before anyone else.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input
                            type="text"
                            placeholder="Your best email…"
                            className="px-4 py-2 rounded-md bg-[#4B4ACF] text-sm md:min-w-[280px] outline-none text-white placeholder-white"
                        />
                        <button className="bg-white text-[#5D5DFF] px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;
