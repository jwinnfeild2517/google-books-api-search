import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class mainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <h1>
          Hello there! <br />
          My Name is Jenner Thomas
        </h1>
        <h2>This is "Title Search"</h2>
        <p>A book seach Engine powered my Google</p>

        <div className="buttonGroup">
          <button className="mainPageButton">
            <Link to="/search" className="nav-link">
              Get Searching
            </Link>
          </button>
          <button className="mainPageButton">
            <a href="https://jwinnfeild2517.herokuapp.com/">My Portfolio</a>
          </button>
        </div>
      </div>
    );
  }
}
