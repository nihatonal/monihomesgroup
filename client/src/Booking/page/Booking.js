import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../../shared/context/Language";

import SectionHero from '../../shared/components/SectionHero';
import Additionals from '../components/Additionals';
import HutRules from '../components/HutRules';
import Cancellation from '../components/Cancellation';
import Information from '../components/Information';
import Cart from '../components/Cart';
import ConseptSelect from '../components/ConseptSelect';
import background from '../../assets/images/booking/hero.png';
import { MdLocationOn } from "react-icons/md";
import './Booking.css';
function Booking() {
    const lang = useContext(LanguageContext);
    const content =
        <div className="area-content-wrapper">
            <a href="https://www.google.com/maps/place/4953+Vesterborg,+Danimarka/@54.8696449,11.3133109,12z/data=!4m5!3m4!1s0x47ad568afb8a7b8b:0x2b0ef19488050ea5!8m2!3d54.856686!4d11.271945"
                className="hero-link"
                target='_blank'
                rel='noreferrer'>
                <MdLocationOn className='location-icon' />{lang.dictionary["area-name"]}
            </a>
            <NavLink to='/faq' className='booking-nav-btn'>{lang.dictionary["read_faq"]}</NavLink>
        </div>
    return (
        <div className='page-container booking-container'>
            <SectionHero
                image={background}
                title={lang.dictionary["booking"]}
                content={content}

            />
            <div className='booking-wrapper'>
                <ConseptSelect />
                <Additionals />
                <Cart />
                <HutRules />
                <Cancellation />
                <Information />
            </div>

        </div>
    );
}

export default Booking;