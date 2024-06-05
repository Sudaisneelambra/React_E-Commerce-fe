import './ProductDisplay.css'
import starIcon from '../assets/star_icon.png'
import starDullIcon from '../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'


function ProductDisplay(props){

    const {product} = props
    const {addToCart}= useContext(ShopContext)

    return <>
    <div className="productdisplay">
        <div className="product_display_left">
            <div className="productdisplay_imagelist">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
               <img  className='productdispal-main-img' src={product.image} alt="" /> 
            </div>
        </div>
        <div className="product_display_right">
            <h1>{product.name}</h1>
            <div className="productdispaly-right-star">
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starDullIcon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div> 
           </div>
           <div className="productdisplay-right-description">
                A light weight ussually knitted, pullover shirt, close-fitting and the one of the best product the world.
           </div>
           <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdeisplay-right-sizes">
                <div className="">S</div>
                <div className="">M</div>
                <div className="">L</div>
                <div className="">XL</div>
                <div className="">2XL</div>
            </div>
           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className="productdispaly-right-category">
                <span>Category : </span> women, Tshirt, Crop Top
           </p>
           <p className="productdispaly-right-category">
                <span>Tags : </span> modern.latest,
           </p>
        </div>

    </div>
    </>
}

export default ProductDisplay