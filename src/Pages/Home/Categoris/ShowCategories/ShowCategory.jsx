import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {barChart} from 'react-icons-kit/fa/barChart'
import Icon from "react-icons-kit";
const ShowCategory = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:3004/Categories");
        const foundCategory = res.data.find((cat) => cat.slug === slug);
        setCategory(foundCategory);
      } catch (error) {
        console.error("Error fetching category data:", error.message);
      }
    };

    fetchCategory();
  }, [slug]);

  if (!category) {
    return <h2>در حال بارگذاری...</h2>;
  }

  return (
    <div className="category-details flex flex-col bg-zinc-900 p-3">
      <h2 className="text-lg font-bold">{category.name}</h2>
        <div className="flex flex-row gap-6 mt-5 bg-rose-800 w-[100%]">
            <div className="filter w-[25%] border-[1px] border-[#DDDDDD] gap-3 p-3 rounded-lg flex flex-col ">
                <h2 className="text-[14px]"> فیلترها</h2>
                <div className="flex flex-row gap-2">
                    <input type="checkbox"  name="" id="" />
                    <h2 className="text-[13px]">فقط کالاهای موجود</h2>                   
                </div>
                
            </div>
            <div className="bg-[yellow] w-[100%] flex flex-col">
                <div className="bg-[red] flex flex-row justify-between">
                    <div className="flex flex-row gap-3">
                        <Icon className="text-[#888888]" icon={barChart} size={22}/>
                        <p className="text-[14px] text-[#2F2F2F]">مرتب سازی بر اساس :</p>
                        <ul className="mt-1 flex flex-row gap-4">
                            <li className="text-[13px] text-[#6B6B6B]">بیشترین قیمت</li>
                            <li className="text-[13px] text-[#6B6B6B]">کمترین قیمت</li>
                            <li className="text-[13px] text-[#6B6B6B]">جدیدترین ها</li>
                            <li className="text-[13px] text-[#6B6B6B]"> پرفروش ترین</li>

                        </ul>
                    </div>
                    <p className="text-[14px]">940 کالا</p>
                </div>
                <div className="bg-[pink] mt-3">
                    <div className="products">
                        {category.products.map((product) => (
                        <li key={product.id} className="product mb-4 p-4 border rounded">
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.price}</p>
                        </li>
                        ))}
                    <div>
                        
                    </div>    
                    </>
                </div>
            </div>
        </div>
    
      
    </div>
  );
};

export default ShowCategory;
