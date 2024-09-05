import React, { Component } from "react";
import imagenotfound from "../assets/imagenotfound.png";
import { Link } from "react-router-dom";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, auther, date ,source} = this.props;
    return (
      <div className="card" style={{ width: "20rem" }}>
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>       
           <span className=" badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>
          {source}
        </span>
        </div>
        <img
          src={imageUrl ? imageUrl : imagenotfound}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {auther ? auther : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <Link
            to={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Go To News
          </Link>
        </div>
      </div>
    );
  }
}
