import {Routes,Route} from 'react-router-dom';
import BestPriceGuarantee from '../components/bestpriceguarantee'
import Coupons from '../Pages/CouponsPage';
import AllegroProtect from '../Pages/AllegroProtectPage'
import SellonAllegro from '../Pages/SellOnAllegro';
import SearchMany from '../Pages/SearchMany';

function AllRoute(){

    return (
      <Routes>
        <Route path='/bestpriceguarantee' element={<BestPriceGuarantee/>}/>
        <Route path='/coupons' element={<Coupons/>}/>
        <Route path='/allegroprotect' element={<AllegroProtect/>}/>
        <Route path='/sellonallegro' element={<SellonAllegro/>}/>
        <Route path='/searchmany' element={<SearchMany/>}/>
      </Routes>
    )
}

export default AllRoute;