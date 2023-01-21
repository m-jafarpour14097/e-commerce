import {useSelector} from "react-redux";
import { logo } from "../utils/images";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart)
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border border-bottom sticky-top">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="bg-dark w-50 ms-5" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="ps-2">Menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-bold ms-4" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link ms-4" >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contactus" className="nav-link ms-4" >
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link
                to="/cart"
                className="position-relative btn btn-outline-dark btn-lg me-5"
                type="submit"
              >Card
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {cart.length}
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
