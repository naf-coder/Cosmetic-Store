import Navbar from "../components/Navbar";

//images from assets

import Footer from "../components/Footer";
import BrandsList from "../components/BrandsList";

function Brands() {
  return (
    <>
      <Navbar />
      <main className="min-w-screen">
        <section className=" mx-5 md:mx-10 my-5">
          <h1 className="text-center text-2xl my-5 font-poppins text-[#c38662]">
            Brands
          </h1>
          <hr className="my-5" />
          <BrandsList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Brands;
