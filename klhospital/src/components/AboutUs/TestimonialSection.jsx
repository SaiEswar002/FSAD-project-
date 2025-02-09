export function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e25c41622b32ca0afdadfd5131bfdcd376e16ce2592489f6a6eeb2dc298e63a3?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
          alt="Quote"
          className="quote-icon"
          loading="lazy"
        />

        <p className="quote-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur Consequat
          faucibus porttitor enim et.
        </p>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eebb0a955f88753716f71d8b1c5e6cb2958b72d18bb08efec14061172af463fc?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
          alt="Divider"
          className="divider"
          loading="lazy"
        />
        <h3 className="author">John Doe</h3>
      </div>

      <style jsx>{`
        .testimonial {
          background-color: rgba(31, 43, 108, 0.6);
          align-self: stretch;
          display: flex;
          margin-top: 64px;
          width: 100%;
          padding: 64px 80px 112px;
          flex-direction: column;
          align-items: center;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 22px;
          color: #fcfefe;
          font-weight: 400;
          text-align: center;
          background: #1f2b6c;
        }

        .testimonial-content {
          display: flex;
          margin-bottom: -22px;
          width: 634px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
        }

        .quote-icon {
          aspect-ratio: 1.5;
          object-fit: contain;
          object-position: center;
          width: 45px;
          fill: #bfd2f8;
        }

        .quote-text {
          line-height: 31px;
          align-self: stretch;
          margin: 40px 0 20px;
        }

        .divider {
          aspect-ratio: 200;
          object-fit: contain;
          object-position: center;
          width: 222px;
          stroke-width: 1px;
          stroke: #bfd2f8;
          max-width: 100%;
        }

        .author {
          line-height: 1.4;
          margin: 19px 0 0;
          font-size: inherit;
          font-weight: inherit;
        }

        @media (max-width: 991px) {
          .testimonial {
            max-width: 100%;
            padding: 64px 20px 100px;
            margin-top: 40px;
          }

          .testimonial-content {
            margin-bottom: 10px;
          }

          .quote-text {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
