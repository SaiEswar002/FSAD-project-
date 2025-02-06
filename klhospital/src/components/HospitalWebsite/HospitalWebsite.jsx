import * as React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import MainVisual from './MainVisual.jsx';
import InfoSection from './InfoSection.jsx';
import AppointmentForm from './AppointmentForm.jsx';
import AboutSection from './AboutSection.jsx';
import ServicesSection from './ServicesSection.jsx';
Continuing from the previous code:

<FILE path="HospitalWebsite/HospitalWebsite.jsx">
import DoctorsSection from './DoctorsSection.jsx';
import NewsSection from './NewsSection.jsx';
import Footer from './Footer.jsx';

function HospitalWebsite() {
  return (
    <>
      <div className="hospital-website">
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
        .hospital-website {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--white, #fcfefe);
        }
      `}</style>
    </>
  );
}

export default HospitalWebsite;