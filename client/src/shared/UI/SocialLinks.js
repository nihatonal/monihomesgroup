import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaVk } from "react-icons/fa"
import './SocialLinks.css';
function SocialLinks(props) {
    return (
        <div className='social-links-wrapper'>
            <a className='social-link' href='https://instagram.com/monihomesfethiye?igshid=MzNlNGNkZWQ4Mg==' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a className='social-link' href='https://www.facebook.com/ugurdinc09/?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
            <a className='social-link' href='https://vk.com/dincugr' target='_blank' rel='noopener noreferrer'><FaVk /></a>
            <p className='social-link' onClick={() => {
                window.open('https://web.whatsapp.com/send?phone=+905308997709&text=&app_absent=0', '_blank')
            }}><FaWhatsapp /></p>
        </div>
    );
}

export default SocialLinks;