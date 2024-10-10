import React, { useContext } from 'react';
import './Food_Display.css';
import { Store_Context } from '../../context/Store_Context';
import Food_item from '../Food_item/Food_item';

const Food_Display = ({category}) => { 
    const { food_list } = useContext(Store_Context);

    

    return (
        <div>
            <div className="food_display" id="food_display">
                <h2>Top Dishes Near You</h2>
                <div className="food_display_list">
                    {food_list.map((item,index) => {
                        if (category==="All" ||   category===item.category) {
                           return <Food_item
                            key={index}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                        }    
})}
                </div>
            </div>
        </div>
    );
}

export default Food_Display;
