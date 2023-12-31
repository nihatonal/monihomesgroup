import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import background from '../../assets/images/thehut/hero.png';

import SectionHero from '../../shared/components/SectionHero';
import SectionCard from '../../shared/components/SectionCard';
import { sectionsData } from '../../assets/sectionsData';
import './Concept.css';

function Concept() {
    const lang = useContext(LanguageContext);

    const sectionData = lang.dictionary["concept_page"];

    const filteredData = (x) => Object.keys(sectionsData)
        .filter(key => x.includes(key))
        .reduce((obj, key) => {
            obj[key] = sectionsData[key];
            return obj;
        }, {});
    return (
        <div className='page-container hut-wrapper'>
            <SectionHero
                image={background}
                title={lang.dictionary["concept"]}
            />
            {sectionData.map((item) =>
                <SectionCard
                    key={item['section-id']}
                    slides={filteredData(item['section-id'])[item['section-id']]}
                    title={item['section-title']}
                    buttons={item['section-buttons']}
                    desc={item['section-desc']}
                    features={item['section-features']}
                />
            )}
        </div>
    );
}

export default Concept;