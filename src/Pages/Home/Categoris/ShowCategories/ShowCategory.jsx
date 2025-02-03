import { Link, useParams } from "react-router-dom";
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
        <div className="flex flex-row mt-5 bg-rose-800 w-[100%]">
            <div className="filter w-[25%] h-[53vh] border-[1px] border-[#DDDDDD] gap-3 p-3 rounded-lg flex flex-col ">
                <h2 className="text-[14px]"> فیلترها</h2>
                <div className="flex flex-row gap-2">
                    <input type="checkbox"  name="" id="" />
                    <h2 className="text-[13px]">فقط کالاهای موجود</h2>                   
                </div>
                
            </div>
            <div className="bg-[pink] w-[70%] flex flex-col">
                <div className="bg-[red] lg:flex lg:flex-row hidden w-[100%] justify-between">
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
                    
                  <div className="products flex flex-wrap bg-black p-4 gap-2  justify-around">
                      {category.products.map((product) => (
                          <Link
                          key={product.id}
                          className="product mb-4 p-2 rounded bg-white w-[24%] flex flex-col gap-4 text-center shadow"
                          >
                          <div className="flex flex-row justify-center">
                            <img className="w-[75%]" src={product.image} alt="" />  
                            
                          </div>  
                          <p className="line-clamp-2 text-[13px] mt-3">{product.name}</p>
                          <div className=" mt-6 flex flex-row justify-between items-end w-[100%] ">
                            <div className="bg-[red] rounded-2xl px-2 py-1">
                              <small className="text-[white]">{product.discount}</small>
                                          
                            </div>
                            <div className="flex flex-col text-end">
                              <div >
                                  <small className="line-through text-[#B5B5B5]">{product.first_price}</small>
                              </div>
                
                
                              <small className="text-[17px]  text-[red] font-bold">{product.second_price}</small>
                            </div>
          
                          </div>  


                          
                          
                        </Link>
                      ))}
                  </div>
 
                </div>
            </div>
        </div>
    
      
    </div>
  );
};

export default ShowCategory;
