import React, {useState} from 'react';
import './item.scss';
import { useParams } from 'react-router-dom';

const Item = ({data}) => {
    let {id} = useParams();
    var {title, image, price, colors, sizes} = data.find((a)=>{
        if(a.id === +id){
            return a;
        }
    })
    const [color,setColor] = useState(0);
    const [active,setActive] = useState(0);
    return (
        <div className = 'itemContent'>
            <div className='itemImageDiv'>
                <img src={image[color]} width="100%" alt='color' />
                <div className='itemColors'>
                    {colors.map((color,i)=>{
                        return <div className={`colorDiv ${title}-${color}`} style={{backgroundColor: color}} onClick={()=>setColor(i)}></div>
                    })}
                </div>
            </div>
            <div className = 'itemDescription'>
                <h1>{title}</h1>
                <div className='itemSize'>
                    {sizes.map((size,i)=>{
                         return <div className={`size ${active === i ? 'sizeActive' : ''}`} onClick={()=>setActive(i)}>{size}</div>
                    })}
                </div>
                <span>{price}</span>
            </div>
        </div >
    )
}
export default Item;