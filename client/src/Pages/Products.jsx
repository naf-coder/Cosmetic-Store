import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Navbar />
      <hr />
      <main className="min-w-screen min-h-screen ">
        <h1 className="text-center text-2xl font-light my-2  mx-5 md:mx-10">
          Products
        </h1>
        <hr className="my-5" />
        <section className="flex flex-wrap items-center justify-center mx-5 md:mx-10 ">
          <Link to={"/blush"}>
            <div className="h-[40vh] w-[40vh] border border-black px-10 py-10  bg-[url('/src/assets/blush.jpeg')] bg-cover bg-transparent bg-center m-3">
              <p>Blush</p>
            </div>
          </Link>
          <Link to={"/bronzer"}>
            <div className="h-[40vh] w-[40vh] border border-black  px-10 py-10  bg-[url('/src/assets/bronzer.jpeg')] bg-cover bg-center m-3 ">
              <p>Bronzer</p>
            </div>
          </Link>
          <Link to={"/eyebrow"}>
            <div className="h-[40vh] w-[40vh] border border-black px-10 py-10 bg-[url('/src/assets/eyebrow.jpeg')] bg-cover bg-center  m-3">
              Eyebrow
            </div>
          </Link>
          <Link to={"/eyeliner"}>
            <div className="h-[40vh]  w-[40vh] border border-black px-10 py-10 bg-[url('/src/assets/eyeliner.jpeg')] bg-cover m-3 bg-center">
              Eyeliner
            </div>
          </Link>
          <Link to={"/eyeshadow"}>
            <div className="h-[40vh] w-[40vh] border border-black px-10 py-10 m-3 bg-[url('/src/assets/eyeshadow.jpeg')] bg-cover bg-center">
              Eyeshadow
            </div>
          </Link>
          <Link to={"/foundation"}>
            <div className="h-[40vh] w-[40vh]  border border-black px-10 py-10 m-3 bg-[url('/src/assets/foundation.jpeg')] bg-cover bg-center ">
              Foundation
            </div>
          </Link>
          <Link to={"/lipliner"}>
            <div className="h-[40vh] w-[40vh] border border-black px-10 py-10 m-3 bg-[url('/src/assets/lipliner.jpeg')] bg-cover bg-center">
              Lip liner
            </div>
          </Link>
          <Link to={"/lipstick"}>
            <div className="h-[40vh] w-[40vh] border border-black px-10 py-10 m-3 bg-[url('/src/assets/lipstick.jpeg')] bg-cover bg-center">
              Lipstick
            </div>
          </Link>
          <Link to={"/mascara"}>
            <div className="h-[40vh] w-[40vh] border border-black px-10 py-10 m-3 bg-[url('/src/assets/mascara.jpeg')] bg-cover bg-center">
              Mascara
            </div>
          </Link>
          <Link to={"/nailpolish"}>
            <div className="h-[40vh] w-[40vh] border border-black px-10 py-10 m-3 bg-[url('/src/assets/nailpolish.jpeg')] bg-cover bg-center">
              Nailpolish
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Products;
