import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

function CartItems(){

    const {all_product,cart, removeToCart, getTotalCartAmount} = useContext(ShopContext)
    return <>
        <div className="cart-items">
            <div className="cartitem-formate-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e:any,i:any)=>{
                if(cart[e.id]>0){
                    return(
                        <div className="" key={i}>
                        <div className="cart-item-formate cartitem-formate-main">
                            <img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cart-item-quantity'>{cart[e.id]}</button>
                            <p>{e.new_price*cart[e.id]}</p>
                            <img className='cartitem-remove-icon' src={remove_icon} alt=""  onClick={()=>{removeToCart(e.id)}}/>
                        </div>
                        <hr />
                        </div>
                    )
                }
                return null
            })}
            <div className="cartItem-down">
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div className="">
                        <div className="cartitem-total-item">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECK OUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code , Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text"  placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CartItems