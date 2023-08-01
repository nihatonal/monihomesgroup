import React, { useContext, useState } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import { CartContext } from "../../shared/context/CartContext";

import { HiPlus } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";
import './ConseptSelect.css'
function ConseptSelect(props) {
    const lang = useContext(LanguageContext);
    const cart = useContext(CartContext);
    const [clicked, setClicked] = useState();
    const sectionData = lang.dictionary["booking_concept_services"][0].desc;

    return (
        <div id="additionals-wrapper">
            <p className="booking-section-title">{lang.dictionary["booking_consept"]}</p>
            <ul className="accordion">
                {sectionData.map((faq, index) => (
                    <div className="desc" >
                        <label className="check-button" htmlFor={faq.id}>
                            <input
                                className='radio-input'
                                type={'radio'}
                                id={faq.id}
                                name={'consept'}
                                value={faq.price}
                                // checked={checkedState[index]}
                                onChange={() => {
                                    cart.addOneToCart(sectionData[index])
                                    setClicked(index)

                                }}
                            />
                            <span className={clicked === index ? "checked" : ""}>{clicked === index ? <HiOutlineCheck /> : <HiPlus />}</span>
                        </label>
                        <p className="desc-item-title">
                            {faq.title}
                            <span className="desc-item-price"> {`${faq.price}₺`}</span>
                        </p>
                        <p className="desc-item-desc">
                            {faq.description}
                        </p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ConseptSelect;