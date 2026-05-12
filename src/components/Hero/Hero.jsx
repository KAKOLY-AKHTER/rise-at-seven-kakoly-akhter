import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import './Hero.css';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuImage, setMenuImage] = useState("");
    const [hoverRect, setHoverRect] = useState({ left: 0, width: 0, opacity: 0 });

    const handleMouseEnter = (e, item) => {
        handleMenuHover(item);
        const rect = e.currentTarget.getBoundingClientRect();
        const parentRect = e.currentTarget.parentElement.getBoundingClientRect();
        setHoverRect({
            left: rect.left - parentRect.left,
            width: rect.width,
            opacity: 1
        });
    };

    const menuDetails = {
        // Folder 3 — Services+ (8 images)
        'Services+': {
            width: '1050px', height: '320px',
            items: [
                { name: 'Search & Growth Strategy',  img: '/images/3/Screenshot-2025-06-23-at-23.14.49.png' },
                { name: 'Onsite SEO',                img: '/images/3/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg' },
                { name: 'Content Experience',        img: '/images/3/Screenshot-2025-06-23-at-23.16.14.png' },
                { name: 'B2B Marketing',             img: '/images/3/0B5A6875.jpg' },
                { name: 'Digital PR',                img: '/images/3/Screenshot-2025-06-23-at-22.39.35.png' },
                { name: 'Social Media & Campaigns',  img: '/images/3/temp_image_43CEDE6C-4430-479F-9DBF-B348FA9AC991.WEBP' },
                { name: 'Data & Insights',           img: '/images/3/data.jpg' },
                { name: 'Social SEO/Search',         img: '/images/3/Screenshot-2025-09-24-at-11.47.25.png' }
            ],
            showViewAll: true
        },

        // Folder 6 — Industries+ (4 images: 01–04)
        'Industries+': {
            width: '570px', height: '288px',
            items: [
                { name: 'B2B Marketing',   img: '/images/3/0B5A68757.webp' },
                { name: 'eCommerce',       img: '/images/6/02.png' },
                { name: 'Finance',         img: '/images/6/03.webp' },
                { name: 'Technology',      img: '/images/6/04.png' }
            ]
        },

        // Folder 4 — International+ (4 images)
        'international+': {
            width: '664px', height: '300px',
            items: [
                { name: 'US Digital PR',          img: '/images/4/d4df0d30-d590-4e94-9056-9491f4beacba.JPG' },
                { name: 'Spain Digital PR',       img: '/images/4/002.jpg' },
                { name: 'Germany Digital PR',     img: '/images/4/003.jpg' },
                { name: 'Netherlands Digital PR', img: '/images/4/003.webp' }
            ]
        },

        // Folder 5 — About+ (3 images; 4th reuses folder-4 hero)
        'About+': {
            width: '585px', height: '288px',
            items: [
                { name: 'About Us',         img: '/images/5/1.jpg' },
                { name: 'Meet The Risers', img: '/images/5/2.png' },
                { name: 'Culture',          img: '/images/5/3.jpg' },
                { name: 'Testimonials',     img: '/images/4/d4df0d30-d590-4e94-9056-9491f4beacba.JPG' }
            ]
        },

        // Folder 7 — Blog & Resources+ (10 images; using first 3)
        'Blog & Resources+': {
            width: '752px', height: '288px',
            items: [
                { name: 'Blog',                      img: '/images/7/001.jpg' },
                { name: 'Category Leaderboard',      img: '/images/7/002.jpg' },
                { name: 'Multi-Channel Search Report', img: '/images/7/003.png' }
            ]
        },
    };

    const handleMenuHover = (menu) => {
        setActiveMenu(menu);
        if (menuDetails[menu]?.items?.length > 0) {
            setMenuImage(menuDetails[menu].items[0].img);
        }
    };

    const heroData = [
        { 
            bg: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284&s=4ad46c03819812b327e9b4643c1b0e6c", 
            smallImg: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284&s=4ad46c03819812b327e9b4643c1b0e6c" 
        },
        { 
            bg: "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674", 
            smallImg: "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674" 
        },
        { 
            bg: "https://rise-atseven.transforms.svdcdn.com/production/images/spaseekers.png?w=654&h=654&q=100&auto=format&fit=crop&dm=1750847719&s=7878b323cf448fba3f57e5ecbcef8ed1", 
            smallImg: "https://rise-atseven.transforms.svdcdn.com/production/images/spaseekers.png?w=654&h=654&q=100&auto=format&fit=crop&dm=1750847719&s=7878b323cf448fba3f57e5ecbcef8ed1" 
        }
    ];

    const [activeHero, setActiveHero] = useState(heroData[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * heroData.length);
        setActiveHero(heroData[randomIndex]);
    }, []);

    const isMegaMenu   = ['Services+', 'Industries+', 'international+', 'About+', 'Blog & Resources+'].includes(activeMenu);
    const navItems     = ['Services+', 'Industries+', 'international+', 'About+', 'Work', 'Careers', 'Blog & Resources+', 'Webinar'];
    const isSquareImg  = ['Industries+', 'international+', 'About+', 'Blog & Resources+'].includes(activeMenu);

    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Background Image */}
                <div className="hero-bg">
                    <img
                        src={activeHero.bg}
                        className={`hero-bg__img ${isMegaMenu ? 'hero-bg__img--blurred' : ''}`}
                        alt="Background"
                    />
                    <div className="hero-bg__overlay" />
                </div>

                {/* Header / Nav */}
                <header
                    onMouseLeave={() => { setActiveMenu(null); setHoverRect(prev => ({ ...prev, opacity: 0 })); }}
                    className="hero-header"
                >
                    {/* Logo */}
                    <div className="hero-logo">
                        <svg className="hero-logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 21">
                            <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
                            <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
                            <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
                            <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
                            <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
                            <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
                            <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
                            <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
                            <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
                            <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
                            <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
                            <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
                        </svg>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hero-nav">
                        {/* Hover pill indicator */}
                        <div
                            className="hero-nav__pill"
                            style={{
                                left: `${hoverRect.left}px`,
                                width: `${hoverRect.width}px`,
                                opacity: hoverRect.opacity,
                            }}
                        />

                        {navItems.map((item) => (
                            <span
                                key={item}
                                onMouseEnter={(e) => handleMouseEnter(e, item)}
                                className={`hero-nav__item ${activeMenu === item ? 'hero-nav__item--active' : ''}`}
                            >
                                {item}
                                {item === 'Work' && (
                                    <span className="hero-nav__badge">25</span>
                                )}
                            </span>
                        ))}

                        {/* Mega Menu */}
                        <div
                            className={`hero-megamenu ${activeMenu && menuDetails[activeMenu] ? 'hero-megamenu--visible' : 'hero-megamenu--hidden'}`}
                            style={activeMenu && menuDetails[activeMenu] ? {
                                width: menuDetails[activeMenu].width,
                                height: menuDetails[activeMenu].height,
                            } : {}}
                        >
                            {activeMenu && menuDetails[activeMenu] && (
                                <>
                                    <div className="hero-megamenu__left">
                                        {activeMenu === 'Services+' && (
                                            <p className="hero-megamenu__label">Core Services</p>
                                        )}
                                        <div className={`hero-megamenu__grid ${activeMenu === 'Services+' ? 'hero-megamenu__grid--services' : ''}`}>
                                            {menuDetails[activeMenu].items.map((subItem) => (
                                                <div
                                                    key={subItem.name}
                                                    onMouseEnter={() => setMenuImage(subItem.img)}
                                                    className="hero-megamenu__subitem"
                                                >
                                                    <span className={`hero-megamenu__subitem-text ${isSquareImg ? 'hero-megamenu__subitem-text--large' : ''}`}>
                                                        {subItem.name}
                                                    </span>
                                                    <span className={`hero-megamenu__subitem-text hero-megamenu__subitem-text--clone ${isSquareImg ? 'hero-megamenu__subitem-text--large' : ''}`}>
                                                        {subItem.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={`hero-megamenu__image-wrap ${isSquareImg ? 'hero-megamenu__image-wrap--square' : ''}`}>
                                        <img
                                            src={menuImage}
                                            className="hero-megamenu__image"
                                            alt="Menu"
                                        />
                                        {menuDetails[activeMenu].showViewAll && (
                                            <button className="hero-megamenu__view-all">
                                                <div className="hero-megamenu__view-all-inner">
                                                    <span className="hero-megamenu__view-all-text">View All Services ↗</span>
                                                    <span className="hero-megamenu__view-all-text hero-megamenu__view-all-text--clone">View All Services ↗</span>
                                                </div>
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </nav>

                    {/* Right Actions */}
                    <div className="hero-actions">
                        <button className="hero-actions__cta">
                            <div className="hero-actions__cta-inner">
                                <span className="hero-actions__cta-text">Get In Touch ↗</span>
                                <span className="hero-actions__cta-text hero-actions__cta-text--clone">Get In Touch ↗</span>
                            </div>
                        </button>

                        {/* Mobile hamburger */}
                        <div className="hero-actions__mobile">
                            <button
                                type="button"
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                onClick={() => setIsOpen((v) => !v)}
                                className="hero-hamburger"
                            >
                                <span className="hero-hamburger__inner">
                                    <span className={`hero-hamburger__bar hero-hamburger__bar--top ${isOpen ? 'hero-hamburger__bar--top-open' : ''}`} />
                                    <span className={`hero-hamburger__bar hero-hamburger__bar--bottom ${isOpen ? 'hero-hamburger__bar--bottom-open' : ''}`} />
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Hero Content */}
                <div className={`hero-content ${activeMenu ? 'hero-content--hidden' : ''}`}>
                    <div className="hero-content__top">
                        <p className="hero-content__tagline">
                            #1 MOST RECOMMENDED <br /> CONTENT MARKETING AGENCY
                        </p>
                        <div className="hero-content__awards">
                            <span className="hero-content__laurel hero-content__laurel--left"></span>
                            <img src="/images/6/01.png" className="hero-content__award-img" alt="Global Search Awards" />
                            <img src="/images/6/02.png" className="hero-content__award-img" alt="The Drum" />
                            <img src="/images/6/03.webp" className="hero-content__award-img" alt="UK Social Media Awards" />
                            <img src="/images/6/04.png" className="hero-content__award-img" alt="Content Awards" />
                            <span className="hero-content__laurel hero-content__laurel--right"></span>
                        </div>
                    </div>

                    <h1 className="hero-content__heading">
                        <span className="hero-content__heading-line">We Create</span>
                        <span className="hero-content__heading-line">
                            Category
                            <span className="hero-content__inline-img">
                                <img src={activeHero.smallImg} className="hero-content__brand-img" alt="Brand" />
                            </span>
                            Leaders
                        </span>
                    </h1>
                    <p className="hero-content__subheading">on every searchable platform</p>

                    {/* Platform Logos */}
                    <div className="hero-content__platforms">
                        <img src="/images/platfrom/google.png" className="hero-content__platform-img" alt="Google" />
                        <img src="/images/platfrom/chatgpt.webp" className="hero-content__platform-img" alt="ChatGPT" />
                        <img src="/images/platfrom/gemini.jpeg" className="hero-content__platform-img" alt="Gemini" />
                        <img src="/images/platfrom/tiktok.png" className="hero-content__platform-img" alt="TikTok" />
                        <img src="/images/platfrom/youtube.png" className="hero-content__platform-img" alt="YouTube" />
                        <img src="/images/platfrom/pinterest.png" className="hero-content__platform-img" alt="Pinterest" />
                        <img src="/images/platfrom/giphy.png" className="hero-content__platform-img" alt="GIPHY" />
                        <img src="/images/platfrom/radit.png" className="hero-content__platform-img" alt="reddit" />
                        <img src="/images/platfrom/amazon.png" className="hero-content__platform-img" alt="amazon" />
                    </div>
                </div>

                {/* Footer */}
                <div className={`hero-footer ${activeMenu ? 'hero-footer--hidden' : ''}`}>
                    <div className="hero-footer__left">
                        Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, Ai and LLM search
                    </div>
                    <div className="hero-footer__right">
                        4 Global Offices serving UK, USA (New York) & EU
                    </div>
                </div>

                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </section>
    );
};

export default Hero;