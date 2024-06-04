/* eslint-disable @typescript-eslint/no-explicit-any */
import './popular.css'
import data_product from '../assets/data'
import Item from '../items/item'

function Popular(){

    return <>
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((e:any,i:any)=>{
                    return <Item key={i} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
                })}
            </div>
        </div>
    </>
}

export default Popular