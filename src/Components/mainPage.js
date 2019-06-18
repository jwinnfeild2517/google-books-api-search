import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class mainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <h1>Hello there!, My Name is Jenner Thomas</h1>
        <h5>This is "Title Search"</h5>
        <p>A book seach Engine powered my Google</p>

        <div>
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
