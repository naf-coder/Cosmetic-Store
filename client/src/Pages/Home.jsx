import Navbar from "../components/Navbar";

//importing images
import newlaunch from "../assets/newlaunch.jpeg";
import makeup from "../assets/makeup.jpg";
import haircare from "../assets/haircare.jpg";
import skincare from "../assets/skincare.jpeg";
import banner from "../assets/banner.jpeg";
import bannerimage from "../assets/banner-image.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
            <div className="w-[30%] flex flex-col justify-center items-center font-light text-5xl md:text-9xl ">
              <h1>BE</h1>
              <h1>AU</h1>
              <h1>TY</h1>
            </div>
            <div>
              <img src={banner} />
            </div>
          </section>
        </div>

        <hr className="my-10" />

        <section className="min-w-screen flex flex-col items-center justify-center mx-5 md:mx-10">
          <h1 className="text-2xl  md:text-3xl font-light my-5 text-[#c38662]">
            Top Categories
          </h1>
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={newlaunch}
                className="rounded-lg h-[80%] w-[80%]"
                alt="image"
              />
              <h6>New Launch</h6>
            </div>
            <Link to={"/allproducts"}>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={makeup}
                  className="rounded-lg  h-[80%] w-[80%]"
                  alt="image"
                />
                <h6>Makeup</h6>
              </div>
            </Link>
            <div className="flex flex-col justify-center items-center">
              <img
                src={haircare}
                className="rounded-lg h-[80%] w-[80%]"
                alt="image"
              />
              <h6>Haircare</h6>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={skincare}
                className="rounded-lg h-[80%] w-[80%]"
                alt="image"
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
          <div className="flex items-center justify-center">
            <div className=" flex flex-col justify-center items-center  m-2">
              <img src={image1} className="rounded-lg" />
              <p>Up to 30% off</p>
            </div>
            <div className=" flex flex-col justify-center items-center  m-2">
              <img src={image2} className="rounded-lg" />
              <p>Flat 25% off on select favourites</p>
            </div>
            <div className=" flex flex-col justify-center items-center  m-2">
              <img src={image3} className="rounded-lg" />
              <p>Up to 40% off</p>
            </div>
            <div className=" flex flex-col justify-center items-center  m-2">
              <img src={image4} className="rounded-lg" />
              <p>Up to 30% off</p>
            </div>
          </div>
        </section>
        <hr className="my-10" />
      </main>
      <Footer />
    </>
  );
}

export default Home;
