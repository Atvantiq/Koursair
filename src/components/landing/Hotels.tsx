"use client";

import React from "react";
import Image from "next/image";

const hotels = [
  {
    id: 1,
    name: "Mariott Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.9,
    stars: 4,
  },
  {
    id: 2,
    name: "Concorde Hotel",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200",
    rating: 7.9,
    stars: 4,
  },
  {
    id: 3,
    name: "Louvre Hotel",
    image: "https://images.unsplash.com/photo-1743410976099-6114097db9ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 7.0,
    stars: 4,
  },
  {
    id: 4,
    name: "Park Yatt Hotel",
    image: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.9,
    stars: 4,
  },
];

export default function HotelSection() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-6">
          <div className="relative inline-block mb-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Popular Hotels and Accommodations
            </h2>
            <div className="absolute -top-2 left-0 h-[3px] w-16 bg-gradient-to-r from-[#c49c7a] to-gray-400 rounded" />
          </div>
          <p className="text-gray-500 text-sm md:text-base">
            Cum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
        </div>

        {/* Hotel Cards */}
        <div className="flex overflow-x-auto gap-4 no-scrollbar">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex-shrink-0 w-[335px] relative rounded-md overflow-hidden shadow-md group"
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={400}
                height={200}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Rating Badge */}
              <div className="absolute top-2 right-2 bg-teal-500 text-white text-sm font-bold px-2 py-1 rounded">
                {hotel.rating}
              </div>

              {/* Gradient Overlay + Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white font-semibold text-lg">{hotel.name}</div>
                <div className="text-white text-sm mt-1">
                  {Array(hotel.stars)
                    .fill("★")
                    .join(" ")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-4">
          <a href="#" className="text-[#a0927e] font-semibold text-sm inline-flex items-center">
            View all (157)
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
