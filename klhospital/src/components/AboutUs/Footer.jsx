export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="brand-column">
            <h2 className="logo">
              <span className="logo-text">Med</span>
              <span className="logo-text">dical</span>
            </h2>
            <p className="tagline">
              Leading the Way in Medical
              <br />
              Execellence, Trusted Care.
            </p>
          </div>

          <div className="links-column">
            <h3 className="column-title">Important Links</h3>
            <nav className="footer-nav">
              <a href="#" className="footer-link">
                Appointment
              </a>
              <a href="#" className="footer-link">
                Doctors
              </a>
              <a href="#" className="footer-link">
                Services
              </a>
              <a href="#" className="footer-link">
                About Us
              </a>
            </nav>
          </div>

          <div className="contact-column">
            <h3 className="column-title">Contact Us</h3>
            <p className="contact-info">Call: (237) 681-812-255</p>
            <p className="contact-info">Email: fildineesoe@gmail.com</p>
            <p className="contact-info">Address: 0123 Some place</p>
            <p className="contact-info">Some country</p>
          </div>

          <div className="newsletter-column">
            <h3 className="column-title">Newsletter</h3>
            <div className="newsletter-input">
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5a858c1c7f55341c8967392990fc08fa464c409722ac54a6e710ec84aa2d32?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
                alt="Submit"
                className="submit-icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6310e60f0518fbb105e9e6211cc17589764d5094ac5a6ce6367dda33431bb0a?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
          alt="Divider"
          className="footer-divider"
          loading="lazy"
        />

        <div className="footer-bottom">
          <p className="copyright">
            © 2021 Hospital's name All Rights Reserved by PNTEC-LTD
          </p>
          <div className="social-icons">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5abbdcfeead6f2ac784af2e1ae384daa72c805be925980551233311112e6d3?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
              alt="Social"
              className="social-icon"
              loading="lazy"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba45ec44ad83a7369b453e900e86a67b40c39275802783224e4a88917f16663b?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
              alt="Social"
              className="social-icon"
              loading="lazy"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ad1c36fc6d8cb56ec76d681152f7c1cf9ad928f0ef1222ceea1ed6392f77f1?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
              alt="Social"
              className="social-icon"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1f2b6c;
          align-self: stretch;
          display: flex;
          margin-top: 64px;
          width: 100%;
          padding: 72px 80px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .footer-content {
          width: 100%;
          max-width: 992px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 27% 16% 26% 31%;
          gap: 20px;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .logo {
          font-family: Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 36px;
          font-weight: 400;
          text-transform: uppercase;
          margin: 0;
        }

        .logo-text {
          color: #bfd2f8;
        }

        .tagline {
          color: #fcfefe;
          font-size: 18px;
          line-height: 25px;
          margin: 18px 0 0;
        }

        .column-title {
          color: #fcfefe;
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 39px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .footer-link {
          color: #fcfefe;
          text-decoration: none;
          font-size: 16px;
        }

        .contact-info {
          color: #fcfefe;
          font-size: 16px;
          margin: 7px 0;
        }

        .newsletter-input {
          background: #bfd2f8;
          border-radius: 5px;
          display: flex;
          padding: 13px 14px;
          align-items: center;
          gap: 24px;
          margin-top: 39px;
        }

        .email-input {
          border: none;
          background: transparent;
          color: #1f2b6c;
          font-family: inherit;
          font-size: 16px;
          flex-grow: 1;
        }

        .submit-icon {
          aspect-ratio: 1;
          width: 23px;
          cursor: pointer;
        }

        .footer-divider {
          aspect-ratio: 1000;
          width: 100%;
          stroke-width: 1px;
          stroke: #bfd2f8;
          margin: 47px 0 43px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          color: #fcfefe;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          margin: 0;
        }

        .social-icons {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          aspect-ratio: 1;
          width: 24px;
          fill: #bfd2f8;
        }

        @media (max-width: 991px) {
          .footer {
            max-width: 100%;
            padding: 72px 20px;
            margin-top: 40px;
          }

          .footer-content {
            max-width: 100%;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-divider {
            margin: 40px 0;
          }

          .copyright {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
