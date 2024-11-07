import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Brands from "./Pages/Brands";
import Offers from "./Pages/Offers";
import Bronzer from "./SubPages/Bronzer";
import Eyebrow from "./SubPages/Eyebrow";
import Eyeliner from "./SubPages/Eyeliner";
import Eyeshadow from "./SubPages/Eyeshadow";
import Foundation from "./SubPages/Foundation";
import Lipliner from "./SubPages/Lipliner";
import Lipstick from "./SubPages/Lipstick";
import Mascara from "./SubPages/Mascara";
import Nailpolish from "./SubPages/Nailpolish";
import Cart from "./Pages/Cart";
import Allproducts from "./SubPages/Allproducts";
import Blush from "./SubPages/Blush";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/brands"} element={<Brands />} />
          <Route path={"/offers"} element={<Offers />} />
          <Route path={"/blush"} element={<Blush />} />
          <Route path={"/bronzer"} element={<Bronzer />} />
          <Route path={"/eyebrow"} element={<Eyebrow />} />
          <Route path={"/eyeliner"} element={<Eyeliner />} />
          <Route path={"/eyeshadow"} element={<Eyeshadow />} />
          <Route path={"/foundation"} element={<Foundation />} />
          <Route path={"/lipliner"} element={<Lipliner />} />
          <Route path={"/lipstick"} element={<Lipstick />} />
          <Route path={"/mascara"} element={<Mascara />} />
          <Route path={"/nailpolish"} element={<Nailpolish />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/allproducts"} element={<Allproducts />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
