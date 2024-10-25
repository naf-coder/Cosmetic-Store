import Card from "../components/Card";
import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";
import axios from "axios";

function Lipliner() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const search = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lip liner`
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
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <hr />
      <main className="min-w-screen font-light">
        <h1 className="text-center text-2xl my-5">Lip liner</h1>
        <div className="flex flex-wrap items-center justify-center space-y-2 space-x-2">
          {productData.map((item) => (
            <Card
              key={item.id}
              price={item.price}
              image={item.api_featured_image}
              name={item.name}
              category={item.category}
              rating={item.rating}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Lipliner;
