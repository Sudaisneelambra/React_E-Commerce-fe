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
        console.log(itemid);        
        setCart((prev)=>({...prev, [itemid]:prev[itemid]+1}))
        console.log(cart);
        
    }
    
    const removeToCart = (itemid) =>{
        setCart((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    
    const contextValue = {all_product,cart,addToCart,removeToCart};

    
    return (
        
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider