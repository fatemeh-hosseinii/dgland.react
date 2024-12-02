import { Link } from "react-router-dom";

const CategoriDtails = ({category}) => {
    return ( <>
      <Link to={`/categories/${category.slug}`} className="bg-[blue] w-[90%] flex flex-col">
        
        <img className="w-[90%]" src={category.image} alt="" />
        <p className="text-center mt-2">{category.name}</p>
        
      </Link>     
    </> );
}
 
export default CategoriDtails;