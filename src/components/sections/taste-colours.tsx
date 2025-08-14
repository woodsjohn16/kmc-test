"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { ColorTasteCard } from "@/components/ui/color-taste-card";
import { motion, Variants } from "framer-motion";
import tastes from "@/assets/images/tastes.svg";

export function TasteTheColours() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.2
      }
    }
  };

  return (
    <section className="px-5 md:px-[147px] py-[60px] md:py-[120px]">
      <motion.div 
        className="max-w-fit m-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <SectionTitle title="Taste the Colours" />
      </motion.div>

      <motion.div 
        className="flex flex-wrap mt-[30px] gap-[10px] justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <ColorTasteCard
            imageSrc={tastes}
            imageAlt="Red syrup on spoon"
            color="Red"
            description="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."
          />
        </motion.div>

        <motion.div variants={item}>
          <ColorTasteCard
            imageSrc={tastes}
            imageAlt="Green syrup on spoon"
            color="Green"
            description="Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours"
          />
        </motion.div>

        <motion.div variants={item}>
          <ColorTasteCard
            imageSrc={tastes}
            imageAlt="White cream on spoon"
            color="White"
            description="White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
