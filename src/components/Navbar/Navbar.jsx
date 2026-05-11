import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo - অরিজিনাল সাইট থেকে লোগোটি এখানে বসান */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold">Rise at Seven</h1>
                    </div>

                    {/* Desktop Menu - বড় স্ক্রিনের জন্য */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="text-gray-900 hover:text-black font-medium">Services</a>
                        <a href="#" className="text-gray-900 hover:text-black font-medium">Work</a>
                        <a href="#" className="text-gray-900 hover:text-black font-medium">About</a>
                        <button className="bg-black text-white px-6 py-2 rounded-full">Get in touch</button>
                    </div>

                    {/* Mobile Button - হ্যামবার্গার মেনু বাটন */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 focus:outline-none"
                        >
                            {/* হ্যামবার্গার আইকন */}
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - এটি আপনার টাস্কের প্রধান অংশ */}
            {isOpen && (
                <div className="md:hidden bg-white h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-bold">
                    {/* ক্লোজ বাটন এবং মেনু আইটেমগুলো এখানে হবে */}
                    <a href="#" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Work</a>
                    <a href="#" onClick={() => setIsOpen(false)}>About</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;