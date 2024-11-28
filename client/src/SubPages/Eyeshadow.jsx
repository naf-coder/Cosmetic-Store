import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//react icons
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { useState, useEffect } from "react";

function Eyeshadow() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const search = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`
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

  // Calculate total pages
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  // Get current page data
  const currentItems = productData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <hr />
      <main className="min-w-screen font-light">
        {isLoading ? (
          <div className="min-w-screen min-h-screen flex justify-center items-center">
            <iframe src="https://lottie.host/embed/a79ea6d6-a84f-4b6c-b585-adc35a81e9d9/apTFqZSRt5.json" />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-center">
              {currentItems.map((item) => (
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

            {/* Pagination */}

            <div className="flex flex-wrap justify-center items-center my-5 ">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <IoIosArrowBack className="text-lg text-[#c38662]" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-[#c38662] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <MdNavigateNext className="text-lg text-[#c38662]" />
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Eyeshadow;
