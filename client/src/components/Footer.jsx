import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <footer className="min-w-screen bg-[#c38662] py-2">
        <main className="md:flex justify-between items-center h-auto mx-5 md:mx-10 bg-[#c38662]">
          <section>
            <div className="">
              <img src={logo} className="h-10 w-16 " alt="Logo of mozilar" />
              <h4 className="text-lg">
                <span className="font-bold">F</span>or every day,
                <span className="font-bold"> F</span>or every mood,
                <span className="font-bold"> F</span>or every you
              </h4>
            </div>
          </section>

          <section className="md:flex  justify-between w-[60%]">
            <div>
              <ul className="my-5">
                <li className="font-semibold text-xl">Customer Care</li>
                <li>Help Centre</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <ul className="my-5">
                <li className="font-semibold text-xl">Categories</li>
                <li>Face</li>
                <li>Nail</li>
                <li>Lips</li>
              </ul>
            </div>

            <div>
              <ul className="my-5">
                <li className="font-semibold text-xl">Contact Us</li>
                <li>Call: 1-900-840-3333</li>
                <li>Whatsapp: 79090 90909</li>
                <li>Email: help@nykaabeauty.com</li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="font-semibold text-xl md:ml-2">Follow us</h3>
              <ul className="flex">
                <li>
                  <FaFacebookSquare className="mt-2 md:m-2" />
                </li>
                <li>
                  <RiInstagramFill className="m-2" />
                </li>
                <li>
                  <FaXTwitter className="m-2" />
                </li>
                <li>
                  <FaLinkedin className="m-2" />
                </li>
              </ul>
            </div>
          </section>
        </main>

        <hr />

        <section className="min-w-screen flex justify-center items-center py-5 mx-5 md:mx-10">
          <h6 className="">© 2024 Nykaa - All right reserved</h6>
        </section>
      </footer>
    </>
  );
}
export default Footer;
