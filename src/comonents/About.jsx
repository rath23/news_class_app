import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.props.setProgress(100);
  }
  render() {
    return (
        
      <div
        className="container my-4"
      >
        <h4 id="scrollspyHeading1">About Us</h4>
        <p>
          Our web application is your one-stop source for staying updated with
          the latest news. It fetches top headlines from trusted news sources,
          ensuring you have access to breaking stories as they happen. Whether
          you're interested in business, entertainment, health, science, sports,
          or technology, our platform categorizes news for you, making it easier
          to stay informed about what matters most to you.
          <br />
          With a seamless user experience, you can quickly browse the latest
          headlines or dive into a specific category that interests you. Our
          platform is designed to be fast, responsive, and accessible on all
          devices, so you never miss out on the news—whether you're at home or
          on the go. Stay connected to the world and up-to-date with the most
          relevant news, all in one place.
        </p>
      </div>
    );
  }
}
