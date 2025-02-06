import * as React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          KL-<span className="highlight">hOSPITALS</span>
        </div>
        <div className="contact-info">
          <div className="contact-block">
            <h2 className="contact-title">Emergency</h2>
            <p className="contact-detail">(237) 681-812-255</p>
          </div>
          <div className="contact-block">
            <h2 className="contact-title">Work Hour</h2>
            <p className="contact-detail">09:00 - 20:00 Everyday</p>
          </div>
          <div className="contact-block">
            <h2 className="contact-title">Location</h2>
            <p className="contact-detail">0123 Some Place</p>
          </div>
        </div>
      </header>
      <style jsx>{`
        .header {
          background: var(--white, #fcfefe);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 20px; /* Adjusted padding for better fit */
          width: 100%;
        }
        @media (max-width: 991px) {
          .header {
            padding: 0 20px;
          }
        }
        .logo {
          color: var(--Secondary, #159eec);
          text-transform: uppercase;
          font: 400 36px Yeseva One, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .highlight {
          color: rgba(21, 158, 236, 1);
        }
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 40px 58px;
          font: 500 16px Work Sans, sans-serif;
          justify-content: center;
          align-items: start;
        }
        @media (max-width: 991px) {
          .contact-info {
            width: 100%;
          }
        }
        .contact-block {
          display: flex;
          flex-direction: column;
        }
        .contact-title {
          color: var(--Primary, #1f2b6c);
          text-transform: uppercase;
        }
        .contact-detail {
          color: var(--Secondary, #159eec);
        }
      `}</style>
    </>
  );
}

export default Header;
