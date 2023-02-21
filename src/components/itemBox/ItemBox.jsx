import React from 'react';
import './itemBox.scss';
import { Link } from 'react-router-dom';

const ItemBox = ({image,title,price,id}) => {
    return (
        <Link to={`/item/${id}`}>
        <div className='itemBox'>
            <div className="itemImage" style={{backgroundImage: `url(${image})`}}></div>
            <div className="itemNamePrice">
                <span className='itemName'>{title}</span>
                <span className='itemPrice'>{price} $</span>
            </div>
        </div>
        </Link>
    )
}
export default ItemBox

