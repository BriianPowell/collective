import React, { Component } from "react";

import "../../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h1>Brian Powell</h1>
        <p className="title">Software Engineer</p>
        <p>California State Univeristy, Long Beach</p>
        <a href="#">LinkedIn</a>
        <a href="#">Github</a>
        <a href="#">Instagram</a>
      </div>
    );
  }
}

export default Profile;
