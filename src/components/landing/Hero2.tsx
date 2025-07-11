"use client";

import React, { useState } from "react";

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    where: "",
    when: "",
    type: "Adventure",
  });

  const destinations = [
    {
      image: "/landing/hero/hero_bg1.jpg",
      title: "The Villa Life: Bali",
    },
    {
      image: "/landing/hero/hero_bg2.jpg",
      title: "The Lotus Escape",
    },
    {
      image: "/landing/hero/hero_bg3.jpg",
      title: "Desert Divas Experience",
    },
  ];

  const handleSearch = () => {
    console.log("Search data:", searchData);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        
        .destination-title {
          font-family: 'Playfair Display', serif;
        }

        /* Parallelogram container */
        .parallelogram-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* First destination - left edge straight, right edge slanted (increased slope) */
        .destination-0 {
          clip-path: polygon(0 0, 90% 0, 70% 100%, 0 90%);
        }

        /* Middle destination - both edges slanted (increased slope) */
        .destination-1 {
          clip-path: polygon(18% 0, 92% 0, 70% 110%, 0 90%);
          margin-left: -10%;
        }

        /* Last destination - left edge slanted, right edge straight (increased slope) */
        .destination-2 {
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
          margin-left: -10%;
        }

        /* Mobile view - remove slants */
        @media (max-width: 1024px) {
          .destination-0,
          .destination-1,
          .destination-2 {
            clip-path: none;
            margin-left: 0;
          }
        }

        /* Calendar input styling */
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(0.5);
        }
        
        /* Custom select styling */
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b5d52' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.7rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>

      <section className="relative">
        {/* Top colored banner */}
        <div className="w-full h-10 bg-[#faf5ee]"></div>
        
        {/* Titles Section */}
        <div className="relative bg-[#faf5ee]">
          <div className="flex flex-col lg:flex-row">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="flex-1 text-center px-0 py-4"
              >
                <h3 className="destination-title text-xl lg:text-2xl font-semibold text-[#6b5d52]">
                  {destination.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Destinations Showcase */}
        <div className="relative bg-[#faf5ee] overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[600px] lg:h-[450px]">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`relative flex-1 h-full parallelogram-container destination-${index} cursor-pointer`}
              >
                {/* Inner container for hover effects */}
                <div className="relative w-full h-full overflow-hidden group">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${destination.image})`,
                      // Adjust background position to compensate for clipping
                      backgroundPosition: index === 0 ? 'left center' : index === 2 ? 'right center' : 'center'
                    }}
                  />
                  
                  {/* Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="relative bg-[#faf5ee] pb-8 justify-center items-center   z-10">
          <div className=" px-6">
            <div className="bg-white shadow-xl rounded-lg p-6 -mt-16 relative left-1/2 transform -translate-x-1/2  z-20 md:w-[80%] lg:w-[70%] xl:w-[60%]">
              <div className="flex flex-col md:flex-row items-end gap-4">
                {/* Where */}
                <div className="flex-1 w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where to
                  </label>
                  <input
                    type="text"
                    placeholder="Enter keywords"
                    value={searchData.where}
                    onChange={(e) =>
                      setSearchData({ ...searchData, where: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c49c7a] focus:ring-1 focus:ring-[#c49c7a] transition-colors"
                    style={{ fontSize: "16px" }}
                  />
                </div>

                {/* When - Calendar */}
                <div className="flex-1 w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When
                  </label>
                  <input
                    type="date"
                    value={searchData.when}
                    min={today}
                    onChange={(e) =>
                      setSearchData({ ...searchData, when: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c49c7a] focus:ring-1 focus:ring-[#c49c7a] transition-colors appearance-none bg-white cursor-pointer"
                    style={{ fontSize: "16px" }}
                  />
                </div>

                {/* Type */}
                <div className="flex-1 w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={searchData.type}
                    onChange={(e) =>
                      setSearchData({ ...searchData, type: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c49c7a] focus:ring-1 focus:ring-[#c49c7a] transition-colors appearance-none bg-white cursor-pointer"
                    style={{ fontSize: "16px" }}
                  >
                    {[
                      "Adventure",
                      "Relaxation",
                      "Cultural",
                      "Family",
                      "Business",
                      "Honeymoon",
                    ].map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Button */}
                <div className="w-full md:w-auto">
                  <button
                    onClick={handleSearch}
                    className="w-full md:w-auto px-8 py-3 bg-[#c49c7a] text-white font-semibold rounded-lg hover:bg-[#a0927e] transition-all duration-300 uppercase tracking-wider transform hover:scale-105"
                    style={{ marginTop: "28px" }}
                  >
                    Find Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}