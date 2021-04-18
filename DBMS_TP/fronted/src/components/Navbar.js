import React, { useContext, useRef, useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import {useSelector} from 'react-redux'

const Navbar = ({ click }) => {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    const renderList = () => {
        if (state) {
            return [
               
                   <li key="1">
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                        </span>
                        
                        <span className="cartlogo_badge">{getCartCount()}</span>
                    </Link>
                </li>,
                <li key="2">
                    <Link to="/">
                       Shop
                    </Link>
                </li>,
                    <li key="8">
                    <Link to="/" style={{ color: "white" }}>
                        {state.name}
                    </Link>
                
                </li>,
               

                <li key="5">
                    <li
                        onClick={() => {
                            localStorage.clear()
                            dispatch({ type: "CLEAR" })
                            history.push('/login')
                        }}
                    >
                        <Link style={{textDecoration:"none",color:"white",fontSize:"1.2rem"}}>Logout</Link>
                    </li>
                </li>
             
            

            ]
           
        } else {
            return [
                <li key="6"><Link to="/login">Signin</Link></li>,
                <li key="7"><Link to="/signup">Signup</Link></li>

            ]
        }
    }



    return (
        <nav className="navbar">
            <div className="nav_logo">
                <h2><Link to = {state ? "/" : "/login"} style={{textDecoration:"none" , color:"white"}}>Shopping Site</Link></h2>
            </div>
            <ul className="navbar_link">
                
                {renderList()}
                
            </ul>


            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar
