import { Route, Routes } from 'react-router';
import './App.css';
import Airpods from './Components/Airpods/Airpods';
import AllProducts from './Components/AllProducts';
import AppleWatchs from './Components/AppleWatchs/AppleWatchs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Iphone from './Components/Iphones/Iphone';
import Login from './Components/Login';
import MacBooks from './Components/MacBooks/MacBooks';
import NotFound from './Components/NotFound';
import SearchProduct from './Components/SearchProduct';
import SignUp from './Components/SignUp';

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
        <Route path="/iphone" element={<Iphone></Iphone>}></Route>
        <Route path="/mac" element={<MacBooks></MacBooks>}></Route>
        <Route path="/applewatch" element={<AppleWatchs></AppleWatchs>}></Route>
        <Route path="/airpods" element={<Airpods></Airpods>}></Route>
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
