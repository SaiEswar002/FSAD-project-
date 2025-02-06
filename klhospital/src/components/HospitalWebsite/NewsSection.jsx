import * as React from "react";
import NewsArticle from "./NewsArticle.jsx";

function NewsSection() {
  const news = [
    {
      date: "Monday 05, September 2021 | By Author",
      title: "This Article’s Title goes Here, but not too long.",
      likes: 68,
      comments: 86,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/5b99f9dccd914f913b0619cab435800b10ae913146c805772b595a587f24e70a?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      alt: "Article thumbnail",
    },
    // Add more news objects here
  ];

  return (
    <>
      <section className="news-section">
        <h2 className="section-title">News</h2>
        <h3 className="section-subtitle">Better information, Better health</h3>
        <div className="news-grid">
          {news.map((article, index) => (
            <NewsArticle key={index} {...article} />
          ))}
        </div>
      </section>
      <style jsx>{`
        .news-section {
          margin-top: 114px;
          text-align: center;
          background-color: rgba(250, 253, 254, 1);
          padding: 64px 80px 114px;
        }
        @media (max-width: 991px) {
          .news-section {
            padding: 0 20px 100px;
            margin-top: 40px;
          }
        }
        .section-title {
          color: var(--Secondary, #159eec);
          letter-spacing: 2.88px;
          text-transform: uppercase;
          font: 700 18px Work Sans, sans-serif;
        }
        @media (max-width: 991px) {
          .section-title {
            margin-top: 40px;
          }
        }
        .section-subtitle {
          color: var(--Primary, #1f2b6c);
          font: 400 32px Yeseva One, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 8px;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .news-grid {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default NewsSection;
