import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";

function Allproducts() {
  // const inputRef = useRef();
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const search = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json`
      );
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
      <main className="min-w-screen font-light mx-5 md:mx-10 flex-col ">
        <section className="flex justify-center items-center my-3">
          <input
            type="text"
            placeholder="Explor Our Beauty Collections"
            className="w-64 rounded-lg p-2 text-center border border-black"
          />
          <button className="w-10 h-10 rounded-lg flex items-center justify-center ml-2 border border-black">
            <IoIosSearch />
          </button>
        </section>
        <div className="flex flex-wrap items-center justify-center space-y-2 space-x-2 ">
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

export default Allproducts;
