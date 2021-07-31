import React, { Component } from "react";
import Compiler from "./Components/Compiler/Compiler";
import TopNavigation from "./topnav.js";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <TopNavigation />
        </div>
        <div>
          <Compiler />
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}
