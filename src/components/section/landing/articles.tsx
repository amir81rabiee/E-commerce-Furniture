import ArticleCard from "@/components/ui/articleCard";
import React from "react";

const items = [
  {
    title: "7 ways to decor your home",
    imageUrl: "/landing/articles/article1.png",
    postUrl: "#",
  },
  {
    title: "Kitchen organization",
    imageUrl: "/landing/articles/article2.png",
    postUrl: "#",
  },
  {
    title: "Decor your bedroom",
    imageUrl: "/landing/articles/article3.png",
    postUrl: "#",
  },
];

export default function Articles() {
  return (
    <div className="py-20 gap-5 flex container mx-auto">
      {items.map((item) => (
        <ArticleCard
          key={item.imageUrl}
          imageUrl={item.imageUrl}
          title={item.title}
          postUrl={item.postUrl}
        />
      ))}
    </div>
  );
}
