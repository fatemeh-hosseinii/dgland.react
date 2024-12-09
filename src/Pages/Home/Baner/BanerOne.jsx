import { useEffect, useState } from "react";
import axios from "axios";

const BanerOne = () => {
  const [BanerOne, SetBanerOne] = useState(null);

  const fetchPost = async () => {
    try {
      const res = await axios.get("http://localhost:3004/Baner");
      SetBanerOne(res.data);
    } catch (error) {
      console.error("Error fetching Banner data:", error.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
    {BanerOne?.map((elem) => (
        <div key={elem.id} className="flex flex-row justify-around mt-6">
            {elem?.BanerPart_one?.map((item) => (
           
                <img
                src={item.image}
                className="w-[45%] mt-2 rounded-md"
                alt={`Banner ${item.id}`}
                />
           
            ))}
        </div>
    ))}

    </>
  );
};

export default BanerOne;
