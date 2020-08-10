import React, { Component } from "react";

import App from "../components/app";

class AppContainer extends Component {
  render() {
    return (
      <div>
        <App {...this.props} />
      </div>
    );
  }
}

export default AppContainer;
