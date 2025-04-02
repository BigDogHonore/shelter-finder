import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Homeless Shelter Finder</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shelters">Shelters</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;