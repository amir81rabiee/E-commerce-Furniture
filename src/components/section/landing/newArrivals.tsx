"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowLink from "@/components/ui/arrowLink";
import { Card } from "@/components/ui/card";
import Swiper from "@/components/ui/swiper";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SwiperItem from "@/components/ui/swiperItem";

const listItems = [
  {
    price: 400,
    offPrice: 199,
    link: "#",
    title: "Loveseat Sofa",
    rating: 4.7,
    imageLink: "/landing/slider/sofa.png",
  },
  {
    price: 24.99,
    link: "#",
    title: "Table Lamp",
    rating: 4,
    imageLink: "/landing/slider/lamp1.png",
  },
  {
    price: 24.99,
    link: "#",
    title: "Beige Table Lamp",
    rating: 4.5,
    imageLink: "/landing/slider/lamp2.png",
  },
  {
    price: 24.99,
    link: "#",
    title: "Bamboo basket",
    rating: 3.5,
    imageLink: "/landing/slider/basket.png",
  },
  {
    price: 224.99,
    link: "#",
    title: "Toasted",
    rating: 5,
    imageLink: "/landing/slider/toaster.png",
  },
  {
    price: 24.99,
    link: "#",
    title: "Table Lamp",
    rating: 4,
    imageLink: "/landing/slider/lamp1.png",
  },
  {
    price: 24.99,
    link: "#",
    title: "Beige Table Lamp",
    rating: 4.5,
    imageLink: "/landing/slider/lamp2.png",
  },
  {
    price: 24.99,
    link: "#",
    title: "Bamboo basket",
    rating: 3.5,
    imageLink: "/landing/slider/basket.png",
  },
  {
    price: 224.99,
    link: "#",
    title: "Toasted",
    rating: 5,
    imageLink: "/landing/slider/toaster.png",
  },
];

export default function NewArrivals() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerLeft, setContainerLeft] = useState(0);

  useEffect(() => {
    function update() {
      const left = containerRef.current?.getBoundingClientRect().left ?? 0;
      setContainerLeft(Math.round(left));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="pt-12">
      <div
        ref={containerRef}
        className="flex justify-between items-end container mx-auto"
      >
        <h2 className="text-4xl font-semibold !font-poppins">
          New
          <br /> Arrivals
        </h2>
        <ArrowLink href="#">
          <p>More Products</p>
        </ArrowLink>
      </div>

      {/* full width section */}
      <div className="w-full py-12">
        <div
          style={{
            marginLeft: containerLeft,
            width: `calc(100vw - ${containerLeft}px)`,
          }}
        >
          <Swiper>
            {listItems.map((item) => (
              <SwiperItem title={item.title} imageLink={item.imageLink} rating={item.rating} price={item.price} offPrice={item.offPrice}/>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
