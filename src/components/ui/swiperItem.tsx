"use client"
import React from "react";
import { Card } from "./card";
import { Badge } from "./badge";
import Image from "next/image"
import { Button } from "./button";
import clsx from "clsx";
import StarRating from "./starRating";
import { Heart } from "lucide-react";

export default function SwiperItem({title , imageLink , rating , price , offPrice }:{title:string , imageLink:string , rating:number , offPrice?:number , price:number}) {
    const [isHovered , setIsHovered] = React.useState(false)
  return (
    <Card key={title} className=" shadow-none border-0 bg-transparent" onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
      <div className="relative overflow-hidden">
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="w-full">New</Badge>
          <Badge className="w-full" variant="success">
            -50 %
          </Badge>
        </div>
        <div className="absolute right-4 top-4 rounded-full shadow bg-white p-1.5 hover:shadow-xl transition-shadow">
            <Heart className="text-neutral-4"/>
        </div>
        <Image
          width={262}
          height={349}
          src={imageLink}
          alt={title}
          className="w-full h-full"
        />
        <Button className={clsx(" absolute transition-all h-12 left-4 right-4" , isHovered? "bottom-4" : " -bottom-12")}>Add to cart</Button>
      </div>
      <div>
        <StarRating allowHalf readOnly value={rating} size={16}/>
        <h3 className="font-semibold">{title}</h3>
        <div className="flex gap-3">
            {offPrice && (<p className="font-semibold">$ {offPrice}</p>)}
            <p className={clsx(offPrice?"text-neutral-4 line-through":"font-semibold")}>$ {price}</p>
        </div>
      </div>
    </Card>
  );
}
