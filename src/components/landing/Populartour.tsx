"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Clock } from "lucide-react";

export default function PopularToursSection() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle card

  const tours = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020",
      category: "HISTORIC",
      title: "Versailles",
      description: "Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.",
      duration: "1h 30min",
      price: 25,
      rating: 7.0,
      reviews: 350,
      isLiked: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
      category: "HISTORIC",
      title: "Versailles",
      description: "Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.",
      duration: "1h 30min",
      price: 25,
      rating: 7.0,
      reviews: 350,
      isLiked: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2187",
      category: "HISTORIC",
      title: "Versailles",
      description: "Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.",
      duration: "1h 30min",
      price: 25,
      rating: 7.0,
      reviews: 350,
      isLiked: true
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?q=80&w=2187",
      category: "MUSEUM",
      title: "Pompidou Museum",
      description: "Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.",
      duration: "2h 30min",
      price: 45,
      rating: 8.0,
      reviews: 850,
      isLiked: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?q=80&w=2070",
      category: "WALKING",
      title: "Tour Eiffel",
      description: "Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.",
      duration: "1h 30min",
      price: 65,
      rating: 8.0,
      reviews: 250,
      isLiked: false
    }
  ];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getRatingClass = (rating: number) => {
    if (rating >= 8) return "bg-blue-500";
    if (rating >= 7) return "bg-teal-500";
    return "bg-gray-500";
  };

  const getCardStyle = (index: number) => {
    const distance = Math.abs(currentIndex - index);
    const isCenter = distance === 0;
    const isAdjacent = distance === 1;
    
    return {
      transform: isCenter ? 'scale(1)' : isAdjacent ? 'scale(0.85)' : 'scale(0.8)',
      opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.5,
      filter: isCenter ? 'none' : isAdjacent ? 'blur(1px)' : 'blur(2px)',
      zIndex: isCenter ? 20 : 10,
    };
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .section-title {
          font-family: 'Poppins', sans-serif;
          position: relative;
          display: inline-block;
        }
        
        /* Custom decorative line above title */
        .decorative-line {
          position: relative;
          width: 80px;
          height: 2px;
          background-color: #c49c7a;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .decorative-line::before {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #c49c7a;
          border-radius: 50%;
          left: -8px;
        }
        
        .decorative-line::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #c49c7a;
          border-radius: 50%;
          right: -8px;
        }
        
        /* Hide scrollbar */
        .slider-container::-webkit-scrollbar {
          display: none;
        }
        
        .slider-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Category badge styles */
        .category-badge {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.9);
        }
        
        /* Card transitions */
        .tour-card {
          transition: all 0.5s ease;
        }
      `}</style>

      <section className="py-16 bg-gray-50 relative">
        
        
        <div className="max-w-[1600px] mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl font-bold text-gray-800 mb-4">
              Our Popular Tours
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Tours Slider */}
            <div className="overflow-hidden py-8">
              <div
                className="slider-container flex gap-6 transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(calc(50% - ${currentIndex * 376 + 175}px))`,
                  paddingLeft: '20px',
                  paddingRight: '20px'
                }}
              >
                {tours.map((tour, index) => (
                  <div
                    key={tour.id}
                    className="tour-card flex-none w-[350px] bg-white rounded-lg overflow-hidden shadow-lg"
                    style={getCardStyle(index)}
                  >
                    {/* Image Container */}
                    <div className="relative h-[250px] overflow-hidden group">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        width={350} height={250}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="category-badge px-3 py-1 text-xs font-semibold text-gray-700 rounded-full">
                          {tour.category}
                        </span>
                      </div>
                      
                      {/* Like Button */}
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <Heart
                          className={`w-5 h-5 ${
                            tour.isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {tour.description}
                      </p>

                      {/* Duration and Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{tour.duration}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">
                            From <span className="text-[#c49c7a] font-semibold text-lg">${tour.price}</span> /per person
                          </p>
                        </div>
                      </div>

                      {/* Reviews and Rating */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium">Good</span>
                          <span className="mx-1">•</span>
                          <span>{tour.reviews} Reviews</span>
                        </div>
                        <div
                          className={`px-3 py-1 text-white font-semibold rounded ${getRatingClass(
                            tour.rating
                          )}`}
                        >
                          {tour.rating.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {tours.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#c49c7a]'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to tour ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}