import Navbar from "../components/Navbar";

//images from assets

import maybeline from "../assets/Maybelline_logo.png";
import elf from "../assets/Elf_new_logo.png";
import butter from "../assets/butter.jpg";
import dalish from "../assets/da_lish_NEW_logo.jpg";
import coastelclassic from "../assets/coastelclassic.jpg";
import CMgradient from "../assets/CM_Gradient.jpg";
import chinaglaze from "../assets/chinaglaze.png";
import booshlogo from "../assets/BooshLogo.jpg";
import dior from "../assets/dior.jpg";
import Footer from "../components/Footer";

function Brands() {
  return (
    <>
      <Navbar />
      <main className="min-w-screen">
        <section className=" mx-5 md:mx-10">
          <h1 className="text-center text-3xl font-light my-10">Brands</h1>
          <span className="md:flex justify-center items-center flex-wrap ">
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5 border border-black flex items-center rounded-lg">
              <img src={elf} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5 border border-black flex items-center rounded-lg">
              <img src={butter} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5 border border-black flex items-center rounded-lg">
              <img src={dalish} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5 border border-black flex items-center rounded-lg">
              <img src={coastelclassic} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5 border border-black flex items-center rounded-lg">
              <img src={chinaglaze} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5  border border-black flex items-center rounded-lg">
              <img src={booshlogo} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5 border border-black flex items-center rounded-lg">
              <img src={maybeline} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5  border border-black flex items-center rounded-lg">
              <img src={CMgradient} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5  border border-black flex items-center rounded-lg">
              <img src={dior} className="h-16" />
            </div>
          </span>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Brands;
