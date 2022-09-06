import React from 'react';
import '../styles/Navbar.css'
import logo from "../assets/a-logo.svg"
import cartIcon from "../assets/Empty Cart.svg"
import currencyIcon from "../assets/Group 1.svg"
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/Shopping/shopping-actions';


const Navbar = () => {
    const activeCategory = useSelector((state) => state.shop.activeTab)
    const products = useSelector((state) => state.shop.products)
    console.log(activeCategory)
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className="navbar_container">
                <ul className="navbar_menu">
                    {
                        products?.categories.map(category =>
                            <li onClick={() => dispatch(setCategory(category?.name))} className={activeCategory === category?.name ? "menu_item active" : "menu_item"}>{category?.name}</li>
                        )
                    }
                </ul>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar_button">
                    <button className="icon_button">
                        <img src={currencyIcon} alt="" />
                    </button>
                    <button className="icon_button">
                        <img src={cartIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Navbar;