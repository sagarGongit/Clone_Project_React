import { Link } from "react-router-dom";


function Catagory(){

    return (
        <>
        <div id="category">
        <div id="selection"><span style={{color:"black"}}>Categories</span><img id="drop-img" src="https://static.thenounproject.com/png/1123247-200.png" alt="drop-down"/></div>
        <div> <Link to="/bestpriceguarantee">Best price guarantee</Link></div>
        <div><Link to="/coupons">Coupons</Link></div>
        <div><Link to="/allegroprotect">Allegro Protect</Link></div>
        <div><Link to="/sellonallegro">Sell on Allegro</Link></div>
       </div>
        </>
    )
}

export default Catagory;