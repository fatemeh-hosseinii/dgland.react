const DetailsDiscount = ({Discount}) => {
    return ( <>
    <div className="bg-[white] rounded-2xl p-2  flex flex-col gap-3 justify-around items-center">
        <img className="w-[70%]" src={Discount.image} />
        <p className="line-clamp-2 text-[13px] mt-3">{Discount.title}</p>
        <div className="bg-slate-900 mt-6 flex flex-row justify-between items-end w-[100%] ">
           





            <div className="bg-[red] rounded-2xl px-2 py-1">
                    <small className="text-[white]">{Discount.discount}</small>
                                        
            </div>
            <div className="flex flex-col text-end">
                <div >
                    <small className="line-through">{Discount.first_price}</small>
                </div>
                
                
                <small className="text-[16px]  text-[red]">{Discount.second_price}</small>
            </div>
          

        </div>        
    </div>
    </> );
}
 
export default DetailsDiscount;