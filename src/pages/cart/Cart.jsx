import React, { useContext } from 'react';
import './Cart.css';
import { Store_Context } from '../../context/Store_Context';
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  // Use useContext to access Store_Context
  const { cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(Store_Context);
  const Navigate = useNavigate();

  return (
    <div className='Cart'>
      <div className="cart_items">
        <div className="cart_item_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          // Display only items with a quantity greater than 0 in the cart
          if (cartItems[item.id] > 0) {
            return (
              <div className="">
                <div key={item.id} className="cart_item_title cart_items_item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>₹{item.price*cartItems[item.id]}</p>
                <p className='center_item' onClick={()=>removeFromCart(item.id)}>
                  <i class="fas fa-trash"></i>
                </p>
              </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>


      <div className="cart_down">
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>cart totals</h2>
        </div>
        <div className="cart-total-details">
          <p>sub totaL</p>
          <p>₹{getTotalCartAmount()}</p>
        </div>
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>₹{getTotalCartAmount()===0?0:2}</p>
        </div>
        <div className="cart-total-details">
          <p>totaL</p>
          <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
        </div>
        <button onClick={()=>Navigate('/order')}>proceed to checkout</button>
      </div>
      <div className="cart-promocode">
        <div className="">
          <h5>if you have promocode, enter it here</h5>
          <div className="cart_promocode_input">
            <input type="text" placeholder='promo code' />
            <button>submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
