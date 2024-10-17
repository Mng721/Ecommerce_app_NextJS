import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import imgQR from "../../_assets/footer/qr.png"
import imgAppStore from "../../assets/footer/app-store.png"
import imgCHPlay from "../../assets/footer/google-play.png"
import Image from "next/image";
const FooterContent = () => {
  return (
    <div className="bg-black px-28 py-28">
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="mt-4 flex flex-col h-auto gap-1 md:max-w-56 md:w-auto w-56 m-auto">
          <h2 className="text-white pb-2 text-xl">Exclusive</h2>
          <h4 className="text-white">Subcribe</h4>
          <p className="text-white">Get 10% of your first order</p>
          <input
            type="email"
            className="form-control bg-black text-white mt-3 p-2 text-l border-white placeholder-zinc-500"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>
        <hr className="separator border-gray-400 mt-3 mx-2" />

        <div className="mt-4 flex flex-col h-auto gap-1 md:max-w-56 md:w-auto w-56 m-auto">
          <h4 className="text-white pb-2 text-xl">Support</h4>
          <p className="text-white">
            111 Bijoy sarani, Dhaka, HD 1515, Bangladesh.
          </p>
          <p className="text-white">exclusive@gmail.com</p>
          <p className="text-white">+888888-8888888-8888888</p>
        </div>
        <hr className="separator border-gray-400 mt-3 mx-2" />
        <div className="mt-4 flex flex-col h-auto gap-1 md:max-w-56 md:w-auto w-56 m-auto">
          <h4 className="text-white pb-2 text-xl">Account</h4>
          <p className="text-white">Login / Register</p>
          <p className="text-white">Card</p>
          <p className="text-white">Wishlist</p>
          <p className="text-white">Shop</p>
        </div>
        <hr className="separator border-gray-400 mt-3 mx-2" />

        <div className="mt-4 flex flex-col h-auto gap-1 md:max-w-56 md:w-auto w-56 m-auto">
          <h4 className="text-white pb-2 text-xl">Quick link</h4>
          <p className="text-white">
            Privacy policy
          </p>
          <p className="text-white">Term Of Use</p>
          <p className="text-white">FAQ</p>
          <p className="text-white">Contact</p>
        </div>
        <hr className="separator border-gray-400 mt-3 mx-2" />
        <div className="mt-4 flex flex-col h-auto gap-1 md:max-w-56 md:w-auto w-56 m-auto">
          <h4 className="text-white pb-2 text-xl">Download App</h4>
          <p className="text-white text-sm">Save 3$ with App New User Only</p>
          <div className="img-info-container flex flex-row gap-1">
            <div className="qr-code-img">
              <Image src={imgQR} alt="qr-code" width={90} height={100} />
            </div>
            <div className="appstore-chplay-code-img flex flex-col justify-between">
              <div className="appstore-img-container">
                <Image src={imgAppStore} alt="appstore-img" width={120} height={40}/>
              </div>
              <div className="chplay-img-container">
                <Image src={imgCHPlay} alt="chplay-img" width={120} height={40} />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-3">
            <div className="information-icon facebook-icon">
              <FaFacebookF color="white" size={"1.5rem"} />
            </div>
            <div className="information-icon twitter-icon ">
              <LuTwitter color="white" size={"1.5rem"} />
            </div>
            <div className="information-icon instagram-icon">
              <FaInstagram color="white" size={"1.5rem"} />
            </div>
            <div className="information-icon linkedin-icon">
              <ImLinkedin2 color="white" size={"1.5rem"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
