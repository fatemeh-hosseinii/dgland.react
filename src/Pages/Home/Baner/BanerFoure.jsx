import axios from "axios";
import { useEffect, useState } from "react";

const BanerFoure = () => {
    const [banerData, setBanerData] = useState(null);

    const featchPost = async () => {
        try {
            const res = await axios.get("http://localhost:3004/Baner");
            setBanerData(res.data);
            // console.log(banerData);
            
        } catch (error) {
            console.error("Failed to fetch banner data:", error);
        }
    };

    useEffect(() => {
        featchPost();
    }, []);

    return (
        <div className="">
           {
                banerData?.map((elem)=>{
                    return elem?.BanerPart_four?.map((elem)=>{
                        return <div className="flex flex-row container">
                            <img src={elem.image} alt="" />
                            
                        </div>
                        
                        
                    })
                    
                })
            
           }
        </div>
    );
};

export default BanerFoure;
