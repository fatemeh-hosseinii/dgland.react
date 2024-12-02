import { useEffect, useState } from "react";
import CategoriDtails from "./CategoriDtails";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Categories = () => {
    const[Categories,SetCategories]=useState(null)

    const featchpost=async()=>{
        try {
            const res =await axios.get("http://localhost:3004/Categories");
            SetCategories(res.data); // Assuming res.data is an array
          } catch (error) {
            console.error("Error fetching Navbar data:", error.message);
          }
    }
    useEffect(()=>{
        featchpost()
    },[])
    return ( <>
    <div className="flex flex-col justify-around bg-[red] items-center">
        <h2 className="text-[22px]">دسته‌بندی‌های پر‌بازدید</h2>
       <div className="flex flex-row w-[95%] justify-around">
       <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={20}
          className="mt-[20px]"
        >
          {Categories?.map((elem) => (

            <SwiperSlide key={elem.id} className="p-1">
              <CategoriDtails category={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
       

    </div>
    </> );
}
 
export default Categories;