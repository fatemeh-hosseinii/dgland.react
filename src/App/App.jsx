import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import ShowCategory from "../Pages/Home/Categoris/ShowCategories/ShowCategory";
import ShowProducts from "../Pages/Products/ShowProducts/ShowProducts";

const App = () => {
    return ( <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categories/:slug" element={<ShowCategory/>} />
            <Route path="/product/:category/:id" element={<ShowProducts /> } />

            
        </Routes>
    </BrowserRouter>
        
    </> );
}
 
export default App;