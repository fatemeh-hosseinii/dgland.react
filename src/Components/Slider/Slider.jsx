import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SliderItem from "./SliderItem";




const Slider = () => {
  let slider = [
    {
      id: 1,
      image: "https://storage.dgland.dev/api/File/DESKTOPSLIDE/DESKTOPSLIDE-d334d5df-cf37-4dc0-97e5-5931c9be8647.webp",
    },
    {
      id: 2,
      image: "https://storage.dgland.dev/api/File/DESKTOPSLIDE/DESKTOPSLIDE-d5529902-688c-4318-964e-5221078fb19e.webp",
    },
    {
      id: 3,
      image: "https://storage.dgland.dev/api/File/DESKTOPSLIDE/DESKTOPSLIDE-ee170107-1fa6-48e4-b848-cc8ac180570e.webp",
    },
  ];

  let slider_res = [
    {
      id: 1, 
      image: "https://storage.dgland.dev/api/File/MOBILESLIDE/MOBILESLIDE-7f8b4fa6-b774-4a78-bfe0-f3af8b2838f1.webp",
    },
    {
      id: 2,
      image: "https://storage.dgland.dev/api/File/MOBILESLIDE/MOBILESLIDE-7f8b4fa6-b774-4a78-bfe0-f3af8b2838f1.webp",
    },
    {
      id: 3,
      image: "https://storage.dgland.dev/api/File/MOBILESLIDE/MOBILESLIDE-4d68041a-d788-447e-a1af-b1459988ec01.webp",
    },
  ];







  return (
    <>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          className="mt-[5px] lg:flex hidden"
        >
          {slider.map((elem) => (
            <SwiperSlide key={elem.id} className="p-1">
              <SliderItem slider={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
{/*  */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          className="mt-[5px] flex lg:hidden"
        >
          {slider_res.map((elem) => (
            <SwiperSlide key={elem.id} className="p-1">
            <div>
              <img className="w-[100%] " src={elem.image} alt="" />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
    
    </>
  );
};

export default Slider;
