import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom"; // If using react-router-dom
import { CartContext } from "../App";
import { useContext } from "react";
import Cartcard from "../components/CartCard";

function Cart() {
  const navigate = useNavigate(); // Initialize for routing back

  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };
  const { cart } = useContext(CartContext);

  return (
    <>
      <main className="min-h-screen absolute left-0 right-0 top-0 bg-white">
        {/* Back button and "Bag" header */}
        <section className="flex items-center p-4">
          <button onClick={handleBack}>
            <IoMdArrowRoundBack size={24} />
          </button>
          <p className="text-2xl ml-2 font-light">Bag</p>
        </section>

        <section className="flex flex-wrap justify-center items-center">
          {/* Empty cart message */}
          {cart[0] ? (
            <>
              {cart.map((item) => (
                <Cartcard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </>
          ) : (
            <section className="flex items-center justify-center min-h-screen">
              <div className="flex flex-col justify-center items-center text-center space-y-2">
                <p className="font-bold text-xl">Your Shopping Bag is</p>
                <p className="font-bold text-xl">Empty</p>
                <p className="text-gray-600">
                  This feels too light! Go on, add all
                </p>
                <p className="text-gray-600">your favourites</p>
                <Link to={"/"}>
                  <button className="bg-[#c38662] rounded-lg text-white px-6 py-3 mt-4 hover:bg-[#a44d1b] transition-colors">
                    Start Shopping
                  </button>
                </Link>
              </div>
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export default Cart;
