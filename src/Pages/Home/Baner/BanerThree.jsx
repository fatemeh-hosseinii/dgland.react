import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
const BanerThree = () => {
    const[BanerThree,SetBanerThree]=useState(null)
    const featchpost =async()=>{
        try{
            const res = await axios.get("http://localhost:3004/Baner");
            SetBanerThree(res.data);
        }catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{
        featchpost()
    },[])
    return ( <>
     <div className=" flex flex-col  w-[100%] mt-3">
            <div className=" flex flex-col justify-center items-center w-[100%] gap-2  mt-2">
                <h2 className="text-[21px]">گوشی موبایل</h2>
                <div className="w-[4%] h-[3px] bg-[red] "></div>
            </div>
            <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            className="mt-[20px]  container">
            {BanerThree?.map((item) => (
                item?.BanerPart_three?.map((elem)=>{
                    return (
                        <SwiperSlide key={elem.id} className="p-1 rounded-md bg-[white]">
                    
                            <img src={elem.image} alt="" />
                        </SwiperSlide>
                    )
                })
             
            ))}
            </Swiper>

        </div>
        
    </>  );
}
 
export default BanerThree;