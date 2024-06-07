import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, createContext, useState } from "react"
import all_product from '../components/assets/allproduct'

export const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let cart ={};
    for(let i=0;i< all_product.length+1;i++){
        cart[i]=0
    }
    return cart
}


const ShopContextProvider = (props)=>{

    
    const [cart, setCart] = useState(getDefaultCart())

    const addToCart = (itemid) =>{
               
        setCart((prev)=>({...prev, [itemid]:prev[itemid]+1}))
        
        
    }
    
    const removeToCart = (itemid) =>{
        setCart((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    
    const getTotalCartAmount =()=>{
        let totalAmount =0
        for(const item in cart){
            
            if(cart[item]>0){
                let itemInfo = all_product.find((e)=> {
                   return e.id === Number(item)
                })
                totalAmount += itemInfo.new_price * cart[item]
            }
        }   
        return totalAmount
    }
    const getTotalCartIem = ()=>{
        let totalItem=0
        for(const item in cart){
            if(cart[item]>0){
                totalItem += cart[item]
            }
        }
        return totalItem
    } 

    const contextValue = {all_product,cart,getTotalCartAmount,addToCart,removeToCart,getTotalCartIem};

    
    return (
        
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider