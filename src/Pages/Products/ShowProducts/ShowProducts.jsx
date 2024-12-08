import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ic_beenhere_outline} from 'react-icons-kit/md/ic_beenhere_outline'
import {info} from 'react-icons-kit/icomoon/info'
import {ic_emoji_transportation} from 'react-icons-kit/md/ic_emoji_transportation'
import Icon from "react-icons-kit";
const ShowProducts = () => {
  const { category, id } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/Products`);
        const categoryData = response.data.find((product) => product.category === category);
        console.log(categoryData);
        
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
        <div className="bg-yellow-600 w-[100%] mt-5 flex flex-row gap-2 ">
          <div className="bg-[yellow] w-[30%]">
              <div className="">
                <img src={product?.image} alt="" />
                
              </div>
          </div>
          <div className="bg-purple-700 w-[43%] flex flex-col">
              <div className="flex flex-row justify-between bg-[blue]">
                  <p className="text-[18px]">برند: {}</p>
              </div>
          </div>
          <div className="bg-slate-500 w-[25%] flex flex-col gap-3">
            <div className=" bg-[#F6F5F5] rounded-sm flex flex-row p-3 gap-2">
              <Icon className="text-[red]" icon={ic_emoji_transportation} size={22} />
              <p className="text-[12px] text-[#758F90] mt-1">ارسال این کالا از 1 روز کاری آینده</p>
              
            </div>

            <div className="bg-[#EFFCF5] rounded-md flex flex-row p-3 gap-2">
              <Icon className="text-[#52b827]" icon={ic_beenhere_outline} size={20} />
              <p className="text-[12px] text-[#758F90] mt-2">ضمانت اصالت و سلامت فیزیکی کالا</p>
            </div>

            <div className="bg-[#F6F5F5] rounded-md flex flex-row p-3 gap-2">
              <Icon className="text-[#888888]" icon={info} size={20} />
              <p className="text-[12px] text-[#758F90] mt-2">امکان برگشت کالا به دلیل انصراف از خرید در دسته بندی هدفون و هندزفری تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.</p>
            </div> 


          </div>            
        </div>
      <h1>جزئیات محصول</h1>
      <h2>{product?.title}</h2>
      {/* <img src={product?.image} alt="" /> */}
    </div>
  );
};

export default ShowProducts;
