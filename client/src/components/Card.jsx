import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "../App";

const Card = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBag = (props) => {
    if (!cart.find((item) => item.id === props.id)) {
      setCart([...cart, props]);
      setIsAdded(true);
    }
  };

  return (
    <div className="relative group h-[40vh] md:h-[50vh] w-44 sm:w-[60] md:w-[40%] lg:w-[20%] xl:w-[15%] flex flex-col items-center justify-between border border-[#c38662] rounded-lg shadow-lg overflow-hidden m-2 transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <img
        src={props.image}
        alt="Product image"
        className="w-full h-36 sm:h-36 md:h-40 object-cover p-2"
      />

      {/* Content Section */}
      <div className="text-center px-2 sm:px-4 py-2">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex flex-wrap items center justify-center h-auto w-full p-4">
          {props.name}
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-gray-600 flex flex-wrap justify-center items-center w-full ">
          {props.brand}
        </p>

        <p className="text-xs sm:text-sm md:text-base text-gray-500 flex flex-wrap items center justify-center w-full ">
          {props.productcolors}
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 ">
          {props.rating && `⭐ ${props.rating.toFixed(1)}`}
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center w-full px-3 sm:px-4 py-2">
        <span className="text-lg sm:text-xl font-bold text-gray-900">
          ${props.price}
        </span>
        <button
          onClick={() => handleAddToBag(props)}
          className={`bg-[#c38662] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg font-light text-sm md:text-base transition duration-200 ${
            isAdded ? "bg-[#040201] cursor-not-allowed" : ""
          }`}
          disabled={isAdded}
        >
          {isAdded ? "Added" : props.button || "Add to Bag"}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,

  productcolors: PropTypes.number,
  rating: PropTypes.number,
  image: PropTypes.string,
  button: PropTypes.string,
  onButtonClick: PropTypes.func,
  id: PropTypes.number.isRequired,
};

export default Card;
