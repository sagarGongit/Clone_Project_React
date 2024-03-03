import Navbar from '../components/navbar'
import AllRoute from '../AllRoutes/AllRoute';
import Carousel from '../assets/carousel';
import Handles from '../components/handles';
import Inspiration from '../components/findinspiration';
import Devices from '../components/devices';
import Catagory from '../components/catagory';
import BestPriceGuarantee from '../components/bestpriceguarantee';
import BrandOffer from '../components/brandoffer';
import Footer from '../components/footer';
import TermAndCondN from '../components/termsandcondn';
import Services from '../components/services';

function HomePage(){
    return (
      <>
    <Navbar/>
    <Catagory/>
    <AllRoute/>
    <Carousel/>
    <Inspiration/>
    <Handles/>
    <Devices/>
    <BestPriceGuarantee/>
    <BrandOffer/>
    <Footer/>
    <TermAndCondN/>
    <Services/>
      </>
    )
}

export default HomePage;