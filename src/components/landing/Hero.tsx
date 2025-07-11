"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textAnimation, setTextAnimation] = useState(true);
  const [searchData, setSearchData] = useState({
    where: "",
    when: "",
    type: "Adventure",
  });

  const slides = [
    {
      image: "/landing/hero/hero_bg1.jpg",
      title: "The Villa Life: Bali",
      subtitle: "Where Would You Like To Go?",
    },
    {
      image: "/landing/hero/hero_bg2.jpg",
      title: "The Lotus Escape",
      subtitle: "Your Journey Starts Here",
    },
    {
      image: "/landing/hero/hero_bg3.jpg",
      title: "Desert Divas Experience",
      subtitle: "Adventure Awaits You",
    },
  ];

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTextAnimation(false);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setIsTransitioning(false);
        setTextAnimation(true);
      }, 300);
    }
  };

  const handleNext = React.useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTextAnimation(false);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsTransitioning(false);
        setTextAnimation(true);
      }, 300);
    }
  }, [isTransitioning, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, handleNext]);

  const handleSearch = () => {
    console.log("Search data:", searchData);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

        .hero-title {
          font-family: "Kaushan Script", cursive;
          position: relative;
          display: inline-block;
        }

        .hero-title::after {
          content: "";
          position: absolute;
          bottom: 5px;
          right: -60px;
          width: 200px;
          height: 2px;
          background-color: white;
        }

        .slide-transition {
          transition: opacity 600ms ease-in-out;
        }

        /* Text animations */
        @keyframes slideInFromTop {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-top {
          animation: slideInFromTop 0.8s ease-out forwards;
        }

        .animate-slide-bottom {
          animation: slideInFromBottom 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        /* Custom select styling */
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b5d52' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.7rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }

        /* Calendar input styling */
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(0.5);
        }
        
        input[type="date"] {
          position: relative;
        }
      `}</style>

      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full slide-transition ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 z-10" />

              {/* Slide Content */}
              <div className="relative z-20 h-full max-w-[1200px] mx-auto px-4 pb-32">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white">
                    <h2
                      className={`hero-title text-5xl md:text-6xl lg:text-7xl mb-4 ${
                        textAnimation && index === currentSlide ? "animate-slide-top" : ""
                      }`}
                      style={{ color: "#c49c7a" }}
                    >
                      {slide.title}
                    </h2>
                    <p 
                      className={`text-2xl md:text-3xl lg:text-4xl font-light ${
                        textAnimation && index === currentSlide ? "animate-slide-bottom" : ""
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none z-30">
          <button
            onClick={handlePrev}
            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 border-2 border-white backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-300 hover:opacity-50 transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 border-2 border-white backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-300 hover:opacity-50 transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>


        {/* Search Form */}
        <div className="absolute bottom-0 justify-center items-center left-1/2 transform -translate-x-1/2 md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white bg-opacity-90 shadow-lg z-30 rounded-t-lg">
          <div className="px-6 md:px-8">
            <div className="flex flex-col md:flex-row items-end py-4 gap-4 md:gap-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c49c7a] focus:ring-1 text-gray-700 focus:ring-[#c49c7a] transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c49c7a] focus:ring-1 focus:ring-[#c49c7a] transition-colors appearance-none text-gray-600 bg-white cursor-pointer"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c49c7a] focus:ring-1 focus:ring-[#c49c7a] transition-colors appearance-none text-gray-600 bg-white cursor-pointer"
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
                  className="w-full md:w-auto px-8 py-3 bg-[#c49c7a] text-white font-semibold rounded-lg hover:bg-[#a0927e] transition-colors duration-300 uppercase tracking-wider transform hover:scale-105"
                  style={{ marginTop: "28px" }}
                >
                  Find Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}