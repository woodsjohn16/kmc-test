"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <motion.div 
      className="max-w-[372px]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", bounce: 0.4 }}
    >
      <motion.button 
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          withClickTracking()(e);
          setIsModalOpen(true);
        }} 
        className="block w-full focus:outline-none focus:ring-2 focus:ring-white/20"
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-[372px] h-[300px] object-cover"
            width={372}
            height={300}
            priority
          />
        </motion.div>
      </motion.button>
      <motion.p 
        className="font-open-sans text-center text-[21px] mt-[30px] font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {color}
      </motion.p>
      <motion.p 
        className="font-open-sans font-[100] text-[21px] text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-black/40 p-4 rounded-lg backdrop-blur-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-h-[80vh] object-contain"
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
    </motion.div>
  );
}
