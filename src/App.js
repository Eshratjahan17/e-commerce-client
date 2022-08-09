import { Route, Routes } from 'react-router';
import './App.css';
import AllProducts from './Components/AllProducts';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Headphones from './Components/Headphone/Headphones';
import Home from './Components/Home';
import Laptop from './Components/Laptop/Laptop';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Phones from './Components/Phones/Phones';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import SearchProduct from './Components/SearchProduct';
import SignUp from './Components/SignUp';
import SmartTv from './Components/SmartTv/SmartTv';
import SmartWatchs from './Components/SmartWatchs/SmartWatchs';

function App() {
  return (
    <div className="bg-base-200">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/allcatagory"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route
          path="/allcatagory/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/phone" element={<Phones></Phones>}></Route>
        <Route path="/laptop" element={<Laptop></Laptop>}></Route>
        <Route path="/smartWatch" element={<SmartWatchs></SmartWatchs>}></Route>
        <Route path="/headphone" element={<Headphones></Headphones>}></Route>
        <Route path="/SmartTv" element={<SmartTv></SmartTv>}></Route>
        <Route
          path="/searchProduct"
          element={<SearchProduct></SearchProduct>}
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
