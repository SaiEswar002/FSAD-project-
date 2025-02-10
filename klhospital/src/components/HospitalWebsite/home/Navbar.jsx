import * as React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
            >
            About us
          </NavLink>

          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
          >
            Services
          </NavLink>
          <NavLink 
            to="#" 
            className="nav-link"
            onClick={(e) => e.preventDefault()}
          >
            Doctors
          </NavLink>
          <NavLink 
            to="#" 
            className="nav-link"
            onClick={(e) => e.preventDefault()}
          >
            News
          </NavLink>
          <NavLink 
            to="#" 
            className="nav-link"
            onClick={(e) => e.preventDefault()}
          >
            Contact
          </NavLink>
        </div>
        <button className="appointment-btn">Appointment</button>
      </nav>
      <style jsx>{`
        .navbar {
          background: var(--Primary, #1f2b6c);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
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
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--Accent, #bfd2f8);
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
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .appointment-btn:hover {
          background: var(--Secondary, #159eec);
          color: var(--white, #fcfefe);
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
