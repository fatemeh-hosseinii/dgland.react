import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SliderItem from "./SliderItem";




const Slider = () => {
 let slider=[
    {
        id:"1",
        image:"https://storage.dgland.dev/api/File/DESKTOPSLIDE/DESKTOPSLIDE-d334d5df-cf37-4dc0-97e5-5931c9be8647.webp"
    },
    {
        id:2,
        image:"https://storage.dgland.dev/api/File/DESKTOPSLIDE/DESKTOPSLIDE-d5529902-688c-4318-964e-5221078fb19e.webp"

    },
    {
        id:3,
        image:"https://storage.dgland.dev/api/File/DESKTOPSLIDE/DESKTOPSLIDE-ee170107-1fa6-48e4-b848-cc8ac180570e.webp"
    }
   ]
  return (
    <>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          className="mt-[5px]"
        >
          {slider.map((elem) => (
            <SwiperSlide key={elem.id} className="p-1">
              <SliderItem slider={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
    
    </>
  );
};

export default Slider;
