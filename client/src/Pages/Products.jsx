import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Navbar />
      <main className="min-w-screen min-h-screen ">
        <h1 className="text-center text-2xl font-poppins my-5  mx-5 md:mx-10 text-[#c38662]">
          Products
        </h1>
        <hr className="my-5" />
        <section className="flex flex-wrap items-center justify-center mx-5 md:mx-10 my-5 text-2xl">
          <Link to={"/blush"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/blush.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Blush</p>
            </div>
          </Link>
          <Link to={"/bronzer"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/bronzer.jpeg')] bg-cover bg-center m-3 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

              <p className="relative text-white font-light z-10">Bronzer</p>
            </div>
          </Link>
          <Link to={"/eyebrow"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/eybrow.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Eyebrow</p>
            </div>
          </Link>
          <Link to={"/eyeliner"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/eyeliner.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Eyeliner</p>
            </div>
          </Link>
          <Link to={"/eyeshadow"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/eyeshadow.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Eyeshadow</p>
            </div>
          </Link>
          <Link to={"/foundation"}>
            <div className="relative h-[40vh] w-[40vh]  border border-[#c38662] px-10 py-10 bg-[url('/src/assets/foundation.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Foundation</p>
            </div>
          </Link>
          <Link to={"/lipliner"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/lipliner.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Lip liner</p>
            </div>
          </Link>
          <Link to={"/lipstick"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/lipstick.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Lipstick</p>
            </div>
          </Link>
          <Link to={"/mascara"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/mascara.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Mascara</p>
            </div>
          </Link>
          <Link to={"/nailpolish"}>
            <div className="relative h-[40vh] w-[40vh] border border-[#c38662] px-10 py-10 bg-[url('/src/assets/nailpolish.jpeg')] bg-cover bg-center opacity-80 flex items-center justify-center m-3 rounded-lg">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <p className="relative text-white font-light z-10">Nailpolish</p>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Products;
