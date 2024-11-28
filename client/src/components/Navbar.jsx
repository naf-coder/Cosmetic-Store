import { useState, useContext } from "react";

import { FaBars } from "react-icons/fa6"; // bar icon from react icon
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

function Navbar() {
  const [openBar, setOpenBar] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <header className="min-w-screen font-light bg-[#e6bba2] sticky top-0 z-50 shadow-md">
      <nav className="sm:flex-col justify-between items-center  mx-5 md:mx-10 py-4 ">
        <section>
          <div className="flex justify-between items-center">
            {/* Mobile Menu Toggle Button */}
            <button onClick={() => setOpenBar(!openBar)} className="md:hidden">
              <FaBars className="text-3xl" />
            </button>
            <Link to={"/"}>
              <div>
                <img src={logo} className="h-10 w-16 mt-2" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-4 text-[#53280f] text-base">
              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#5e2f14]">
                <Link to={"/"}>HOME</Link>
              </li>
              {/* <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#5e2f14] ">
                <Link to={"/allproducts"}>ALL PRODUCTS</Link>
              </li> */}
              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#5e2f14]">
                <Link to={"/products"}>PRODUCTS</Link>
              </li>
              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#5e2f14]">
                <Link to={"/brands"}>BRANDS</Link>
              </li>

              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#5e2f14] ">
                <Link to={"/offers"}>OFFERS</Link>
              </li>
            </ul>

            <div className="flex justify-center items-center">
              <button className="flex items-center">
                <Link to={"/cart"}>
                  <HiOutlineShoppingBag className="mr-2 text-3xl text-[#53280f] relative" />
                </Link>
                {/* Update cart count */}
                <span className="absolute top-10 md:top-10 right-6 md:right-[2.5%] w-5 h-5 text-sm text-white font-semibold rounded-full bg-[#5e2f14]  ">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${openBar ? "block" : "hidden"} relative md:hidden`}>
            <ul className="flex flex-col items-center">
              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#6f4024] ">
                <Link to={"/"}>HOME</Link>
              </li>
              {/* <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#5e2f14] ">
                <Link to={"/allproducts"}>ALL PRODUCTS</Link>
              </li> */}
              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#6f4024]">
                <Link to={"/products"}>PRODUCTS</Link>
              </li>
              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#6f4024]">
                <Link to={"/brands"}>BRANDS</Link>
              </li>

              <li className="m-2 border-b-2 border-transparent hover:border-current hover:text-[#6f4024]">
                <Link to={"/offers"}>OFFERS</Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
