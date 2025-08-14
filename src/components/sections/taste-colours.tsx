"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { ColorTasteCard } from "@/components/ui/color-taste-card";
import tastes from "@/assets/images/tastes.svg";

export function TasteTheColours() {
  return (
    <section className="px-5 md:px-[147px] py-[60px] md:py-[120px]">
      <div className="max-w-fit m-auto">
        <SectionTitle title="Taste the Colours" />
      </div>

      <div className="flex flex-wrap mt-[30px] gap-[10px] justify-center">
        <ColorTasteCard
          imageSrc={tastes}
          imageAlt="Red syrup on spoon"
          color="Red"
          description="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."
        />
        <ColorTasteCard
          imageSrc={tastes}
          imageAlt="Green syrup on spoon"
          color="Green"
          description="Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours"
        />
        <ColorTasteCard
          imageSrc={tastes}
          imageAlt="White cream on spoon"
          color="White"
          description="White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat."
        />
      </div>
    </section>
  );
}
