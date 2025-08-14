import { WhatDoesCookingMean } from '@/components/sections/cooking-mean';
import { TasteTheColours } from '@/components/sections/taste-colours';

export default function Home() {
  return (
    <main className="min-h-screen bg-base-dark text-white">
      <WhatDoesCookingMean />
      <TasteTheColours />
    </main>
  );
}
