"use client";

import React from "react";
// import { Logo } from "./Logo";
// import { ContactInfo } from "./ContactInfo";
// import { Navigation } from "./Navigation";
import { ServiceCard } from "./ServiceCard";
// import { ContactSection } from "./ContactSection";
// import { Footer } from "./Footer";

export default function MedicalServices() {
  return (
    <main className="services">
      <header className="header">
        <div className="header-content">
          {/* <Logo /> */}
          {/* <ContactInfo /> */}
        </div>
        {/* <Navigation /> */}
      </header>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/6fc3c4deab101d8a666e9d7177f1fa6fd431c13ac667959fcb15be31b33f95ac?placeholderIfAbsent=true"
        className="hero-image"
        alt="Medical services hero"
      />

      <section className="service-grid">
        <div className="service-row">
          {[
            {
              title: "NEUROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/1c227c1b2518634c814b8451341fa58c18be2d11742d6ba22b4db1bf7d358a23?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "UROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/ee39a520e9a6d9e564e621e9c0d0fc41adb392c70a3fb989f39ad134d97917fe?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "CARDIOLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/ee39a520e9a6d9e564e621e9c0d0fc41adb392c70a3fb989f39ad134d97917fe?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        <div className="service-row">
          {[
            {
              title: "GASTROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/efa674753a43c2943fc0e80a747c73f2a248f131691ea1cc701aebce105a299f?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DERMATOLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/efa674753a43c2943fc0e80a747c73f2a248f131691ea1cc701aebce105a299f?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DENTISTRY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/efa674753a43c2943fc0e80a747c73f2a248f131691ea1cc701aebce105a299f?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        <div className="service-row">
          {[
            {
              title: "NEUROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/e3b91bd8eacb2e93a206d84b2b9d14fa2f96729de1bb560416d319435bc3b8bf?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "UROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "CARDIOLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        <div className="service-row">
          {[
            {
              title: "GASTROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DERMATOLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DENTISTRY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

      {/* <ContactSection /> */}
      {/* <Footer /> */}

      <style jsx>{`
        .services {
          background: #fcfefe;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
        }

        .header {
          width: 100%;
          background: #fcfefe;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 19px 70px;
          max-width: 992px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-image {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .service-grid {
          max-width: 961px;
          width: 100%;
          margin: 46px auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-row {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .header-content {
            padding: 19px 20px;
          }

          .service-row {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
