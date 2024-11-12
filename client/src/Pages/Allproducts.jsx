import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";

function Allproducts() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async () => {
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
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = productData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );

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
      <main className="min-w-screen font-ligh flex-col ">
        <section className="flex justify-center items-center my-3">
          <input
            type="text"
            placeholder="Explor Our Beauty Collections"
            className="w-64 rounded-lg p-2 text-center border border-[#c38662]"
            onChange={handleSearch}
            value={searchQuery}
          />
          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center ml-2 border border-[#c38662]"
            onClick={setSearchQuery}
          >
            <IoSearch className="text-[#c38662]" />
          </button>
        </section>
        <div className="flex flex-wrap items-center justify-center ">
          {filteredProducts.map((item) => (
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
