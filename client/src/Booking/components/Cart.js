import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from "../../shared/context/CartContext";
import { LanguageContext } from "../../shared/context/Language";

import PickbookDates from '../../shared/UI/PickbookDates';
import './Cart.css';
function Cart(props) {
    const cart = useContext(CartContext);
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_words"][0];
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(null)

    const discount_coupons = [
        {
            id: 'discount_coupon_4621',
            amount: 200,
        },
        {
            id: 'discount_coupon_4622',
            amount: 200,
        },
        {
            id: 'discount_coupon_4270',
            amount: 300,
        },
        {
            id: 'discount_coupon_009',
            amount: 500,
        }
    ]


    const couponHandler = (e) => {
        e.preventDefault();
        if (discount_coupons.filter(item => item.id === coupon).length > 0) {
            setDiscount(discount_coupons.filter(item => item.id === coupon)[0].amount)
        } else {
            setDiscount(0)
        }

    }
    return (
        <div className='cart-wrapper'>
            {props.children}
            <p className='cart-title'>{cart.concept.price}₺<span> / {sectionData.night}</span></p>
            <PickbookDates>
                <NavLink
                    to={'/booking/payment'}
                    className="cart-book-btn"
                    onClick={() => console.log(cart.dateRange)}>
                    {sectionData.book}
                </NavLink>
            </PickbookDates>
            <div className="cart-items-wrapper">
                <div className="cart-item">
                    <p>{`${cart.concept.price}₺ x ${cart.dateRange.length - 1} ${cart.dateRange.length === 2 ? sectionData.night : sectionData.nights}`}</p>
                    <p>{cart.concept.price * (cart.dateRange.length - 1)}₺</p>
                </div>
                <div className="cart-item">
                    <p>{cart.concept.title}</p>
                    <p>{cart.concept.price}₺</p>
                </div>
                {cart.items.map((item) =>
                    item.additions.map((add, index) =>
                        <div className="cart-item" key={index}>
                            <p>{add.name}</p>
                            <p>{add.price}₺</p>
                        </div>
                    )
                )}
                {discount > 0 &&
                    <div className="cart-item discount">
                        <p>10% {sectionData.discount}</p>
                        <p>{discount}₺</p>
                    </div>
                }
            </div>
            <p className="cart-total">
                {sectionData.total}
                <span>
                    {(cart.concept.price * (cart.dateRange.length - 1)) + cart.getTotalCost() - discount}₺
                </span>
            </p>
            <div className="cart-coupon-wrapper">
                <input
                    id='coupon'
                    name='coupon'
                    onChange={(e) => setCoupon(e.target.value)}
                    value={coupon}
                    placeholder={sectionData.coupon}
                />
                {discount === 0 && <p className='invalid-code'>{sectionData.invalid_coupon}</p>}
                <button onClick={couponHandler}>{sectionData.apply}</button>
            </div>
        </div >
    );
}

export default Cart;