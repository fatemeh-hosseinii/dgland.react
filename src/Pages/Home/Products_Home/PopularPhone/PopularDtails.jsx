import { Link } from "react-router-dom";

const PopularDtails = ({popular}) => {
    return ( <>
    <Link  to={`/product/PopularPhone/${popular.id}`}  className="bg-[white] flex flex-col gap-5 items-center justify-center">
        <div className="w-[80%] flex flex-row justify-center items-center">
        
            <img src={popular.image} alt="" />

        </div> 
        <div className="line-clamp-2 bg-slate-700 p-1">
            <p className="text-[13px]">{popular.title}</p>
            
        </div>
        <div className="flex flex-row justify-end bg-slate-500 w-[100%]">
            <p className="text-left text-[red]">{popular.first_price}</p>
        </div>
    </Link>
    </> );
}
 
export default PopularDtails;