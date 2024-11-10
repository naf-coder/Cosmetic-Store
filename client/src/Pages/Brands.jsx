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
        <section className=" mx-5 md:mx-10 my-5">
          <h1 className="text-center text-2xl my-5 font-poppins text-[#c38662]">
            Brands
          </h1>
          <hr className="my-5" />
          <section className="flex justify-center items-center flex-wrap">
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5 border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg  overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={elf} className="h-16" />
            </div>
            <div className="m-5  w-[30vh] h-[20vh] py-5 px-5 border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={butter} className="h-16" />
            </div>
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5 border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={dalish} className="h-16" />
            </div>
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5 border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={coastelclassic} className="h-16" />
            </div>
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5 border border-[#c38662]  shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={chinaglaze} className="h-16" />
            </div>
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5  border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={booshlogo} className="h-16" />
            </div>
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5 border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={maybeline} className="h-16" />
            </div>
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5  border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={CMgradient} className="h-16" />
            </div>
            <div className="m-5 w-[30vh] h-[20vh] py-5 px-5  border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
              <img src={dior} className="h-16" />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Brands;
