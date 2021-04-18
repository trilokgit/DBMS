import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from "../App"
import './SideDrawer.css'
import {useSelector} from 'react-redux'
const SideDrawer = ({ show, click }) => {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    
    const sideDrawerClass = ["sidedrawer"];
    if (show) {
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    return (



        <div className={sideDrawerClass.join(" ")}>

            <ul className="sidedrawer_link" onClick={click}>
                <li>
                    <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer_cartbadge">{getCartCount()}</span>
                        </span>
                    
                        
                    </Link>
                   

                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>

               

            </ul>
            
        </div>
    )
}

export default SideDrawer
