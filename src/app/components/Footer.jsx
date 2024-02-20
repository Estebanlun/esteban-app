import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 flex-col sm:flex sm:flex-row justify-between ">
        <span className="flex justify-center items-center">
          <Image
            src="/images/logo-image.png"
            alt="Logo-Image"
            width={150}
            height={150}
          />
        </span>
        <p className="text-slate-600 flex justify-center items-center">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
