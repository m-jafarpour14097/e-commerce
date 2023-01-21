import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Cuntact"

import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./pages/Cart";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route  path={"/products"} element={<Products />} />
            <Route  path={"/contactus"} element={<Contact />} />
            <Route  path={"/cart"} element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
