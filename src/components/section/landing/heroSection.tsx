import React from "react";
import Image from "next/image";
import heroImage from "@public/heroImage.png";
export default function HeroSection() {
  return (
    <div className="container mx-auto space-y-8 pb-10">
      <Image src={heroImage} alt="A sofa in room" className="w-full" />
      <div className="flex justify-between items-center">
        <h1 className="text-7xl font-semibold !font-poppins">Simply Unique<span className="text-neutral-4">/</span><br/> Simply Better<span className="text-neutral-4">.</span></h1>
        <p className="text-neutral-4"><span className="text-neutral-5 font-semibold">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
      </div>
    </div>
  );
}
