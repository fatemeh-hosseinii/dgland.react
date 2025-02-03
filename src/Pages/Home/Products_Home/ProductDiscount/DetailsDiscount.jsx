import { Link } from "react-router-dom";

const DetailsDiscount = ({ Discount }) => {
    return (
        <Link 
            to={`/product/DiscountProduct/${Discount.id}`} 
            className="bg-[white] rounded-2xl p-2 flex flex-col gap-3 justify-around items-center"
        >
            <img className="w-[70%]" src={Discount.image} alt={Discount.title} />
            <p className="line-clamp-2 text-[13px] mt-3">{Discount.title}</p>
            <div className=" mt-6 flex flex-row justify-between items-end w-[100%]">
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
        </Link>
    );
};

export default DetailsDiscount;
