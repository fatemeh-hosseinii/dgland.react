import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsDiscount from "./DetailsDiscount";
const ProductDiscount = () => {
    const[ProductDiscount,SetDiscount]=useState(null)
    const featchPost=async()=>{
        const res=await axios.get("http://localhost:3004/Products")
        SetDiscount(res.data)
    }
    useEffect(()=>{
        featchPost()
    },[])
    return ( <>
    <div className="bg-[#de2040] mt-3 w-[100%]">
        <div className="w-[100%] bg-red-600 ">
            <h2 className="text-center  text-[25px]">تخفیف تایم</h2>
        </div>
        <div className="bg-slate-800 p-2 w-[100%] container ">
            <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={20}
            className="mt-[20px] bg-[blue] "
            >
            {ProductDiscount?.map((elem) => (
                elem?.DiscountProduct?.map((elem)=>{
                    return <>
                    <SwiperSlide key={elem.id} className="p-1 bg-slate-600 ">
                        <DetailsDiscount Discount={elem}/>
                    </SwiperSlide>
                    </>
                })
            ))}
            </Swiper>
        </div>
       

    </div>
    </> );
}
 
export default ProductDiscount;