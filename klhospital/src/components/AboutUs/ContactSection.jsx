export function ContactSection() {
  const contactInfo = [
    {
      title: "Emergency",
      items: ["(237) 681-812-255", "(237) 666-331-894"],
    },
    {
      title: "Location",
      items: ["0123 Some place", "9876 Some country"],
    },
    {
      title: "Email",
      items: ["fildineeesoe@gmil.com", "myebstudios@gmail.com"],
    },
    {
      title: "Working Hours",
      items: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
    },
  ];

  return (
    <section className="contact">
      <h2 className="subtitle">Get in touch</h2>
      <h3 className="title">Contact</h3>

      <div className="contact-grid">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-card">
            <h4 className="card-title">{info.title}</h4>
            {info.items.map((item, i) => (
              <p key={i} className="card-text">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .contact {
          width: 100%;
          max-width: 992px;
          margin-top: 64px;
        }

        .subtitle {
          color: #159eec;
          text-align: center;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
          margin: 0;
        }

        .title {
          color: #1f2b6c;
          text-align: center;
          font-family: Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 32px;
          font-weight: 400;
          margin: 8px 0 64px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .contact-card {
          border-radius: 5px;
          background: #bfd2f8;
          padding: 105px 30px 50px;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          color: #1f2b6c;
        }

        .contact-card:nth-child(2) {
          background: #1f2b6c;
          color: #bfd2f8;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        .card-text {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          margin: 5px 0 0;
        }

        @media (max-width: 991px) {
          .contact {
            max-width: 100%;
            margin-top: 40px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 100px 20px 50px;
          }
        }
      `}</style>
    </section>
  );
}
