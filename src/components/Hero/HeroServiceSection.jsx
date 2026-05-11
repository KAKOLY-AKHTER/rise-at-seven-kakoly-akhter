import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const HeroServiceSection = () => {
    return (
        <section className=" py-12 px-6 xl:py-24 md:px-16 lg:px-24 min-h-fit md:min-h-[500px] flex items-center">
            <div className="w-full">
                {/* Mobile-e gap-4 kore spacing komano hoyeche */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-16">

                    {/* Heading Area */}
                    <div className="md:w-1/2 order-1 md:order-2 flex flex-col items-start">
                        {/* 
                           mb-4: Mobile-e nise spacing komano 
                           <br className="hidden md:block" />: Sudhu Desktop-e break hobe
                        */}
                        <h1 className="text-[40px] md:text-[65px] lg:text-[75px] font-semibold tracking-tighter text-[#1a1a1a] leading-[1.05] mb-4 md:mb-8">
                            Driving Demand & <br className="hidden md:block" />
                            <span> Discovery</span>
                            <span className="inline-block align-middle ml-2">
                                <img
                                    src="/0001.jpg"
                                    alt="Discovery"
                                    className="w-10 h-10 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-[8px] md:rounded-[14px] object-cover"
                                />
                            </span>
                        </h1>

                        {/* Desktop Buttons */}
                        <div className="hidden md:flex flex-row items-center gap-6 w-full md:w-auto">
                            <button className="relative overflow-hidden bg-white text-black font-bold flex items-center justify-center h-[45px] w-[160px] rounded-[24px] hover:rounded-[12px] transition-all duration-300 ease-in-out group/btn active:scale-95">
                                <div className="relative h-[16px] w-full flex flex-col items-center overflow-hidden pointer-events-none">
                                    <span className="text-[14px] leading-none transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:-translate-y-7">Our Story ↗</span>
                                    <span className="absolute top-7 text-[14px] leading-none transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:-translate-y-7">Our Story ↗</span>
                                </div>
                            </button>

                            <button className="relative overflow-hidden text-black font-bold flex items-center justify-center h-[45px] w-[160px] rounded-[24px] hover:rounded-[12px] transition-all duration-500 ease-in-out group/btn active:scale-95">
                                <div className="relative h-[16px] w-full flex flex-col items-center overflow-hidden pointer-events-none">
                                    <span className="text-[14px] leading-none transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:-translate-y-7">Our Services ↗</span>
                                    <span className="absolute top-7 text-[14px] leading-none transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:-translate-y-7">Our Services ↗</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Description Area */}
                    <div className="md:w-[45%] order-2 md:order-1">
                        {/* 
                           mb-6: Mobile-e button theke distance komano
                        */}
                        <p className="text-[#1a1a1a] text-[18px] md:text-[24px] leading-snug md:leading-relaxed font-medium mb-6 md:mb-0">
                            A global team of search-first content marketers engineering
                            semantic relevancy & category signals for both the internet and people
                        </p>

                        {/* Mobile Buttons Area */}
                        <div className="flex flex-col gap-2 md:hidden w-full">
                            <button className="bg-white text-black py-3 rounded-full text-[16px] font-bold flex items-center justify-center gap-2 w-full border border-black/5 active:scale-95">
                                Our Story <FiArrowUpRight className="text-xl" />
                            </button>

                            <button className="bg-transparent text-black py-3 rounded-full text-[16px] font-bold flex items-center justify-center gap-2 w-full active:scale-95">
                                Our Services <FiArrowUpRight className="text-xl" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroServiceSection;
