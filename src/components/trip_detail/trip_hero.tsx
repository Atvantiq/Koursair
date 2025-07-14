"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, Users,  ChevronLeft, ChevronRight } from 'lucide-react';

export default function TripDetailHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Multiple images for the gallery
  const images = [
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038',
    'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070',
    'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2080'
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .hero-overlay {
          background: linear-gradient(to bottom, 
            rgba(0,0,0,0) 0%, 
            rgba(0,0,0,0) 60%, 
            rgba(0,0,0,0.4) 80%, 
            rgba(0,0,0,0.6) 100%);
        }
        
        .info-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
        }
        
        .icon-wrapper {
          transition: all 0.3s ease;
        }
        
        .icon-wrapper:hover {
          transform: translateY(-2px);
        }
        
        .image-transition {
          transition: opacity 0.5s ease;
        }
      `}</style>

      <section className="relative">
        {/* Hero Image Gallery */}
        <div className="relative h-[75vh] md:h-[82vh] overflow-hidden">
          {/* Image */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 image-transition ${
                index === currentImageIndex ? 'opacity-70 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                width={2038}
                height={900}
                src={image}
                alt="Bali Adventure"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Gradient Overlay */}
          <div className="hero-overlay absolute inset-0 z-20" />
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'w-8 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tour Information Card */}
        <div className="relative mt-0 z-40">
            <div className="info-card rounded-xl shadow-xl px-8 pb-2 pt-8 md:px-10 md:pb-4 items-center">
              {/* Title and Description */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-4 items-center">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 grid col-span-2 lg:col-span-2">
                  Bali Adventure Retreat
                </h1>

              {/* Tour Details Grid */}
                {/* Dates */}
                <div className="icon-wrapper">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#faf5ee] flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#c49c7a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dates</p>
                      <p className="font-semibold text-gray-800">March 15-22, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="icon-wrapper">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#faf5ee] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#c49c7a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-800">7 days, 6 nights</p>
                    </div>
                  </div>
                </div>

                {/* Group Size */}
                <div className="icon-wrapper">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#faf5ee] flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#c49c7a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Group Size</p>
                      <p className="font-semibold text-gray-800">5/8 travelers</p>
                      <p className="text-xs text-[#c49c7a]">(3 spots left)</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="icon-wrapper">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#faf5ee] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#c49c7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-bold text-2xl text-[#c49c7a]">$1,899</p>
                      <p className="text-xs text-gray-500">/ per person</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}