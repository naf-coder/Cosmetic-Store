import PropTypes from "prop-types";

import { useContext } from "react";
import { CartContext } from "../App";

function Cartcard(props) {
  const { cart, setCart } = useContext(CartContext);

  const handleDeleteFromCart = (item, cart) => {
    const filteredArray = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(filteredArray);
  };

  return (
    <>
      <div className=" h-[43npm vh] md:h-[60vh] w-[20vh] md:w-[20%]  flex flex-col items-center justify-center border border-[#c38662]  rounded-lg shadow-2xl  overflow-hidden m-2 ">
        <img
          src={props.image}
          alt="Product image"
          className="w-full h-48 object-cover"
        />

        <p className="text-center text-base font-bold text-gray-800">
          {props.name}
        </p>
        <p>${props.price}</p>
        <p>{props.category}</p>
        <p>{props.productcolors}</p>
        <p>{props.rating}</p>
        <div className="flex flex-col justify-center items-center min-w-full">
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
