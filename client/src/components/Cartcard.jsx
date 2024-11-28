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
    <div className="w-full sm:w-[80%] md:w-[40%] lg:w-[25%] xl:w-[20%] flex flex-col items-center justify-center border border-[#c38662] rounded-lg shadow-2xl overflow-hidden m-2 transition-all duration-300 hover:scale-105">
      {/* Image Section */}
      <img
        src={props.image}
        alt="Product image"
        className="w-full h-48 object-cover"
      />

      {/* Product Information */}
      <p className="text-center text-xs sm:text-sm md:text-base font-bold text-gray-800 mt-2">
        {props.name}
      </p>
      <p className="text-xs sm:text-sm md:text-base text-gray-700">
        ${props.price}
      </p>
      <p className="text-xs sm:text-sm md:text-base text-gray-600">
        {props.rating}
      </p>

      {/* Button Section */}
      <div className="flex flex-col justify-center items-center w-full mt-2">
        <button
          onClick={() => handleDeleteFromCart(props, cart)}
          className="bg-[#c38662] text-white w-full sm:w-[50%] h-10 rounded-lg m-1 transition duration-200 hover:bg-[#a57348]"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

Cartcard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  button: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Cartcard;
