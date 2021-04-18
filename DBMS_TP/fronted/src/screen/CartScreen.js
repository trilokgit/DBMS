import React from 'react'
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import './CartScreen.css';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';


const CartScreen = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty,item)=> Number(item.qty)+ qty,0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
    }

    return (
        <>
            <div style={{padding:"50px"}} className="cartscreen">
                <div className="cartscreen_left">
                    {cartItems.length == 0 ? <h1></h1> : <h2>Shopping Cart</h2>}

                    {cartItems.length === 0 ? (
                        <div style={{marginLeft:"400px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                       
                        <div>
                            <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="no-img"/>
                            </div>
                            <div style={{ fontWeight: "bold",fontSize:"20px" }}>
                                Your Cart Is Empty <Link to="/" style={{textDecoration:"none"}}>Go To Shop</Link>
                            </div>
                        </div>
                    ) : (
                           
                        cartItems.map((item) => (
                            <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeFromCartHandler={removeFromCartHandler}
                            />
                        ))
                            
                      
              
                    )}
                </div>
                {cartItems.length === 0 ? (
                        <h2></h2>
                ) : (< div className="cartscreen_right">
                    <div className="cartscreen_info">
                        <p>Total Items: ({getCartCount()})</p>
                        <p>Total Price : ${getCartSubTotal()}</p>
                    </div>
                    <div>
                        <button>Proceed To Checkout</button>
                    </div>


                </div>)}
               
                </div>
        </>
    )
}

export default CartScreen
