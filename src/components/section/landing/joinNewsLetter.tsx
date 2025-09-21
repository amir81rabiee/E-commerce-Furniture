import Image from "next/image";
import React from "react";
import footerImage from "@public/landing/footer.png";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JoinNewsLetter() {
  return (
    <div className="w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <h2 className="text-4xl font-bold">Join Our Newsletter</h2>
        <p className="mt-2">Sign up for deals, new products and promotions</p>
        <div className="mt-8 flex items-center border-b-1 pb-2">
          <Mail size={36}/>
          <Input
            placeholder="Email..."
            type="email"
            className=" border-0 shadow-none"
          />
          <Button>Submit</Button>
        </div>
      </div>
      <Image src={footerImage} alt="sofa and table" className="w-full -z-20" />
    </div>
  );
}
