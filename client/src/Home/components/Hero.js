import React, { useState } from 'react';
import { Text } from "../../shared/context/Language";
import ButtonBook from '../../shared/UI/ButtonBook';
import YoutubeEmbed from '../../shared/UI/YoutubeEmbed';
import './Hero.css';

function Hero(props) {

    return (
        <div className='hero-container'>
            <div className="hero-images-wrapper">
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className="hero-content">
                <h1 className="hero-content-title"><Text tid="hero-title" /></h1>
                <p className="hero-content-desc"><Text tid="hero-suptitle" /></p>
            </div>
            <ButtonBook className='hero-btn' />
        
        </div >
    );
}

export default Hero;