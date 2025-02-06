import * as React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <a href="#" className="nav-link highlight">
            Home
          </a>
          <a href="#" className="nav-link">
            About us
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Doctors
          </a>
          <a href="#" className="nav-link">
            News
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
        <button className="appointment-btn">Appointment</button>
      </nav>
      <style jsx>{`
        .navbar {
          background: var(--Primary, #1f2b6c);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 186px 18px;
          color: var(--white, #fcfefe);
          font-family: Work Sans, sans-serif;
        }
        @media (max-width: 991px) {
          .navbar {
            padding: 0 20px;
          }
        }
        .nav-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          align-items: start;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .nav-links {
            width: 100%;
          }
        }
        .nav-link {
          color: var(--white, #fcfefe);
          font-size: 18px;
          font-weight: 400;
        }
        .highlight {
          color: var(--Accent, #bfd2f8);
          font-weight: 600;
        }
        .appointment-btn {
          border-radius: 50px;
          background: var(--Accent, #bfd2f8);
          color: var(--Primary, #1f2b6c);
          font-weight: 500;
          padding: 13px 35px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .appointment-btn {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
