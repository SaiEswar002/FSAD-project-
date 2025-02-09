export function DoctorsSection() {
  const doctors = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/04394c99a0d2e91e70a2df69c6d55dec5338591624bb7ed680e3325adea6c026?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
      name: "Doctor's Name",
      specialty: "Neurology",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5568f177eacf503b920a825369a0fb65ef636c4a5118e29d732212b55aa7210?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2d813d797e99277bec26cfeb9df6d66fffdc58e70c63ea6ab99aa9395c9484a3?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e1098dee3f52b395caf54c7dacee51f74d97c03e0158a5a67705f37400d27ab?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a2babe5b78d3fcc814ecc3ed30c9cac800dfa2e6fd79dd1be8d530d26a4da2cf?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
      name: "Doctor's Name",
      specialty: "Neurology",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5568f177eacf503b920a825369a0fb65ef636c4a5118e29d732212b55aa7210?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2d813d797e99277bec26cfeb9df6d66fffdc58e70c63ea6ab99aa9395c9484a3?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e1098dee3f52b395caf54c7dacee51f74d97c03e0158a5a67705f37400d27ab?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b33f71bdf398572dcf1c09532216e3bec0185ae7b3910aa1832572354bbecb53?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
      name: "Doctor's Name",
      specialty: "Neurology",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5568f177eacf503b920a825369a0fb65ef636c4a5118e29d732212b55aa7210?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2d813d797e99277bec26cfeb9df6d66fffdc58e70c63ea6ab99aa9395c9484a3?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e1098dee3f52b395caf54c7dacee51f74d97c03e0158a5a67705f37400d27ab?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
      ],
    },
  ];

  return (
    <section className="doctors">
      <h2 className="subtitle">Trusted Care</h2>
      <h3 className="title">Our Doctors</h3>

      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>

      <style jsx>{`
        .doctors {
          display: flex;
          flex-direction: column;
          align-items: center;
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

        .doctors-grid {
          display: flex;
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 991px) {
          .doctors {
            max-width: 100%;
            margin-top: 40px;
          }

          .doctors-grid {
            flex-direction: column;
          }

          .title {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
}

function DoctorCard({ image, name, specialty, socialIcons }) {
  return (
    <article className="doctor-card">
      <img src={image} alt={name} className="doctor-image" loading="lazy" />

      <div className="info-section">
        <h4 className="name">{name}</h4>
        <p className="specialty">{specialty}</p>
        <div className="social-icons">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="Social"
              className="social-icon"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <button className="view-profile">View Profile</button>

      <style jsx>{`
        .doctor-card {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .doctor-image {
          aspect-ratio: 0.91;
          object-fit: contain;
          object-position: center;
          width: 100%;
          border-radius: 5px 5px 0 0;
        }

        .info-section {
          background: #bfd2f8;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .name {
          color: #1f2b6c;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
        }

        .specialty {
          color: #1f2b6c;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
          margin: 8px 0 16px;
        }

        .social-icons {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          fill: #1f2b6c;
        }

        .view-profile {
          background: #1f2b6c;
          color: #bfd2f8;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          text-align: center;
          line-height: 1.4;
          padding: 12px 32px;
          border: none;
          border-radius: 0 0 5px 5px;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .info-section,
          .view-profile {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </article>
  );
}
