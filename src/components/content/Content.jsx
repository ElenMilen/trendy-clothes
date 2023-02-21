import React from 'react'
import ItemBox from '../itemBox/ItemBox';
import data from '../data';
import './content.scss'

const Content = () => {
    return (
        <div className='content'>
            {data.map((item)=>{
                return <ItemBox id={item.id} title={item.title} image={item.image[0]} price={item.price} key={item.id}/>
            })}
        </div>
    )
}
export default Content