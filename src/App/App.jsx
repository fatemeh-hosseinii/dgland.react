import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import ShowCategory from "../Pages/Home/Categoris/ShowCategories/ShowCategory";
import ShowProducts from "../Pages/Products/ShowProducts/ShowProducts";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Log/Login";
import LastLogin from "../Pages/Log/LastLogin";
import Favorite from "../Pages/Favorite/Favorite";

const App = () => {
    return ( <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categories/:slug" element={<ShowCategory/>} />
            <Route path="/product/:category/:id" element={<ShowProducts /> } />
            <Route path="/cart" element={<Cart /> } />
            <Route path="/enter" element={<Login /> } />      
            <Route path="/auth/enter" element={<LastLogin/>} />
            <Route path="/user/favorite" element={<Favorite/>} />
        </Routes>
    </BrowserRouter>
        
    </> );
}
 
export default App;