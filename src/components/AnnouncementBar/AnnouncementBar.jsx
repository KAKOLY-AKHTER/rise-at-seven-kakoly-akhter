import React from 'react';
import './Announcementbar.css';

const AnnouncementBar = () => {
    return (
        <div className="announcement-bar">
            <a
                href="https://riseatseven.com/category-leaderboard/"
                className="announcement-bar__link"
            >
                <div className="announcement-bar__text-wrapper">
                    <p className="announcement-bar__text">
                        🚨 The Category Leaderboard - Live Now
                    </p>
                    <p className="announcement-bar__text announcement-bar__text--hover">
                        🚨 The Category Leaderboard - Live Now
                    </p>
                </div>
            </a>
        </div>
    );
};

export default AnnouncementBar;