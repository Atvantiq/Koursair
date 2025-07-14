"use client";

import React, { useState } from 'react';
import { Check, X, Calendar, MapPin,} from 'lucide-react';

export default function TripOverviewBooking() {
  const [bookingData, setBookingData] = useState({
    whereTo: '',
    when: '',
    type: '',
    date: '',
    ticket: ''
  });

  const includedItems = [
    { included: true, text: "Pick and Drop Services" },
    { included: true, text: "1 Meal Per Day" },
    { included: true, text: "Cruise Dinner & Music Event" },
    { included: true, text: "Visit 7 Best Places in the City With Group" }
  ];

  const excludedItems = [
    { included: false, text: "Additional Services" },
    { included: false, text: "Insurance" },
    { included: false, text: "Food & Drinks" },
    { included: false, text: "Tickets" }
  ];

  const handleBooking = () => {
    console.log('Booking data:', bookingData);
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .booking-card {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b5d52' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.7rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
        
        .check-icon {
          color: #22c55e;
        }
        
        .x-icon {
          color: #ef4444;
        }
      `}</style>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content - Overview and Included/Excluded */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Lorem ipsum available isn but the majority have suffered alteratin in some or form injected 
                    simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed 
                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum is simply 
                    free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed 
                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis 
                    enim var sed efficitur turpis gilla sed sit amet finibus eros.
                  </p>
                </div>
              </div>

              {/* Included/Exclude Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Included/Exclude</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {/* Included Items */}
                  <div className="space-y-3">
                    {includedItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 check-icon flex-shrink-0" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Excluded Items */}
                  <div className="space-y-3">
                    {excludedItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <X className="w-5 h-5 x-icon flex-shrink-0" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="booking-card bg-white rounded-xl p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Tours</h3>
                
                <div className="space-y-4">
                  {/* Where to */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where to
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter destination"
                        value={bookingData.whereTo}
                        onChange={(e) => setBookingData({...bookingData, whereTo: e.target.value})}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] focus:border-transparent"
                      />
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* When */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={bookingData.when}
                        onChange={(e) => setBookingData({...bookingData, when: e.target.value})}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] focus:border-transparent"
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type
                    </label>
                    <select
                      value={bookingData.type}
                      onChange={(e) => setBookingData({...bookingData, type: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select type</option>
                      <option value="adventure">Adventure</option>
                      <option value="cultural">Cultural</option>
                      <option value="relaxation">Relaxation</option>
                      <option value="family">Family</option>
                    </select>
                  </div>

                  {/* Select date */}
                  <div>
                    <select
                      value={bookingData.date}
                      onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select date</option>
                      <option value="march-15">March 15, 2025</option>
                      <option value="march-22">March 22, 2025</option>
                      <option value="april-5">April 5, 2025</option>
                      <option value="april-12">April 12, 2025</option>
                    </select>
                  </div>

                  {/* Choose Ticket */}
                  <div>
                    <select
                      value={bookingData.ticket}
                      onChange={(e) => setBookingData({...bookingData, ticket: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Choose Ticket</option>
                      <option value="standard">Standard - $1,899</option>
                      <option value="premium">Premium - $2,499</option>
                      <option value="vip">VIP - $3,299</option>
                    </select>
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={handleBooking}
                    className="w-full py-4 bg-[#ff5757] text-white font-bold text-lg rounded-lg hover:bg-[#e04747] transition-colors duration-300 mt-6"
                  >
                    BOOK NOW
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