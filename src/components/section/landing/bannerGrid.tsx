import React from "react";
import sofaImage from "@public/landing/sofa.png";
import kitchenImage from "@public/landing/toaster.png";
import bedroomImage from "@public/landing/drawer.png";

import Image from "next/image";
import GridCardContent from "@/components/ui/gridCardContent";

export default function BannerGrid() {
  return (
    <div className="grid grid-cols-12 grid-rows-2 container mx-auto gap-6">
      <div className="bg-[#F3F5F7] col-span-6 row-span-2 relative">
        <GridCardContent left={48} top={48} link="/" title="Living Room" />
        <Image
          src={sofaImage}
          alt="furniture"
          className="w-full"
          quality={100}
        />
      </div>
      <div className="bg-[#F3F5F7] col-span-6 row-span-1 relative">
        <GridCardContent left={48} bottom={48} link="/" title="Bedroom" />
        <Image
          src={bedroomImage}
          alt="drawer"
          className="w-full"
          quality={100}
        />
      </div>
      <div className="bg-[#F3F5F7] col-span-6 row-span-1 relative">
        <GridCardContent left={48} bottom={48} link="/" title="Kitchen" />

        <Image
          src={kitchenImage}
          alt="toaster"
          className="w-full"
          quality={100}
        />
      </div>
    </div>
  );
}
