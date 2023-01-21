import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Products = () => {
    const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.products);

  const handleToCart = (product) =>{
    dispatch(addToCart(product))
  }
  return (
    <div className="bg-transparent">
      <div className="row justify-content-center m-4">
        <h1 className="title text-center text-light m-5">Check Out Our Products</h1>
        {cartItems.map((product) => {
          return (
            <div className="card m-3 text-center services border-dark" style={{width: "18rem"}} key={product.id}>
              <img src={product.img} class="card-img-top- m-auto mt-2" alt={product.title} style={{width:"150px", height:"180px"}} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text lead fw-bolder">${product.price}</p>
                <p className="card-text">
                  {product.des.substring(0,20)}...
                </p>
                <button
                onClick={()=> handleToCart(product)}
                className="btn btn-primary">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
