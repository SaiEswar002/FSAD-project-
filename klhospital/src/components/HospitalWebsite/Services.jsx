import * as React from "react";
import Header from "./home/Header";
import Navbar from "./home/Navbar";
import ServiceCard from "./home/ServiceCard";
import ServicesSection from "./home/ServicesSection";
import AppointmentForm from "./home/AppointmentForm";
import Footer from "./home/Footer";
import MedicalServices from "../services/MedicalServices";

function Services() {
  return (
    <>
      <div className="services-page">
        <Header />
        <Navbar />
        <div className="services-hero">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">Comprehensive Healthcare Solutions</p>
        </div>
        <MedicalServices />
        <ServicesSection />
        <section className="appointment-section">
          <h2 className="section-title">Book an Appointment</h2>
          <AppointmentForm />
        </section>
        <Footer />
      </div>
      <style jsx>{`
        .services-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--white, rgb(255, 250, 250));
          width: 100%;
          overflow-x: hidden;
        }
        .services-hero {
          background: var(--Primary, #1f2b6c);
          color: var(--white, #fcfefe);
          padding: 80px 20px;
          text-align: center;
        }
        .hero-title {
          font-size: 48px;
          font-family: Yeseva One, serif;
          margin-bottom: 16px;
        }
        .hero-subtitle {
          font-size: 18px;
          font-family: Work Sans, sans-serif;
          color: var(--Accent, #bfd2f8);
        }
        .appointment-section {
          padding: 60px 20px;
          background: var(--Secondary, #159eec);
        }
        .section-title {
          text-align: center;
          color: var(--white, #fcfefe);
          font-size: 32px;
          font-family: Yeseva One, serif;
          margin-bottom: 32px;
        }
        @media (max-width: 991px) {
          .hero-title {
            font-size: 36px;
          }
          .appointment-section {
            padding: 40px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Services;
