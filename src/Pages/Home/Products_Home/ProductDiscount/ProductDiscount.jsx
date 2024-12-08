import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsDiscount from "./DetailsDiscount";

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
    <div className="bg-[#de2040] mt-3 w-full">
      <div className="w-full bg-red-600">
        <h2 className="text-center text-[25px]">تخفیف تایم</h2>
      </div>
      <div className="bg-slate-800 p-2 w-full container">
        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={20}
          className="mt-[20px] bg-[blue]">
          {discountProducts.map((product) => (
            <SwiperSlide key={product.id} className="p-1 bg-slate-600">
              <DetailsDiscount Discount={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDiscount;
