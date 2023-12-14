import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory category='Men' banner={men_banner} />}></Route>
          <Route path='/Women' element={<ShopCategory category='Women' banner={women_banner} />}></Route>
          <Route path='/kids' element={<ShopCategory category='Kid' banner={kids_banner} />}></Route>
          <Route path='/products' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
