/* eslint-disable @typescript-eslint/no-explicit-any */
import './Newolloctions.css'
import new_collection from '../assets/newcollections'
import Item from '../items/item'

function NewColloctions(){
    return <>
        <div className="new-collection">
            <h1>New Colloctions</h1>
            <hr />
            <div className="collections">
                {new_collection.map((dt:any, index:number)=>{                    
                    return <Item key={index} id={dt.id} name={dt.name} image={dt.image} new_price={dt.new_price} old_price={dt.old_price} />
                })}
            </div>
        </div>
    </>
}

export default NewColloctions