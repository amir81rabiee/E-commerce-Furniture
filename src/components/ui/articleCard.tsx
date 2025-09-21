import React from "react";
import Image from "next/image";
import ArrowLink from "./arrowLink";
export default function ArticleCard({
  imageUrl,
  title,
  postUrl,
}: {
  imageUrl: string;
  title: string;
  postUrl: string;
}) {
  return (
    <div className="w-full space-y-6">
      <Image
        width={400}
        height={400}
        src={imageUrl}
        alt={title}
        className="w-full"
      />
      <div>
        {" "}
        <h4 className="text-2xl !font-poppins font-semibold">{title}</h4>
        <ArrowLink href={postUrl}>
          <p>Read More</p>
        </ArrowLink>
      </div>
    </div>
  );
}
