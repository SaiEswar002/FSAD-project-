export function HeroSection() {
  return (
    <section className="hero">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2529b21cbc376479d4cd24d257e0194be8b6b0b4848b4533504b50af7bb0f05?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
        alt="Hero"
        className="hero-image"
        loading="lazy"
      />

      <style jsx>{`
        .hero {
          width: 100%;
        }

        .hero-image {
          aspect-ratio: 5.46;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }

        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
