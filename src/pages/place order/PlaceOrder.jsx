import React, { useContext } from "react";
import "./PlaceOrder.css";
import {Store_Context} from '../../context/Store_Context'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(Store_Context);
  return (
    <form className="placeorder">
      <div className="placeorder_left">
        <h2>delivery information</h2>

        <div className="user_input_field">
          <div className="user">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="first name" />
          </div>
          <div className="user">
            <input type="text" placeholder="first name" />
          </div>
        </div>

        <div className="user">
          <i class="fas fa-envelope"></i>
          <input type="email" placeholder="your email address" />
        </div>

        <div className="user">
          <i class="fas fa-envelope"></i>
          <input type="text" placeholder="street address" />
        </div>

        <div className="user_input_field">
          <div className="user">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="city" />
          </div>
          <div className="user">
            <input type="text" placeholder="state" />
          </div>
        </div>

        <div className="user_input_field">
          <div className="user">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="pin code" />
          </div>
          <div className="user">
            <input type="text" placeholder="country" />
          </div>
        </div>

        <div className="user">
          <i class="fas fa-phone"></i>
          <input type="text" placeholder="phone" />
        </div>
      </div>
      <div className="placeorder_right">
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
        <button onClick={()=>Navigate('/order')}>proceed to Payment</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
