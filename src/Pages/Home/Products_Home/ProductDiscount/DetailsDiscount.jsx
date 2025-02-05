import { Link } from "react-router-dom";
import Icon from "react-icons-kit";
import {heartO} from 'react-icons-kit/fa/heartO'
import {shareAlt} from 'react-icons-kit/fa/shareAlt'
const DetailsDiscount = ({ Discount }) => {
    return (
        <Link 
            to={`/product/DiscountProduct/${Discount.id}`} 
            className="bg-[white] rounded-2xl p-2 flex flex-col gap-3 justify-around items-center relative group"
        >
            <img className="w-[70%]" src={Discount.image} alt={Discount.title} />
            <p className="line-clamp-2 text-[13px] mt-3">{Discount.title}</p>
            <div className="mt-6 flex flex-row justify-between items-end w-full">
                <div className="bg-[red] rounded-2xl px-2 py-1">
                    <small className="text-[white]">{Discount.discount}</small>
                </div>
                <div className="flex flex-col text-end">
                    <div>
                        <small className="line-through">{Discount.first_price}</small>
                    </div>
                    <small className="text-[16px] text-[red]">{Discount.second_price}</small>
                </div>
            </div>
            <div className="absolute top-[10px] left-[10px] flex-col gap-3 hidden group-hover:flex  group-hover:translate-y-0 transition-all duration-300 ease-in-out ">
                <Link to={"/user/favorite"}>
                    <Icon className="text-[#bcbbbb]" icon={heartO} size={20} />
                </Link>
                <Icon className="text-[#bcbbbb]" icon={shareAlt} size={20} />
            </div>
        </Link>
    
    );
};

export default DetailsDiscount;
