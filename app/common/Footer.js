import React from "react";
import { ImInstagram, ImWhatsapp, ImFacebook, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <footer className=" bg-slate-700 ">
      <div className="max-w-xl m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-3 py-3">
          <div>
            <h1>Contacts</h1>
            <p className="text-white">Email: support@mobirise.com</p>
            <p className="text-white">Phone: +1 (0) 000 0000 001</p>
          </div>
          <div>
            <h1>Address</h1>
            <p className="text-white">1234 Street Name</p>
            <p className="text-white">City, AA 99999</p>
          </div>
          <div>
            <h1>Follow</h1>
            <p className="text-white text-xl flex justify-around py-2">
              <ImWhatsapp />
              <ImInstagram />
              <ImFacebook />
              <ImTwitter />
            </p>
          </div>
        </div>
        <h1 className="py-5 text-center  px-2">
          © Copyright - Vaibhav - Design & Developed by Akshay
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
