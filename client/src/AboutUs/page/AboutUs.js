import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Text, LanguageContext } from "../../shared/context/Language";
import SectionHero from '../../shared/components/SectionHero';
import ImageGallery from '../components/ImageGallery';
import StayInTouch from '../../shared/components/StayInTouch';
import ContactForm from '../components/ContactForm';
import { sectionsData } from '../../assets/sectionsData';
import ReactPlayer from 'react-player'

import background from '../../assets/images/aboutus/hero.png';
import hearth from '../../assets/icons/hearth.png';
import video_ from '../../assets/videos/dron_edited.mp4'
import './AboutUs.css';
function AboutUs(props) {
    const lang = useContext(LanguageContext);
    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
            block: "start",
            behavior: 'smooth',

        });
    }
    const content = <div className="about-content-wrapper">
        <button className='about-nav-btn' onClick={() => scrollSmoothTo('contact')}>{lang.dictionary["contact_us"]}</button>
        <NavLink to='/faq' className='about-nav-btn'>{lang.dictionary["read_faq"]}</NavLink>
    </div>

    return (
        <div className='page-container aboutus-wrapper'>
            <SectionHero
                image={background}
                title={lang.dictionary["about_us"]}
                content={content}
            />
            <div className="section-card-container">
                <div className="section-image-wrapper">
                    <ReactPlayer url={video_} playing={true} muted={true} loop={true}
                        width={'100%'} height={'100%'}
                    />
                </div>
                <div className="section-card-content">
                    <h3 className="section-card-title"><Text tid='about_us_section_title' /></h3>
                    <p className="section-card-desc"><Text tid='about_us_section_desc' /></p>
                </div>
            </div>
            <ImageGallery
                title={lang.dictionary["about_us_section_galery"]}
                images={sectionsData.aboutus}
                image_content={lang.dictionary["about_us_image_desc"]}
            />
            <div className="about_us-contact-section" id='contact'>
                <StayInTouch>
                    <ContactForm />
                </StayInTouch>
                <div className="heart-icon-wrapper">
                    <p><Text tid='heart-text' /></p>
                    <img src={hearth} alt="hearth" />
                </div>
            </div>

        </div>
    );
}

export default AboutUs;