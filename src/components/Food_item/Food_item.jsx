import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Food_item.css';
import { Store_Context } from '../../context/Store_Context';

const Food_item = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(Store_Context);

    return (
        <div className="food_item">
            <div className="food_item_img_container">
                <img src={image} className='food_item_image' alt="" />

                {
                    !cartItems[id] ? (
                        <img className='add_first' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                    ) : (
                        <div className="food-item-counter">
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                    )
                }

            </div>
            <div className="food_item_info">
                <div className="food_item_name_rating">
                    <p className='food_item_desc'>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food_item_desc">{description}</p>
                <p className='price'>₹ {price}</p>
            </div>
        </div>
    );
};

export default Food_item;
