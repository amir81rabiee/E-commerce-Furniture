import { Truck, Phone, LockKeyhole, Banknote } from "lucide-react";
import React from "react";
const items = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Order above $200",
  },
  {
    icon: Banknote,
    title: "Money-back",
    description: "30 days guarantee",
  },
  {
    icon: LockKeyhole,
    title: "Secure Payments",
    description: "Secured by Stripe",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Phone and Email support",
  },
];

export default function Values() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-6 py-12">
      {items.map((item) => (
        <div className="bg-neutral-2 col-span-1 py-12 px-8" key={item.title}>
          <item.icon size={48}/>
          <h2 className="pt-4 !font-poppins font-semibold text-xl">{item.title}</h2>
          <p className="text-neutral-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
