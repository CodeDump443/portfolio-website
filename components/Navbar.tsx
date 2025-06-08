import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5">
      <h1 className="text-white text-[38px]">
        <span className="font-thin">Frame of </span>
        <span className="font">Thought</span>
        <span className="text-blue-500">.</span>
      </h1>
      <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="hover:opacity-70 transition-opacity duration-200"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

