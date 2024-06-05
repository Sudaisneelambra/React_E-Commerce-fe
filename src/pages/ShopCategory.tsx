
import { useContext } from 'react'
import './CSS/shopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/items/item'

function ShopCategory(props:any){    

    const {all_product} = useContext(ShopContext)
    
    if (!all_product) {
        return <div>Loading...</div>; // Add a fallback for undefined context
    }
    return <>
        <div className="shop-category">
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Shoping 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon } alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((e:any,i:any)=>{                      
                    if(props.category === e.category){
                        return <Item key={i} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
                    } else{
                        return null
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    </>
}
export default ShopCategory