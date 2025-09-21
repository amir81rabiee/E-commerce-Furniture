"use client"
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ArrowLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
      <div
        className=" border-b-1 border-neutral-5 w-fit"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
    <Link href={href} className="flex gap-1">
        {children}{" "}
        <ArrowRight
          className={clsx(isHovered ? "ms-1" : "", "transition-all")}
        />
    </Link>
      </div>
  );
}
