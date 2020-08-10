import React, { Component } from "react";

import AppNav from "../appNav";
import Profile from "../profile";
import Footer from "../footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppNav />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default App;
