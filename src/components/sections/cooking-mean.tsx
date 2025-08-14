"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useClickTracking } from "@/lib/track-click";
import { SectionTitle } from "@/components/ui/section-title";
import cookingPot from "@/assets/images/cooking-pot.svg";
import experiment from "@/assets/images/experiment.svg";
import perfectEggs from "@/assets/images/perfect-eggs.svg";

export function WhatDoesCookingMean() {
  const handleClick = useClickTracking();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="flex justify-center items-start gap-[30px] px-5 md:px-[147px] py-[60px] md:py-[120px]">
      <motion.div 
        className="flex flex-wrap md:flex-nowrap justify-center gap-[10px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8
        }}
      >
        <motion.div 
          className="max-w-[372px] h-[600px]"
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
        >
          <a
            href="#boiling"
            onClick={handleClick}
            className="block h-full transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={cookingPot}
              alt="Boiling pot over fire"
              className="w-full h-full object-cover"
              width={372}
              height={600}
              priority
              unoptimized
            />
          </a>
        </motion.div>

        <motion.div 
          className="max-w-[372px] flex flex-col gap-[10px]"
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
        >
          <motion.div 
            className="h-[295px]"
            whileHover={{ scale: 1.02 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <a
              href="#preparation"
              onClick={handleClick}
              className="block h-full transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={experiment}
                alt="Experiment"
                className="w-full h-full object-cover"
                width={372}
                height={295}
                priority
                unoptimized
              />
            </a>
          </motion.div>

          <motion.div 
            className="h-[295px]"
            whileHover={{ scale: 1.02 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <a
              href="#eggs"
              onClick={handleClick}
              className="block h-full transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={perfectEggs}
                alt="Perfect eggs"
                className="w-full h-full object-cover"
                width={372}
                height={295}
                priority
                unoptimized
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="max-w-[362px] mx-[20px] font-open-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2
          }}
        >
          <SectionTitle title="WHAT DOES COOKING MEAN?" />

          <p className="text-[21px] font-[100] my-[30px]">
            Is it simply applying heat to a food product? A way of making
            certain food safe to eat? Or a way to create flavour and make food
            more appealing? This is just part of what Hervé This, the father of
            molecular gastronomy, has dedicated his life to finding out. We
            spoke to him to find out what his experiments have told him. And in
            the process even discovered the secret to cooking the perfect egg...
          </p>

          <span className="block text-[#cf1430] text-[15px] font-[700] tracking-wider">
            THE PERFECT EGG
          </span>

          <span className="block text-[21px] font-bold">
            Keep water between 67 and 68°C for a flavourful, tender yolk
          </span>
        </motion.div>
      </motion.div>

    </section>
  );
}
