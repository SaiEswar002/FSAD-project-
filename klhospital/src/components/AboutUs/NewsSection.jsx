export function NewsSection() {
  const newsItems = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5b99f9dccd914f913b0619cab435800b10ae913146c805772b595a587f24e70a?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb",
      date: "Monday 05, September 2021",
      author: "Author",
      title: "This Article's Title goes Here, but not too long.",
      likes: "68",
      comments: "86",
    },
    // Repeated for other news items
  ];

  return (
    <section className="news">
      <div className="news-content">
        <h2 className="subtitle">Better information, Better health</h2>
        <h3 className="title">News</h3>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .news {
          background-color: rgba(250, 253, 254, 1);
          align-self: stretch;
          display: flex;
          margin-top: 114px;
          width: 100%;
          padding: 64px 80px 114px;
          flex-direction: column;
          align-items: center;
        }

        .news-content {
          width: 100%;
          max-width: 992px;
          display: flex;
          flex-direction: column;
          align-items: center;
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

        .news-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 991px) {
          .news {
            max-width: 100%;
            padding: 64px 20px 100px;
            margin-top: 40px;
          }

          .news-content {
            max-width: 100%;
          }

          .news-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function NewsCard({ image, date, author, title, likes, comments }) {
  return (
    <article className="news-card">
      <div className="card-content">
        <img src={image} alt={title} className="news-image" loading="lazy" />

        <div className="text-content">
          <p className="meta">
            {date} | By {author}
          </p>
          <h4 className="title">{title}</h4>

          <div className="engagement">
            <span className="likes">{likes}</span>
            <div className="comments">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c44656e13a16fd40e4e3ecd67eb9bd9c18221167cb81ae970ee1d5c4d62dbe98?placeholderIfAbsent=true&apiKey=23f3255293f94a1f8c30c3d3b8e76bbb"
                alt="Comments"
                className="comments-icon"
                loading="lazy"
              />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .news-card {
          border-radius: 5px;
          background: #fcfefe;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
          padding-right: 32px;
        }

        .card-content {
          display: flex;
          gap: 20px;
        }

        .news-image {
          aspect-ratio: 1.04;
          object-fit: contain;
          object-position: center;
          width: 160px;
          border-radius: 5px 0 0 5px;
        }

        .text-content {
          flex: 1;
          padding: 20px 0;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .meta {
          color: #159eec;
          font-size: 14px;
          margin: 0;
        }

        .title {
          font-size: 18px;
          line-height: 25px;
          color: #212124;
          margin: 8px 0 24px;
        }

        .engagement {
          display: flex;
          gap: 10px;
          font-size: 14px;
          color: #212124;
        }

        .comments {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .comments-icon {
          aspect-ratio: 1.14;
          width: 16px;
        }

        @media (max-width: 991px) {
          .news-card {
            padding-right: 20px;
          }

          .title {
            margin-right: 10px;
          }
        }
      `}</style>
    </article>
  );
}
