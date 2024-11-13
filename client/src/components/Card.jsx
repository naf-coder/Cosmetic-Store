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
    <div className="relative hover:bottom-2 h-[40vh] md:h-[60vh] w-[20vh] md:w-[20%] flex flex-col items-center justify-center border border-[#c38662] rounded-lg shadow-2xl overflow-hidden m-2">
      <img
        src={props.image}
        alt="Product image"
        className="w-full h-48 object-cover p-2"
      />
      <p className="text-center text-base font-bold text-gray-800">
        {props.name}
      </p>
      <p>{props.category}</p>
      <p>{props.productcolors}</p>
      <p>{props.rating}</p>
      <div className="flex justify-between items-center min-w-full p-2 md:p-5">
        <span className="text-lg md:text-xl font-bold text-gray-900">
          ${props.price}
        </span>
        <button
          onClick={() => handleAddToBag(props)}
          className={`bg-[#c38662] text-white px-2 md:px-4 py-1 md:py-2 rounded-lg font-light text-sm md:text-lg ${
            isAdded ? "bg-[#c38662]" : "bg-[#c38662]"
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
  category: PropTypes.string,
  productcolors: PropTypes.string,
  rating: PropTypes.number,
  image: PropTypes.string,
  button: PropTypes.string,
  onButtonClick: PropTypes.func,
  id: PropTypes.number.isRequired,
};

export default Card;
