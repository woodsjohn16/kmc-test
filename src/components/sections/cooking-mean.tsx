"use client";

import Image from "next/image";
import { withClickTracking } from "@/lib/track-click";
import { SectionTitle } from "@/components/ui/section-title";
import cookingPot from "@/assets/images/cooking-pot.svg";
import experiment from "@/assets/images/experiment.svg";
import perfectEggs from "@/assets/images/perfect-eggs.svg";

export function WhatDoesCookingMean() {
  return (
    <section className="flex justify-center items-start gap-[30px] px-5 md:px-[147px] py-[60px] md:py-[120px]">
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-[10px]">
        {/* Left side - Large cooking pot image */}
        <div className="max-w-[372px] h-[600px]">
          <a
            href="#boiling"
            onClick={withClickTracking()}
            className="block h-full transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={cookingPot}
              alt="Boiling pot over fire"
              className="w-full h-full object-cover"
              width={372}
              height={600}
              priority
            />
          </a>
        </div>

        <div className="max-w-[372px] flex flex-col gap-[10px]">
          <div className="h-[295px]">
            <a
              href="#preparation"
              onClick={withClickTracking()}
              className="block h-full transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={experiment}
                alt="Experiment"
                className="w-full h-full object-cover"
                width={372}
                height={295}
                priority
              />
            </a>
          </div>

          <div className="h-[295px]">
            <a
              href="#eggs"
              onClick={withClickTracking()}
              className="block h-full transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={perfectEggs}
                alt="Perfect eggs"
                className="w-full h-full object-cover"
                width={372}
                height={295}
                priority
              />
            </a>
          </div>
        </div>

        <div className="max-w-[362px] mx-[20px] font-open-sans">
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
        </div>
      </div>
    </section>
  );
}
