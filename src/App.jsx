import "./App.css";
import Navbar from "./comonents/Nevbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from 'react'
import About from "./comonents/About.jsx";
import News from "./comonents/News.jsx";

export default class App extends Component {
 
  apikey = import.meta.env.VITE_NEWS_API;

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <LoadingBar
          height={3}
          color="#f11946"
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={12} category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News apikey={this.apikey} setProgress={this.setProgress} key="business" pageSize={12} category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News apikey={this.apikey} setProgress={this.setProgress} key="" pageSize={12} category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<News apikey={this.apikey} setProgress={this.setProgress} key="health" pageSize={12} category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News apikey={this.apikey} setProgress={this.setProgress} key="science" pageSize={12} category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News apikey={this.apikey} setProgress={this.setProgress} key="sports" pageSize={12} category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News apikey={this.apikey} setProgress={this.setProgress} key="technology" pageSize={12} category="technology" />
            }
          />
           <Route
            exact
            path="/about"
            element={
              <About setProgress={this.setProgress} key="about"/>
            }
          />
        </Routes>
      </Router>
    );
  }
}
// key k bina compunent auto ubdate mhi hogy refresh krna pdyga
