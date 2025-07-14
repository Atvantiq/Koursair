"use client";

import Navbar from "@/components/Navbar";
import TripDetailHero from "@/components/trip_detail/trip_hero";
import TripOverviewBooking from "@/components/trip_detail/trip_overview";
//import { useParams } from "next/navigation";
import React from "react";

export default function TripDetailsPage() {
  //const { id } = useParams();

  return (
    <div className="min-h-screen max-w-screen ">
        <main>
            <Navbar />
          <TripDetailHero />
          <TripOverviewBooking />
        
     </main>
     </div>
  );
}
