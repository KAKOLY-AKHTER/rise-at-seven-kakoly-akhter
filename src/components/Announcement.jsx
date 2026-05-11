import React from 'react';

const AnnouncementBar = () => {
    return (

        <div className="w-full bg-[#f2f2f0] flex justify-center items-center py-2 px-3">
            <a
                href="https://riseatseven.com/category-leaderboard/"

                className="group relative overflow-hidden bg-[#b2f6e3] h-[32px]  w-full  rounded-[16px] flex justify-center items-center transition-all duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)]"
                style={{

                    boxSizing: 'border-box'
                }}
            >

                <div className="relative flex flex-col items-center overflow-hidden">

                    <p className="text-[14px] font-semibold text-[#111212] tracking-[-0.49px] leading-[14px] font-saans transition-transform duration-400 group-hover:-translate-y-10 antialiased">
                        🚨 The Category Leaderboard - Live Now
                    </p>


                    <p className="absolute top-10 text-[14px] font-semibold text-[#111212] tracking-[-0.49px] leading-[14px] font-saans transition-transform duration-400 group-hover:-translate-y-10 antialiased">
                        🚨 The Category Leaderboard - Live Now
                    </p>
                </div>
            </a>
        </div>
    );
};

export default AnnouncementBar;