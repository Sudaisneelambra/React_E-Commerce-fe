import NewColloctions from "../components/Newcolloctions/Newcolloctions"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Offers from "../components/Offers/Offers"
import Hero from "../components/hero/Hero"
import Popular from "../components/popular/Popular"

function Shop(){
    return <>
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewColloctions/>
        <NewsLetter/>
    </div>
    </>

}
export default Shop