import User from "./User";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="about-us">
        <h2>About Us</h2>
        <User
          props={{
            name: "Subham Mani",
            location: "Kolkata",
          }}
        />
      </div>
    );
  }
}

export default About;
