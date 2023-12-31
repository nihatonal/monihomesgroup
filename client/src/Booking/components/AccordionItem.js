import { useRef, useState, useContext, useEffect } from "react";
import { CartContext } from "../../shared/context/CartContext";
import { HiPlus } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";
import './AccordionItem.css';

const AccordionItem = ({ faq, active, onToggle, type, arrow_down, arrow_up }) => {
    const { name, desc, price, id } = faq;
    const cart = useContext(CartContext);

    const contentEl = useRef();
    const [total, setTotal] = useState(0);
    const [checkedState, setCheckedState] = useState(
        new Array(desc.length).fill(false)
    );
    const arr = [...new Set([].concat(cart.items.map((item) => item.additions)).flat()),]

    const checkboxHandler = (e, position) => {

        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        let addition;
        if (e.target.checked) {
            addition = {
                id: e.target.id,
                name: e.target.name,
                price: e.target.value
            }
            cart.addAdditionsToCart(id, addition);
        } else {
            cart.removeAdditionsToCart(id, e.target.id);
            if (cart.items.filter(item => item.id === id)[0].additions.length === 1) {
                cart.deleteFromCart(id);
            }
        }

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + desc[index].price;
                }
                return sum;
            },
            0
        );

        setTotal(totalPrice);
    }
    return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
            <div className="question" >
                <p className={checkedState.includes(true) ? "question-mark checked" : "question-mark"}>
                    {checkedState.includes(true) ? <HiOutlineCheck /> : <HiPlus />}
                </p>
                <p className="accordion_item-name"> {name}</p>
                <span className="portion">
                    {total > 0 ? `${total}₺` : ""}
                </span>
                <span className="control" onClick={onToggle}>{active ? arrow_down : arrow_up} </span>
            </div>
            <div
                ref={contentEl}
                className="desc_wrapper"
                style={
                    active
                        ? { height: contentEl.current.scrollHeight, margin: '24px 0 26px' }
                        : { height: "0px" }
                }
            >

                {desc.map((item, index) =>
                    <div className="desc" key={index + item.id}


                    >
                        <label className="check-button">
                            <input
                                type={type}
                                id={item.id}
                                name={item.title}
                                value={item.price}
                                checked={checkedState[index]}
                                onChange={(e) => checkboxHandler(e, index)}
                            />
                            <span className={checkedState[index] ? "checked" : ""}>{checkedState[index] ? <HiOutlineCheck /> : <HiPlus />}</span>
                        </label>
                        <p className="desc-item-title">
                            {item.title}
                            <span className="desc-item-price"> {`${item.price}₺`}</span>
                        </p>
                        <p className="desc-item-desc">
                            {item.description}
                        </p>
                    </div>
                )}
            </div>
        </li>
    );
};

export default AccordionItem;