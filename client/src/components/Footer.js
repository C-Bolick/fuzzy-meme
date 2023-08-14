import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} The Golden Spatula. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
