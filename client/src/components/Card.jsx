import PropTypes from "prop-types";

// import { CiHeart } from "react-icons/ci";

const Card = (props) => {
  return (
    <>
      <div className=" h-[40vh] md:h-[50vh] w-[10vh] md:w-[20%] flex flex-col items-center border border-[#c38662]">
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
        <div className="flex justify-center items-center min-w-full">
          <button className="bg-[#c38662] text-white w-[50%] h-10 rounded-lg">
            {props.button || "Add to Bag"}
          </button>
          {/* <button>
            <CiHeart className="mr-2 text-3xl text-[#c38662]" />
          </button> */}
        </div>
      </div>
    </>
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
};

export default Card;
