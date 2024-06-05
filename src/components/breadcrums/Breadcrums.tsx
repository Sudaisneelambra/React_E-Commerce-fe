import './Breadcrums.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

function Breadcrums(props:any){
    
    const {product} = props
    
    return <>
        <div className="breadcrums">
            HOME <img src={arrow_icon} alt="" /> SHOP  <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    </>
}

export default Breadcrums