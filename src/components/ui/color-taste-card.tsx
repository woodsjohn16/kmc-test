"use client";

import { useState } from "react";
import Image from "next/image";
import { withClickTracking } from "@/lib/track-click";
import { Modal } from "./modal";

interface ColorTasteCardProps {
  imageSrc: string;
  imageAlt: string;
  color: string;
  description: string;
}

export function ColorTasteCard({
  imageSrc,
  imageAlt,
  color,
  description,
}: ColorTasteCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-[372px]">
      <button 
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          withClickTracking()(e);
          setIsModalOpen(true);
        }} 
        className="block w-full transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-[372px] h-[300px] object-cover"
          width={372}
          height={300}
          priority
        />
      </button>
      <p className="font-open-sans text-center text-[21px] mt-[30px] font-bold">
        {color}
      </p>
      <p className="font-open-sans font-[100] text-[21px] text-center">
        {description}
      </p>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[80vh] w-auto object-contain rounded m-auto"
            width={744}
            height={600}
            priority
          />
          <div className="mt-4 text-center">
            <h3 className="text-[21px] font-bold mb-2">{color}</h3>
            <p className="text-[18px] font-[100]">{description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
