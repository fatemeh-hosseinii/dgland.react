import Slider from "../../../Components/Slider/Slider";
import BanerFive from "../Baner/BanerFive";
import BanerFoure from "../Baner/BanerFoure";
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
    <BanerFoure/>
    <BanerFive/>
 
    </> );
}
 
export default HeroSection;