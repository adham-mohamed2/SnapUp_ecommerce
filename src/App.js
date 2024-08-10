
import { Routes , Route } from "react-router-dom";
import Header from "./componant/header/index.jsx"
import Home from "./pages/home/index.jsx"
import Sidebar from "./componant/slidebar/index.jsx"
import Footer from "./componant/footer/index.jsx"
import CategoryPage from "./pages/categoryProduct/index.jsx"
import SearchInput from "./pages/searchProduct/index.jsx"
import Details from "./pages/detailsProduct/index.jsx"
import CardPage from "./pages/card/index.jsx"
function App() {
  return (
    <div className="main-content">
      <Header/>
      <Sidebar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:category" element={<CategoryPage/>}/>
          <Route path="/search/:value" element={<SearchInput/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/card" element={<CardPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
