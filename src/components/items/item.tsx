import { Link } from 'react-router-dom'
import './item.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Item (props:any){   

    const handleClick: React.MouseEventHandler<HTMLImageElement> = (event) => {
        window.scrollTo(0,0)
      };
    return <>
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={handleClick} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    </>
}

export default Item