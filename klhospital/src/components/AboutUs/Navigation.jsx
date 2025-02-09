export function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link active">
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

      <div className="appointment-wrapper">
        <button className="appointment-btn">Appointment</button>
      </div>

      <style jsx>{`
        .navbar {
          justify-content: center;
          align-items: center;
          background: #1f2b6c;
          align-self: stretch;
          display: flex;
          width: 100%;
          padding: 17px 186px 18px;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          flex-wrap: wrap;
        }

        .nav-links {
          display: flex;
          min-width: 240px;
          margin: auto 0;
          align-items: start;
          gap: 20px;
          font-size: 18px;
          color: #fcfefe;
          font-weight: 400;
          justify-content: start;
          flex-wrap: wrap;
        }

        .nav-link {
          color: #fcfefe;
          text-decoration: none;
        }

        .nav-link.active {
          color: #bfd2f8;
          font-weight: 600;
        }

        .appointment-wrapper {
          display: flex;
          margin: auto 0;
          padding: 0 50px;
          flex-direction: column;
          align-items: start;
          font-size: 16px;
          color: #1f2b6c;
          font-weight: 500;
          white-space: nowrap;
          flex-grow: 1;
          flex-shrink: 1;
          width: 178px;
        }

        .appointment-btn {
          border-radius: 50px;
          background: #bfd2f8;
          padding: 13px 35px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
        }

        @media (max-width: 991px) {
          .navbar {
            max-width: 100%;
            padding: 17px 20px 18px;
          }

          .nav-links {
            max-width: 100%;
          }

          .appointment-wrapper {
            white-space: initial;
          }

          .appointment-btn {
            padding: 13px 20px;
          }
        }
      `}</style>
    </nav>
  );
}
