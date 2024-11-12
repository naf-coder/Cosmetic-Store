import maybeline from "../assets/Maybelline_logo.png";
import elf from "../assets/Elf_new_logo.png";
import butter from "../assets/butter.jpg";
import dalish from "../assets/da_lish_NEW_logo.jpg";
import coastelclassic from "../assets/coastelclassic.jpg";
import CMgradient from "../assets/CM_Gradient.jpg";
import chinaglaze from "../assets/chinaglaze.png";
import booshlogo from "../assets/BooshLogo.jpg";
import dior from "../assets/dior.jpg";

function BrandsList() {
  return (
    <section className="min-w-screen flex justify-center items-center flex-wrap mb-10">
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh] border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg  overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={elf} className="h-auto p-2" />
      </div>
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh] border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={butter} className="h-auto p-2" />
      </div>
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh] border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={dalish} className="h-auto p-2" />
      </div>
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh] p-5 border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={coastelclassic} className="h-auto p-2" />
      </div>
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh]  border border-[#c38662]  shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={chinaglaze} className="h-auto p-2" />
      </div>
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh]   border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={booshlogo} className="h-auro p-2" />
      </div>
      <div className=" m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh]  border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={maybeline} className="h-auto p-2" />
      </div>
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh]  border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={CMgradient} className="h-auto p-2" />
      </div>
      <div className="m-2 md:m-5 w-24 md:w-[30vh] h-20 md:h-[20vh]  border border-[#c38662] shadow-xl flex items-center justify-center rounded-lg overflow-hidden transform transition-shadow duration-300 hover:shadow-lg hover:shadow-[#c38662] hover:animate-puls">
        <img src={dior} className="h-auto p-2" />
      </div>
    </section>
  );
}

export default BrandsList;
