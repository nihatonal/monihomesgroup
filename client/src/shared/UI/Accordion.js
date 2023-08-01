import { useState, useContext } from "react";
import { CartContext } from "../../shared/context/CartContext";
import './Accordion.css'
const Accordion = ({ faqs, arrow_down, arrow_up,type, AccordionItem, }) => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <ul className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                    key={index + faq.price}
                    faq={faq}
                    arrow_down={arrow_down}
                    arrow_up={arrow_up}
                    type={type}
                // checkboxHandler={(e) => checkboxHandler(e, index)}
                // value={faq.price}
                // checked={checkedState[index]}

                />
            ))}
        </ul>
    );
};

export default Accordion;