export function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="info-item">
        <h2 className="info-title">Emergency</h2>
        <p className="info-text">(237) 681-812-255</p>
      </div>

      <div className="info-item">
        <h2 className="info-title">Work Hour</h2>
        <p className="info-text">09:00 - 20:00 Everyday</p>
      </div>

      <div className="info-item">
        <h2 className="info-title">Location</h2>
        <p className="info-text">0123 Some Place</p>
      </div>

      <style jsx>{`
        .contact-info {
          display: flex;
          align-items: start;
          gap: 40px 57px;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 500;
          flex-wrap: wrap;
        }

        .info-item {
          display: flex;
          flex-direction: column;
        }

        .info-title {
          color: #1f2b6c;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 500;
          margin: 0;
        }

        .info-text {
          color: #159eec;
          margin: 0;
        }

        @media (max-width: 991px) {
          .contact-info {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
