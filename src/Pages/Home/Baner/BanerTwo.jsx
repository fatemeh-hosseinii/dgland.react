import axios from "axios";
import { useEffect, useState } from "react";

const BanerTwo = () => {
    const [BanerTwo,SetBanerTwo]=useState(null)
    const featchpost=async()=>{
        try{
            const res = await axios.get("http://localhost:3004/Baner");
            SetBanerTwo(res.data);
        }catch(error){
            console.log(error);
            
        }

    }
    useEffect(()=>{
        featchpost()
    },[])
    return (<>
        <div className="bg-slate-600  flex flex-col  w-[100%] mt-3">
            <div className=" flex flex-col justify-center items-center w-[100%] gap-2  mt-2">
                <h2 className="text-[21px]">گوشی موبایل</h2>
                <div className="w-[4%] h-[3px] bg-[red] "></div>
            </div>
            {BanerTwo?.map((elem) => (
                <div key={elem.id} className="bg-[red] flex flex-row container gap-4 justify-around mt-4">
                    {elem?.BanerPart_two?.map((item) => (
                       
                        
                        <img
                        src={item.image}
                        className="w-[30%] mt-2 rounded-md"
                        alt={`Banner ${item.id}`}
                        />
                
                    ))}
                </div>
             ))}

        </div>
    </>  );
}
 
export default BanerTwo;