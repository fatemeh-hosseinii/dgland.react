import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import ShowCategory from "../Pages/Home/Categoris/ShowCategories/ShowCategory";

const App = () => {
    return ( <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categories/:slug" element={<ShowCategory/>} />
            
        </Routes>
    </BrowserRouter>
        
    </> );
}
 
export default App;