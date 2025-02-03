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
      {BanerOne?.map((elem) =>
        elem?.BanerPart_one?.length ? (
          <div
            key={elem.id}
            className="lg:flex lg:justify-around hidden mt-2"
          >
            {elem?.BanerPart_one.map((item) => (
              <img
                key={item.id}
                src={item.image}
                className="w-[45%] mt-2 rounded-md"
                alt={`Banner ${item.id}`}
              />
            ))}
          </div>
        ) : null
      )}




      {BanerOne?.map((elem) =>
        elem?.BanerPart_one_res?.length ? (
          <div
            key={elem.id}
            className="flex flex-col justify-around lg:hidden mt-2 p-2"
          >
            {elem?.BanerPart_one.map((item) => (
              <img
                key={item.id}
                src={item.image}
                className="w-[100%] mt-2 rounded-md"
                alt={`Banner ${item.id}`}
              />
            ))}
          </div>
        ) : null
      )}
    </>
  );
};

export default BanerOne;
