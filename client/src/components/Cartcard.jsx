import PropTypes from "prop-types";

import { useContext } from "react";
import { CartContext } from "../App";

function Cartcard(props) {
  const { cart, setCart } = useContext(CartContext);

  const handleDeleteFromCart = (item, cart) => {
    console.log("Item: ", item);
    console.log("cart", cart);
    const filteredArray = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(filteredArray);
  };

  return (
    <>
      <div className=" h-[50vh] md:h-[55vh] w-[16h] md:w-[25%] flex flex-col items-center border border-[#c38662] m-3">
        <img
          src={props.image}
          alt="Product image"
          className="w-[100%] h-[55%]"
        />

        <p>{props.name}</p>
        <p>${props.price}</p>
        <p>{props.category}</p>
        <p>{props.productcolors}</p>
        <p>{props.rating}</p>
        <div className="flex flex-col justify-center items-center min-w-full">
          <button className="bg-[#c38662] text-white w-[50%] h-10 rounded-lg m-1">
            Added
          </button>
          <button
            onClick={() => handleDeleteFromCart(props, cart)}
            className="bg-[#c38662] text-white w-[50%] h-10 rounded-lg m-1"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
Cartcard.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  productcolors: PropTypes.string,
  rating: PropTypes.number,
  image: PropTypes.string,
  button: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Cartcard;
