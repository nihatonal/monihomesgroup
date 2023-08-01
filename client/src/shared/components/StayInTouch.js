import React, { useContext } from 'react';

import SocialLinks from '../UI/SocialLinks';
import { Text, LanguageContext } from "../context/Language";
import './StayInTouch.css';
function StayInTouch(props) {
    const lang = useContext(LanguageContext);
    return (
        <div className={`contact-container`}>
            <div className="contact-wrapper">
                <div className="contact-content">
                    <h4 className="home-section-title">
                        <Text tid="section_contact-title" />
                    </h4>
                    <div className="contact-item">
                        {lang.dictionary["section_contact-address"].split(/\r?\n|\r|\n/g).map((item, index) => <p >{item}</p>)}
                    </div>
                    <a href="tel:+905308997709" className="contact-item">
                        +90 530 899 77 09
                    </a>
                    <a href="mailto:info@theglasshuts.com" className="contact-item">
                        monihomes48@gmail.com
                    </a>
                    <SocialLinks />
                </div>
                {props.children}
            </div>

        </div>
    );
}

export default StayInTouch;