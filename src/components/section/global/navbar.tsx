"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { CircleUser, Search, ShoppingBag } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Product",
    link: "/product",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="container mx-auto py-4 flex justify-between">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Elegant Logo" width={105} height={24} />
      </Link>
      <nav className="flex ">
        <ul className="flex gap-10">
          {navLinks.map((item) => {
            return (
              <Link key={item.link} href={item.link}>
                <li
                  className={clsx(
                    item.link == pathname ? "text-neutral-7" : "text-neutral-4 hover:text-neutral-5 transition-colors",
                    "font-semibold"
                  )}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <ul className="flex gap-4">
        <li>
          <Search />
        </li>
        <li>
          <CircleUser />
        </li>
        <li>
          <ShoppingBag />
        </li>
      </ul>
    </div>
  );
}
