"use client";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type props =
  | { left: number; top: number; link: string; title: string }
  | { bottom: number; left: number; link: string; title: string };

export default function GridCardContent(props: props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={props.link}>
      <div
        className={clsx("absolute space-y-3")}
        style={{
          ...(typeof (props as any).left === "number" && {
            left: (props as any).left,
          }),
          ...(typeof (props as any).top === "number" && {
            top: (props as any).top,
          }),
          ...(typeof (props as any).right === "number" && {
            right: (props as any).right,
          }),
          ...(typeof (props as any).bottom === "number" && {
            bottom: (props as any).bottom,
          }),
          position: "absolute",
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <h2 className="text-4xl !font-poppins font-semibold">{props.title}</h2>
        <p className=" border-b-1 border-neutral-7 flex w-fit gap-1">
          Shop Now{" "}
          <ArrowRight
            className={clsx(isHovered ? "ms-1" : "", "transition-all")}
          />
        </p>
      </div>
    </Link>
  );
}
