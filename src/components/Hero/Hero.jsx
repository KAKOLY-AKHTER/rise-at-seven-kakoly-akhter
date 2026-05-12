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
                        <div className="hero-content__tagline-wrap">
                            <div className="hero-content__tagline-text">
                                #1 Most recommended content marketing agency
                            </div>
                            <div className="hero-content__awards-row">
                                <svg viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-content__wreath">
                                    <path d="M25.826 36.2423C24.1628 35.2302 22.3284 34.9354 20.4357 34.7259C19.6852 34.6204 18.9236 34.4691 18.193 34.2705C17.3545 34.0474 16.5347 33.7576 15.7419 33.4062L16.4438 31.9431C17.2169 30.332 16.5375 28.3991 14.9263 27.6261L14.0759 29.3985C13.5361 30.5234 13.7046 31.805 14.4037 32.7394C13.3196 32.1373 12.3026 31.4146 11.3802 30.5845L12.6328 29.1752C13.8199 27.8396 13.6998 25.7945 12.364 24.6072L11.0579 26.0765C10.0602 27.199 9.98609 28.8225 10.7806 30.0168C10.6575 29.8939 10.5358 29.7692 10.4166 29.6422C9.49052 28.6654 8.6932 27.5814 8.02681 26.4223L9.41226 25.5441C10.9217 24.5875 11.3698 22.5885 10.4131 21.0791L8.75281 22.1315C7.7684 22.7554 7.23555 23.8229 7.24942 24.9087C6.7712 23.8595 6.39118 22.7641 6.11088 21.6429L7.61991 21.1998C9.33444 20.6962 10.3162 18.8982 9.81266 17.1835L7.92644 17.7374C6.85358 18.0523 6.06774 18.8744 5.75319 19.8655C5.57825 18.727 5.50281 17.5732 5.52904 16.4239L7.2633 16.4128C9.05024 16.4013 10.4897 14.9435 10.4782 13.1565L8.5124 13.1691C7.23035 13.1773 6.12736 13.93 5.61055 15.0146C5.73 13.7312 5.98818 12.4645 6.37211 11.2376L8.06062 11.7101C9.78144 12.1916 11.5669 11.1871 12.0486 9.46623L10.1554 8.93641C8.90673 8.58696 7.62424 9.02009 6.83038 9.94142C7.30904 8.72939 7.91213 7.56635 8.62664 6.47593L10.1355 7.40528C11.6568 8.34265 13.6501 7.86898 14.5873 6.3476L12.9135 5.31658C11.788 4.62331 10.4045 4.70222 9.38126 5.40589C9.87033 4.76053 10.4008 4.14639 10.9692 3.56888C11.3054 3.84679 11.7648 3.98423 12.2801 3.86023C12.6898 3.7616 13.1 3.57083 13.4724 3.24067C15.26 1.65751 15.26 0.0708753 15.26 0.0708753C13.0683 -0.225683 11.698 0.452629 10.855 1.28334C10.1931 1.93542 10.3013 2.86694 10.8194 3.42667C10.0988 4.13143 9.44456 4.88605 8.85752 5.68142C9.29 4.30204 8.75303 2.75334 7.46577 1.96057L5.792 0.929551C4.85463 2.45093 5.3283 4.44425 6.84968 5.3814L8.39642 6.33437C7.60321 7.51085 6.94961 8.76602 6.43887 10.0721C6.32463 8.76906 5.42108 7.61187 4.087 7.23857L2.19384 6.70876C1.71237 8.42958 2.71694 10.215 4.43776 10.6967L6.05409 11.1491C5.63353 12.4429 5.34824 13.7772 5.2004 15.1264C4.69182 13.9916 3.54916 13.2042 2.22571 13.2127L0.259922 13.2252C0.271412 15.0122 1.72927 16.4516 3.51621 16.4401L5.10068 16.4299C5.03933 17.8386 5.12691 19.2542 5.36667 20.6479C4.57671 19.6171 3.20665 19.1237 1.88601 19.5115L0 20.0652C0.503586 21.7797 2.30158 22.7615 4.01633 22.2579L5.59928 21.7931C5.90776 23.1092 6.35563 24.398 6.94419 25.6345C5.91621 24.9679 4.55222 24.917 3.44966 25.6157L1.78932 26.6681C2.74598 28.1776 4.74494 28.6257 6.25439 27.669L7.56983 26.8353C8.22039 27.9801 9.00038 29.0699 9.91151 30.0823C8.7617 29.767 7.48073 30.1015 6.63528 31.053L5.32916 32.5224C6.66476 33.7095 8.70989 33.5894 9.89721 32.2535L10.9189 31.1042C11.9553 32.0671 13.113 32.8948 14.3532 33.5737C13.0642 33.4781 11.7889 34.1658 11.196 35.4014L10.3455 37.1739C11.9566 37.9469 13.8895 37.2675 14.6625 35.6564L15.4065 34.1057C16.8386 34.7702 18.36 35.2451 19.9167 35.5122C20.2867 35.5738 20.73 35.6432 21.0908 35.6865C23.2018 35.9542 24.9211 36.55 26.5574 37.9224L27.162 37.1667C26.7397 36.8346 26.2964 36.5207 25.8264 36.2426L25.826 36.2423Z"></path>
                                </svg>
                                <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png" className="hero-content__award-logo" alt="Award 1" />
                                <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png" className="hero-content__award-logo" alt="Award 2" />
                                <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png" className="hero-content__award-logo" alt="Award 3" />
                                <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UK-Content-Awards-White.png" className="hero-content__award-logo" alt="Award 4" />
                                <svg viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-content__wreath">
                                    <path d="M26.1158 19.5111C24.7952 19.1232 23.4251 19.6166 22.6352 20.6472C22.8747 19.2535 22.9627 17.8379 22.9011 16.4293L24.4854 16.4395C26.2723 16.451 27.7302 15.0115 27.7417 13.2246L25.7759 13.212C24.4527 13.2036 23.31 13.9907 22.8014 15.1256C22.6536 13.7763 22.3683 12.4422 21.9477 11.1485L23.5641 10.6963C25.2849 10.2148 26.2897 8.42914 25.808 6.70832L23.9148 7.23814C22.5807 7.61144 21.6772 8.76862 21.563 10.0717C21.0522 8.76559 20.3988 7.51042 19.6054 6.33416L21.1524 5.38118C22.6737 4.44381 23.1474 2.45071 22.21 0.929334L20.5363 1.96035C19.249 2.75334 18.712 4.30204 19.1447 5.68164C18.5577 4.88627 17.9034 4.13143 17.1826 3.42667C17.701 2.86715 17.8091 1.93542 17.1473 1.28334C16.304 0.452629 14.9337 -0.225683 12.7423 0.0708753C12.7423 0.0708753 12.7423 1.65751 14.5294 3.24067C14.9021 3.57083 15.312 3.7616 15.7217 3.86023C16.236 3.98402 16.6942 3.84723 17.0302 3.57083C17.5991 4.14834 18.1306 4.76183 18.621 5.40611C17.5976 4.70222 16.2138 4.62309 15.0883 5.31658L13.4145 6.3476C14.3519 7.86898 16.345 8.34265 17.8664 7.40528L19.3773 6.47441C19.4378 6.56633 19.4977 6.6589 19.5564 6.7519C20.2139 7.76709 20.7591 8.8458 21.1931 9.96678C20.401 9.0279 19.1064 8.58371 17.8464 8.93641L15.9533 9.46623C16.4347 11.187 18.2204 12.1918 19.9412 11.7101L21.6321 11.2369C22.0045 12.4557 22.2521 13.713 22.3759 14.9829C21.8528 13.9153 20.7589 13.1771 19.4894 13.1689L17.5236 13.1563C17.5122 14.9432 18.9516 16.4011 20.7385 16.4126L22.4635 16.4236C22.491 17.5726 22.4186 18.7241 22.2469 19.8597C21.931 18.8711 21.1461 18.0517 20.0754 17.7374L18.1892 17.1835C17.6856 18.898 18.6674 20.6962 20.3819 21.1998L21.8916 21.6431C21.6124 22.7678 21.2324 23.866 20.7522 24.9185C20.7693 23.8294 20.2362 22.7574 19.2488 22.1317L17.5885 21.0793C16.6318 22.5887 17.0799 24.5877 18.5893 25.5443L19.9778 26.4245C19.3121 27.5804 18.5143 28.6628 17.585 29.6426C17.4645 29.7716 17.342 29.8982 17.2173 30.0228C18.0157 28.8279 17.9429 27.2012 16.9435 26.077L15.6374 24.6076C14.3018 25.7947 14.1815 27.8401 15.3686 29.1757L16.6227 30.5865C15.7009 31.4168 14.684 32.1363 13.6001 32.7365C14.2973 31.8024 14.4648 30.5225 13.9255 29.3989L13.075 27.6265C11.4639 28.3996 10.7845 30.3324 11.5576 31.9435L12.2582 33.4038C10.8847 34.0125 9.42985 34.4402 7.94359 34.6704C7.57181 34.7259 7.17748 34.7808 6.79789 34.8215C4.50564 35.0815 2.65757 35.6999 0.839844 37.1671L1.44445 37.9228C1.83574 37.6055 2.23982 37.3104 2.66212 37.0518C3.94872 36.2469 5.39553 35.8909 6.91084 35.6867C8.89049 35.4606 10.8129 34.9293 12.5949 34.1053L13.3393 35.6568C14.1124 37.2679 16.0452 37.9473 17.6563 37.1743L16.8059 35.4019C16.2132 34.1666 14.9387 33.479 13.6502 33.574C14.886 32.8987 16.0406 32.074 17.0831 31.1046L18.1048 32.254C19.2919 33.5896 21.3373 33.7099 22.6729 32.5228L21.3668 31.0534C20.5211 30.102 19.2401 29.7675 18.0905 30.0827C19.0017 29.0701 19.7814 27.9805 20.432 26.8357L21.7474 27.6695C23.2569 28.6261 25.2558 28.178 26.2125 26.6686L24.5522 25.6161C23.4494 24.9172 22.0854 24.9681 21.0574 25.635C21.646 24.3984 22.0939 23.1097 22.4025 21.7934L23.9855 22.2581C25.7 22.7617 27.4982 21.7799 28.0018 20.0654L26.1156 19.5115L26.1158 19.5111Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <h1 className="hero-content__heading">
                        <span className="hero-content__heading-line">We Create</span>
                        <span className="hero-content__heading-line">
                            Category
                            <span className="hero-content__inline-img-wrap">
                                <img src={activeHero.smallImg} className="hero-content__brand-img" alt="Brand" />
                            </span>
                            Leaders
                        </span>
                    </h1>
                    <p className="hero-content__subheading">on every searchable platform</p>

                    {/* Platform Logos */}
                    <div className="hero-content__platforms">
                        <img src="public/images/platfrom/googleee-removebg-preview.png" className="hero-content__platform-img" alt="Google" />
                        <img src="/images/platfrom/chatgpt.png" className="hero-content__platform-img" alt="ChatGPT" />
                        <img src="/images/platfrom/gimini.png" className="hero-content__platform-img" alt="Gemini" />
                        <img src="/images/platfrom/tiktok-removebg-preview.png" className="hero-content__platform-img" alt="TikTok" />
                        <img src="/images/platfrom/youtube-removebg-preview.png" className="hero-content__platform-img" alt="YouTube" />
                        <img src="/images/platfrom/pinterest-removebg-preview.png" className="hero-content__platform-img" alt="Pinterest" />
                        <img src="/images/platfrom/giphy-removebg-preview.png" className="hero-content__platform-img" alt="GIPHY" />
                        <img src="/images/platfrom/radit.png" className="hero-content__platform-img" alt="reddit" />
                        <img src="/images/platfrom/amajon.webp" className="hero-content__platform-img" alt="amazon" />
                    </div>
                </div>

                {/* Footer */}
                <div className={`hero-footer ${activeMenu ? 'hero-footer--hidden' : ''}`}>
                    <div className="hero-footer__left">
                        Organic media planners creating, distributing & optimising <br />
                        <strong>search-first</strong> content for SEO, Social, PR, Ai and LLM search
                    </div>
                    <div className="hero-footer__right">
                        4 Global Offices serving <br />
                        UK, USA (New York) & EU
                    </div>
                </div>

                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </section>
    );
};

export default Hero;