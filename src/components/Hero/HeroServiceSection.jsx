import React from 'react';
import './HeroServiceSection.css';

const HeroServiceSection = () => {
    return (
        <section className="service-section">
            <div className="service-section__inner site-container">
                <div className="service-section__row">

                    {/* Description Area (Left on Desktop) */}
                    <div className="service-section__desc-col">
                        <p className="service-section__description">
                            A global team of search-first content marketers engineering
                            semantic relevancy & category signals for both the internet and people.
                        </p>

                        {/* Desktop Buttons */}
                        <div className="service-section__btns service-section__btns--desktop">
                            <button className="service-section__btn service-section__btn--outline">
                                <div className="service-section__btn-inner">
                                    <span className="service-section__btn-text">Our Story ↗</span>
                                    <span className="service-section__btn-text service-section__btn-text--clone">Our Story ↗</span>
                                </div>
                            </button>

                            <button className="service-section__btn service-section__btn--ghost">
                                <div className="service-section__btn-inner">
                                    <span className="service-section__btn-text">Our Services ↗</span>
                                    <span className="service-section__btn-text service-section__btn-text--clone">Our Services ↗</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Heading Area (Right on Desktop) */}
                    <div className="service-section__heading-col">
                        <h2 className="service-section__heading">
                            Driving Demand &{' '}
                            <br className="service-section__br--desktop" />
                            <span>Discovery</span>
                            <span className="service-section__inline-img">
                                <img
                                    src="/images/legacy/pioneers.webp"
                                    alt="Discovery Pioneers"
                                    className="service-section__img"
                                />
                            </span>
                        </h2>

                        {/* Mobile Buttons */}
                        <div className="service-section__btns service-section__btns--mobile">
                            <button className="service-section__btn service-section__btn--mobile-outline">
                                Our Story ↗
                            </button>
                            <button className="service-section__btn service-section__btn--mobile-ghost">
                                Our Services ↗
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroServiceSection;