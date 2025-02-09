export function WelcomeSection() {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <div className="image-column">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b019fae96efe791c1e88886e45b46fe8499ddab0a4fdfdaaddb064ce3b817f09?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
            alt="Welcome"
            className="welcome-image"
            loading="lazy"
          />
        </div>

        <div className="text-column">
          <span className="subtitle">Welcome to Hospital name</span>
          <h2 className="title">
            Best Care for Your
            <br />
            Good Health
          </h2>

          <div className="features">
            <div className="features-column">
              <Feature text="A Passion for Healing" />
              <Feature text="All our best" />
              <Feature text="Always Caring" />
            </div>
            <div className="features-column">
              <Feature text="5-Star Care" />
              <Feature text="Believe in Us" />
              <Feature text="A Legacy of Excellence" />
            </div>
          </div>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>
      </div>

      <style jsx>{`
        .welcome {
          margin-top: 64px;
          width: 100%;
          max-width: 992px;
        }

        .welcome-content {
          gap: 20px;
          display: flex;
        }

        .image-column {
          width: 42%;
        }

        .welcome-image {
          aspect-ratio: 0.8;
          object-fit: contain;
          object-position: center;
          width: 100%;
          flex-grow: 1;
        }

        .text-column {
          width: 58%;
          display: flex;
          flex-direction: column;
          align-items: start;
        }

        .subtitle {
          color: #159eec;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
        }

        .title {
          color: #1f2b6c;
          font-family: Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 48px;
          font-weight: 400;
          margin: 8px 0 24px;
        }

        .features {
          display: flex;
          gap: 20px;
          width: 100%;
          margin-bottom: 32px;
        }

        .features-column {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .description {
          color: #000;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          margin: 16px 0 0;
        }

        @media (max-width: 991px) {
          .welcome {
            max-width: 100%;
            margin-top: 40px;
          }

          .welcome-content {
            flex-direction: column;
          }

          .image-column,
          .text-column {
            width: 100%;
          }

          .welcome-image {
            margin-top: 20px;
          }

          .title {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="feature">
      <div className="feature-dot" />
      <span className="feature-text">{text}</span>

      <style jsx>{`
        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .feature-dot {
          border-radius: 50px;
          background: #159eec;
          width: 16px;
          height: 16px;
          margin: auto 0;
        }

        .feature-text {
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          color: #000;
          font-weight: 400;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
