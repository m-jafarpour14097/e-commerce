import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseCart,
  decreaseCart,
  clearCart,
  getTotal
} from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect (() => {
    dispatch(getTotal());
  }, [cart], dispatch);

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecrement = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncrement = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="">
      <h1 className="text-light text-center mt-4">Shopping Cart</h1>
      {cart.cart.length === 0 ? (
        <div
          className="d-flex flex-column justify-content-around bg-warning text-center m-auto"
          style={{ width: "400px", height: "400px" }}
        >
          <h2 className="fw-bolder">Shopping Cart Is Empty</h2>
          <div className="start-shopping">
            <Link to={"/products"}>
              <i className="fa-sharp fa-solid fa-arrow-left me-3"></i>
              Go Back For Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mt-5 text-light border-bottom">
          <div className="row m-2 ">
            <h3 className="col-4">Product</h3>
            <h3 className="col">Price</h3>
            <h3 className="col">Quantity</h3>
            <h3 className="col">Total</h3>
          </div>
          {cart.cart?.map((cartItem) => (
            <div className="container border-top" key={cartItem.id}>
              <div className="row  align-items-center">
                <img
                  src={cartItem.img}
                  alt={cartItem.title.substring(0, 12)}
                  style={{
                    width: "100px",
                    "max-width": "100%",
                    "margin-right": "1rem",
                  }}
                />
                <div className="col mt-2">
                  <h3>{cartItem.title.substring(0, 12)}...</h3>
                  <p>{cartItem.category}</p>
                  <button
                    className="btn btn-warning mb-2"
                    onClick={() => handleRemove(cartItem)}
                  >
                    Remove
                  </button>
                </div>
                <div className="col fw-bolder ">$ {cartItem.price}</div>
                <div className="col d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDecrement(cartItem)}
                  >
                    -
                  </button>
                  <div className="border text-dark text-center fw-bold bg-light w-25 m-1">
                    {cartItem.quantity}
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => handleIncrement(cartItem)}
                  >
                    +
                  </button>
                </div>
                <div className="col fw-bolder">
                  ${cartItem.price * cartItem.quantity}
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center border-top pt-2">
            <button className="btn btn-warning" onClick={() => handleClear()}>
              Clear Cart
            </button>
            <div>
              <div className="fs-3">
                <span className="me-5">Subtotal:</span>
                <span className="fw-bold text-light ">${cart.cartTotalAmount}</span>
              </div>
              <p className="text-light">
                Taxes And Shipping Are Calculate In Checkout
              </p>
              <button className="btn btn-info btn-lg">Check Out</button>
              <div>
                <Link to={"/products"}>
                <i className="fa-sharp fa-solid fa-arrow-left me-3"></i>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
