import React from "react";
import Image from "next/image";
import sofaImage from "@public/landing/grid.png";
import ArrowLink from "@/components/ui/arrowLink";
export default function Banner() {
  return (
    <div className="w-full grid grid-cols-2 bg-neutral-2">
      <Image
        src={sofaImage}
        alt="a sofa placed in room"
        className="w-full col-span-1"
      />
      <div className="col-span-1 flex justify-center items-center pr-40">
        <div className="space-y-4">
          <h5 className="text-secondary font-bold">SALE UP TO 35% OFF</h5>
          <h3 className="text-4xl font-poppins font-semibold">HUNDREDS of<br/> New lower prices!</h3>
          <h4>It’s more affordable than ever to give every room in your home a stylish makeover</h4>
          <ArrowLink href="#">
            Shop Now
          </ArrowLink>
        </div>
      </div>
    </div>
  );
}
