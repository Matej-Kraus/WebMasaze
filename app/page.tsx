"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { BookingCta } from "@/components/booking-cta";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navbar onBookingOpen={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookingOpen={() => setIsBookingOpen(true)} />
        <Services />
        <About />
        <Benefits />
        <Gallery />
        <Contact />
        <BookingCta onBookingOpen={() => setIsBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
