import { Divide, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-7 pt-20 pb-8  text-white">
      <div className="container mx-auto">
        <div className="flex justify-between pb-12 border-b-1 border-neutral-4">
          <div className="flex space-x-8">
            <Image
              src="/logo-white.svg"
              width={105}
              height={24}
              alt="elegant logo"
            />
            <span className="border-s-1 border-neutral-4" />
            <p>Gift & Decoration Store</p>
          </div>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="py-4 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <p className="text-sm">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
          <div className="flex gap-6">
            <Instagram/>
            <Facebook/>
            <Twitter/>
          </div>
        </div>
      </div>
    </footer>
  );
}
