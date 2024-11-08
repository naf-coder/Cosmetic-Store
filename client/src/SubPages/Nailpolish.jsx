import Card from "../components/Card";
import Navbar from "../components/Navbar";

import axios from "axios";
import { useState, useEffect } from "react";

function Nailpolish() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const search = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Nail polish`
      );
      console.log(data);
      setProductData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    search();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="min-w-screen min-h-screen flex justify-center items-center">
          <iframe src="https://lottie.host/embed/a79ea6d6-a84f-4b6c-b585-adc35a81e9d9/apTFqZSRt5.json" />
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <hr />
      <main className="min-w-screen font-light">
        <h1 className="text-center text-2xl my-5 ">Nail Polish</h1>
        <div className="flex flex-wrap items-center justify-center space-y-2 space-x-2">
          {productData.map((item) => (
            <Card
              key={item.id}
              price={item.price}
              image={item.api_featured_image}
              name={item.name}
              category={item.category}
              rating={item.rating}
              id={item.id}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Nailpolish;
