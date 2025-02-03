import { Link } from "react-router-dom";

const CategoriDtails = ({category}) => {
    return ( <>
      <Link to={`/categories/${category.slug}`} className=" w-[75%] flex flex-col justify-center items-center">
        
        <img className="lg:w-[90%] w-[100%]" src={category.image} alt="" />
        <p className="text-center mt-2 lg:text-[14px] text-[10px]">{category.name}</p>
        
      </Link>     
    </> );
}
 
export default CategoriDtails;