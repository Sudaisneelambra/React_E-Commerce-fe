import './RelatedProducts.css'
import data_product from '../assets/data'
import Item from '../items/item'
function RelatedProducts(){
    return <>
        <div className="realatedproducts">
            <h1>Teleted Products</h1>
            <hr />
            <div className="realatedproducts-item">
                {data_product.map((e,i)=>{
                    return <Item key={i} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price}/>
                })}
            </div>
        </div>

    </>
}

export default RelatedProducts