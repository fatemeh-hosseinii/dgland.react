const SliderItem = ({slider}) => {
    return ( <>
         <div>
            <img className="w-[100%] h-[60vh] rounded-3xl lg:rounded-none" src={slider.image} alt="" />
        </div>
    
    </> );
}
 
export default SliderItem;