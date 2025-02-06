import * as React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import MainVisual from "./MainVisual";
import InfoSection from "./InfoSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import AppointmentForm from "./AppointmentForm";
import DoctorsSection from "./DoctorsSection";
import NewsSection from "./NewsSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Navbar />
        <MainVisual />
        <InfoSection />
        <AboutSection />
        <ServicesSection />
        <AppointmentForm />
        <DoctorsSection />
        <NewsSection />
        <Footer />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--white, #fcfefe);
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}

export default Home;
