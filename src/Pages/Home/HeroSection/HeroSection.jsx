import Slider from "../../../Components/Slider/Slider";
import BanerOne from "../Baner/BanerOne";
import BanerThree from "../Baner/BanerThree";
import BanerTwo from "../Baner/BanerTwo";

import Categories from "../Categoris/Categories";
import PopularPhone from "../Products_Home/PopularPhone/PopularPhone";
import ProductDiscount from "../Products_Home/ProductDiscount/ProductDiscount";

const HeroSection = () => {
    return ( <>
    <Slider/>
    <Categories/>
    <BanerOne/>
    <ProductDiscount/>
    <BanerTwo/>
    <PopularPhone/>
    <BanerThree/>
 
    </> );
}
 
export default HeroSection;