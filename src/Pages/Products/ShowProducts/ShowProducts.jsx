import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowProducts = () => {
  const { category, id } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/Products`);
        const categoryData = response.data.find((product) => product.category === category);

        if (categoryData) {
          const products = categoryData.items.find((item) => item.id === parseInt(id));
          ///parsint برای تبدیل عدد استفاده کردم
          console.log(products);
          
          setProducts(products);
        } else {
          console.log("دسته‌بندی یافت نشد");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [category, id]);

  return (
    <div className="category-details flex flex-col bg-[pink] p-4 w-[100%]">
        <div className="bg-purple-700 w-[100%]">
            <p className="text-[15px]">
            <span className="text-[red]">دی‌جی‌لند</span>
            / هدفون و هندزفری/ هدفون و هندزفری اپل/ هدفون بلوتوثی اپل مدل AirPods 3 همراه با محفظه شارژ (2022)
            </p>
        </div>
        <hr className="mt-3 text-[black]" />
        <div className="bg-yellow-600 w-[100%] mt-5 flex flex-row justify-around">
            <div className="bg-[yellow]">
                slm
            </div>
            <div className="bg-purple-700">
                g
            </div>
            <div className="bg-slate-500">
                hl
                
            </div>            
        </div>
      {/* <h1>جزئیات محصول</h1>
      <h2>{product?.title}</h2>
      <img src={product?.image} alt="" /> */}
    </div>
  );
};

export default ShowProducts;
