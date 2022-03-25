import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <p>Take Your Pick!</p>
                <div>
                    <a href="/">Home</a>
                    <a href="/">Oncoming</a>
                    <a href="/">Top Ten</a>
                    <a href="/">Contribute</a>
                </div>
        </div>
    );
};

export default Header;