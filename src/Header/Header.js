import React from 'react';
import './Header.css'


const Header = (props) => {
    return (
        <div className="headerMain">
            <div className="container">
                <p className="headNetflex pt-3">
                    <b>netflix</b>roulette
                </p>
                <label className="headFindMovie">FIND YOUR MOVIE HERE</label>
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a> */}
            </div>
           
        </div>
    )
}

export default Header;


