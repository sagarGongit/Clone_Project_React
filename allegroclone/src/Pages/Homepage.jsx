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
import { useState,useEffect } from 'react';

function HomePage(){
  const [showCategory, setShowCategory] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowCategory(false);
      } else {
        setShowCategory(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
      <>
    <Navbar/>
    <AllRoute/>
    {showCategory && <Catagory/>}
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