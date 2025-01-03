import Navbar from "../components/Navbar";

//importing images
import newlaunch from "../assets/newlaunch.jpeg";
import makeup from "../assets/makeup.jpg";
import haircare from "../assets/haircare.jpg";
import skincare from "../assets/skincare.jpeg";
import banner from "../assets/banner.jpeg";
import bannerimage from "../assets/banner-image.png";
import dior from "../assets/W1.png";
import maybeline from "../assets/W3.png";
import elf from "../assets/W2.png";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import PhotoGallery from "../components/PhotoGallery";
import BrandsList from "../components/BrandsList";

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-w-screen font-light">
        <div className="flex justify-center font-sans-serif items-center min-w-screen">
          <section className=" flex justify-center items-center bg-[#c38662]">
            <div>
              <img src={bannerimage} />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-center font-poppins text-5xl md:text-9xl ">
              <h1>
                BE
                <br />
                AU
                <br />
                TY
              </h1>
            </div>
            <div>
              <img src={banner} />
            </div>
          </section>
        </div>

        <hr className="my-10" />

        {/* Top Categories */}
        <section className="flex flex-col items-center px-5 md:px-10">
          <h1 className="text-2xl md:text-3xl text-[#c38662] font-light my-5">
            Top Categories
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col items-center">
              <img
                src={newlaunch}
                className="rounded-lg w-full"
                alt="New Launch"
              />
              <h6>New Launch</h6>
            </div>
            <Link to="/products" className="flex flex-col items-center">
              <img src={makeup} className="rounded-lg w-full" alt="Makeup" />
              <h6>Makeup</h6>
            </Link>
            <div className="flex flex-col items-center">
              <img
                src={haircare}
                className="rounded-lg w-full"
                alt="Haircare"
              />
              <h6>Haircare</h6>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={skincare}
                className="rounded-lg w-full"
                alt="Skincare"
              />
              <h6>Skincare</h6>
            </div>
          </div>
        </section>

        <hr className="my-10" />

        <section className="flex-col items-center mx-5 md:mx-10">
          <h1 className="text-center text-2xl md:text-3xl font-light my-2 text-[#c38662]">
            Best Of Beauty On Offer
          </h1>
          <div className="flex flex-wrap items-center justify-center min-w-screen">
            <div className="flex flex-col justify-center items-center m-2">
              <div className="relative bg-[url('/src/assets/photo3.jpg')] bg-cover bg-center h-[40vh] w-[40vh] rounded-lg flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                <img src={elf} className="h-auto w-36" />
              </div>
              <p className="font-semibold text-2xl text-black font-poppins">
                Up to 30% off
              </p>
            </div>
            <div className="flex flex-col justify-center items-center m-2 ">
              <div className="relative bg-[url('/src/assets/photo1.jpg')] bg-cover bg-center h-[40vh] w-[40vh] rounded-lg flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                <img src={dior} className="h-auto w-24" />
              </div>
              <p className=" font-semibold text-2xl text-black font-poppins ">
                Flat 25% off
              </p>
              <p className=" font-semibold text-2xl text-black font-poppins">
                on select favourites
              </p>
            </div>
            <div className="flex flex-col justify-center items-center m-2 ">
              <div className="relative bg-[url('/src/assets/photo2.jpg')] bg-cover bg-center h-[40vh] w-[40vh] rounded-lg flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                <img src={maybeline} className="h-auto w-48" />
              </div>
              <p className=" text-2xl text-black font-semibold ">
                Up to 40% off
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10" />

        <section className="min-w-screen  flex justify-center items-center  mx-5 md:mx-10">
          <PhotoGallery />
        </section>

        <hr className="my-10" />

        <section className="min-w-screen mx-5 flex flex-col flex-wrap  justify-center items-center">
          <h1 className="text-center text-2xl  md:text-3xl  my-5 font-thin text-[#c38662]">
            Brands
          </h1>
          <BrandsList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
