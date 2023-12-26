import React from "react";
import img from "../images/Rectangle.png"


export default function Dem3a() {
  return (
    <div className="relative p-8 max-w-3xl mx-auto">
      <img
        src={img}
        alt="Description de l'image"
        className="w-full h-auto"
      />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Decouvrit notre derniere option pour
        le telechargement 
        des fichiers
      </p>
    </div>
  );
}
