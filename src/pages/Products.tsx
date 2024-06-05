import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrums from "../components/breadcrums/Breadcrums"
import ProductDisplay from "../components/productDisplay/ProductDisplay"
import DiscriptionBox from "../components/DiscriptionBox/DiscriptionBox"
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"

function Products(){

    const {all_product} = useContext(ShopContext)
    
    const {productId} = useParams()
    const product = all_product.find((product) => product.id === Number(productId))
    return <>
        <Breadcrums product={product}/>
        <ProductDisplay product ={product}/>
        <DiscriptionBox/>
        <RelatedProducts/>
    </>
}

export default Products