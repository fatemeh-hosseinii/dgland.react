import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import PopularDtails from "./PopularDtails";
import axios from "axios";

const PopularPhone = () => {
    const [PopularPhone, setPopularPhone] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3004/Products");
      const PopularPhoneCategory = res.data.find(
        (category) => category.category === "PopularPhone"
      );
      if (PopularPhoneCategory) {
        setPopularPhone(PopularPhoneCategory.items);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

    return ( <>
    <div className="bg-[#F6F5F5] mt-4 p-5">

        <div className=" flex flex-row justify-center items-center w-[100%] gap-2  mt-2">
            <div className="w-[4%] h-[2px] bg-[red] "></div>

            <h2 className="text-[21px]">محبوب ترین موبایل ها</h2>
            <div className="w-[4%] h-[2px] bg-[red] "></div>
        </div>
        <div className=" mt-2">
            
            <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={20}
            className="mt-[20px]  container">
            {PopularPhone.map((product) => (
                <SwiperSlide key={product.id} className="p-1 rounded-md bg-[white]">
                    
                    <PopularDtails popular={product} />
                </SwiperSlide>
            ))}
            </Swiper>
            
        </div>        
    </div>
    </> );
}
 
export default PopularPhone;