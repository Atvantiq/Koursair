"use client";

import React from "react";
import Image from "next/image";

export default function NewsEventsSection() {
  const newsItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800",
      date: "28",
      month: "Dec",
      author: "MARK TWAIN",
      publishDate: "20.11.2017",
      title: "Pri oportere scribentur eu",
      description:
        "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800",
      date: "28",
      month: "Dec",
      author: "JHON DOE",
      publishDate: "20.11.2017",
      title: "Duo eius postea suscipit ad",
      description:
        "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
      date: "28",
      month: "Dec",
      author: "LUCA ROBINSON",
      publishDate: "20.11.2017",
      title: "Elitr mandamus cu has",
      description:
        "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      date: "28",
      month: "Dec",
      author: "PAULA RODRIGEZ",
      publishDate: "20.11.2017",
      title: "Id est adhuc ignota delenit",
      description:
        "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">News and Events</h2>

          {/* Decorative Lines */}
          <span className="block w-[120px] h-[2px] bg-[#e1e1e1] mx-auto">
            <em className="block w-[60px] h-[2px] bg-[#beac92] mx-auto"></em>
          </span>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            Cum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 items-start group cursor-pointer"
            >
              {/* Image with Date Badge */}
              <div className="relative w-[260px] min-w-[260px] h-[200px] overflow-hidden rounded">
                <Image
                  width={220}
                  height={180}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-[#beac92] text-center px-2 py-1 shadow-md">
                  <div className="text-lg font-bold leading-none text-gray-900">
                    {item.date}
                  </div>
                  <div className="text-xs font-semibold text-gray-800">
                    {item.month}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">
                  <span className="uppercase font-medium tracking-wide">
                    {item.author}
                  </span>
                  <span className="mx-2">-</span>
                  <span>{item.publishDate}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#c49c7a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-right">
          <button className="px-8 py-3 bg-[#c49c7a] text-white font-semibold rounded-full hover:bg-[#a0927e] transition-colors duration-300">
            View all news
          </button>
        </div>
      </div>
    </section>
  );
}
