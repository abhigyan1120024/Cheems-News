import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-3 mx-5">
          <img
            src={
              !imageURL
                ? "https://drive.google.com/uc?id=1ugtvbCVzm93NxbX0fsbmBXTfDGRWRAUl"
                : imageURL
            }
            alt="Not Found"
            className="card-img-top"
          />
          <div className="card-body">
            <div
              style={{
                display: "flex",
                marginBottom: "0.2rem",
                marginTop: "-0.6rem",
              }}
            >
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsURL}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toLocaleString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
