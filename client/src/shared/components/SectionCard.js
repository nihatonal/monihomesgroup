import React, { useState } from 'react';
import Slider from '../UI/Slider';
import SimpleSlider from '../UI/SimpleSlider';
import { BsCheckCircle } from 'react-icons/bs';
import './SectionCard.css';
function SectionCard(props) {
    const [desc, setDesc] = useState(0);
    const buttonHandler = (x) => {
        setDesc(x)
    }

    return (
        <div className={`section-card-container ${props.className}`}>
            {props.title_content}

            <SimpleSlider slides={props.slides} />


            {/* <Slider slides={props.slides} /> */}
            <div className="section-card-content">
                <h3 className="section-card-content-title">{props.title}</h3>
                {props.children}
                <div className="section-btns-wrapper" style={{ gridTemplateColumns: `repeat(${props.buttons.length},auto)` }}>
                    {props.buttons.map((button, index) =>
                        <button
                            key={button + index}
                            id={button + (index + 1)}
                            className={desc === index ? `section-btn active-btn` : 'section-btn'}
                            onClick={() => buttonHandler(index)}
                        >
                            {button}
                        </button>
                    )}

                </div>
                {props.buttons.includes("Features") && desc === 2 ?
                    <ul className='section-features'>
                        {props.features.map((item, index) =>
                            <li className="section-desc"><BsCheckCircle />{item}</li>
                        )}
                    </ul>

                    : <div>{props.desc[desc].split(/\r?\n|\r|\n/g).map((item, index) => <p className="section-desc">{item}</p>)}</div>
                }
            </div>
        </div>
    );
}

export default SectionCard;