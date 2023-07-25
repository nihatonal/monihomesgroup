import React, { useContext } from 'react';

import { LanguageContext } from "../../shared/context/Language";
import background from '../../assets/images/area/fethiye/IMG_20150301_150531.jpg';


import SectionHero from '../../shared/components/SectionHero';
import SectionCard from '../../shared/components/SectionCard';
import Map from '../components/Map';
import Location from '../components/Location';
import { sectionsData } from '../../assets/sectionsData';

import { MdLocationOn } from "react-icons/md";

import './TheArea.css';
function TheArea(props) {
    const lang = useContext(LanguageContext);

    const sectionData = lang.dictionary["area_page"];

    const content = <div className="area-content-wrapper">
        <a href="https://www.google.com/maps/@36.57804,29.0440575,11.26z?entry=ttu"
            className="hero-link"
            target='_blank'
            rel='noreferrer'>
            <MdLocationOn className='location-icon' />{lang.dictionary["area-name"]}
        </a>
        {/* <button className='area-nav-btn'>{lang.dictionary["area-nav"]}</button> */}
    </div>

    const filteredData = (x) => Object.keys(sectionsData)
        .filter(key => x.includes(key))
        .reduce((obj, key) => {
            obj[key] = sectionsData[key];
            return obj;
        }, {});
console.log(sectionData[2].beaches)
    return (
        <div className='page-container area-wrapper' id={'area'}>
            <SectionHero
                image={background}
                title={lang.dictionary["area"]}
                content={content}
            />
            <SectionCard
                slides={sectionsData.fethiye}
                title={sectionData[0]['section-title']}
                buttons={sectionData[0]['section-buttons']}
                desc={sectionData[0]['section-desc']}
            >
                <p className="section-subtitle">
                    {sectionData[0]['section-subtitle']}
                </p>
            </SectionCard>
            <Map map_desc={sectionData[1]["section-subtitle"]}
                beaches={sectionData[1]["beach-list"]}
                vesterborg={lang.dictionary["vesterborg"]}
                copenhagen={lang.dictionary["copenhagen"]}
            />
            <SectionCard
                className='beach_slide'
                title_content={<h2 className="activities">{lang.dictionary["activities"]}</h2>}
                slides={sectionsData.beaches}
                title={sectionData[2]['section-title']}
                buttons={sectionData[2]['section-buttons']}
                desc={sectionData[2]['section-desc']}
            />
            {/*  */}
            {sectionData.slice(3).map((item) =>
                <SectionCard
                    title_content={<h2 className="activities">{lang.dictionary["activities"]}</h2>}
                    key={item['section-id']}
                    slides={filteredData(item['section-id'])[item['section-id']]}
                    title={item['section-title']}
                    buttons={item['section-buttons']}
                    desc={item['section-desc']}
                />
            )}
            <Location />


        </div>

    );
}

export default TheArea;