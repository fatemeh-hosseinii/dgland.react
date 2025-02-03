import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsDiscount from "./DetailsDiscount";
import { percent } from "react-icons-kit/fa/percent";
import Icon from "react-icons-kit";
const ProductDiscount = () => {
  const [discountProducts, setDiscountProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3004/Products");
      const discountCategory = res.data.find(
        (category) => category.category === "DiscountProduct"
      );
      if (discountCategory) {
        setDiscountProducts(discountCategory.items);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-[#de2040] mt-3 w-full p-2">
      <div className="w-full flex flex-row justify-center gap-3">
        <h2 className="text-center text-[25px] text-[white]">تخفیف تایم</h2>
        <Icon className="mt-1 text-[white]" icon={percent} size={25} />
      </div>
      <div className="p-2 w-full xl:container">
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            1200: { slidesPerView: 5},
            1100: { slidesPerView:4},
            870: { slidesPerView: 4.5 },
            480:{slidesPerView:2.5},
            380: { slidesPerView: 2 },
          }}
          spaceBetween={20}
          className="mt-[20px] ">
          {discountProducts.map((product) => (
            <SwiperSlide key={product.id} className="p-1">
              <DetailsDiscount Discount={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDiscount;
