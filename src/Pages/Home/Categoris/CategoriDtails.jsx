import { Link } from "react-router-dom";

const CategoriDtails = ({category}) => {
    return ( <>
      <Link to={`/categories/${category.slug}`} className=" w-[75%] flex flex-col justify-center items-center">
        
        <img className="w-[90%]" src={category.image} alt="" />
        <p className="text-center mt-2 text-[14px]">{category.name}</p>
        
      </Link>     
    </> );
}
 
export default CategoriDtails;