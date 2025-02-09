"use client";

import React from "react";
import { Logo } from "./Logo";
import { ContactInfo } from "./ContactInfo";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { TestimonialSection } from "./TestimonialSection";
import { DoctorsSection } from "./DoctorsSection";
import { NewsSection } from "./NewsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export default function AboutUsPage() {
  return (
    <main className="about-us">
      <header className="header">
        <div className="header-content">
          <Logo />
          <ContactInfo />
        </div>
      </header>

      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <TestimonialSection />
      <DoctorsSection />
      <NewsSection />
      <ContactSection />
      <Footer />

      <style jsx>{`
        .about-us {
          background: #fcfefe;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
        }

        .header {
          background: #fcfefe;
          align-self: stretch;
          display: flex;
          width: 100%;
          padding: 19px 70px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .header-content {
          display: flex;
          width: 100%;
          max-width: 992px;
          align-items: stretch;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            padding: 19px 20px;
          }

          .header-content {
            max-width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
