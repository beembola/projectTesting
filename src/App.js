import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import WalkThrough from "./Pages/WalkThrough";

// import "./styles/App.css";
// import data from "./models/data.json";

function App() {


return (
  <BrowserRouter>
    <Route
      exact
      path="/"
      render={() => (
        <>
          <Header />
          <About />
          <Pomodoro />
          <Todos />
          <Footer />
        </>
      )}
    />
    <Route
      exact
      path="/Login"
      render={() => (
        <>
          <Header />
        </>
      )}
    />

    <Route
      exact
      path="/walkthThrough"
      render={() => (
        <>
          <WalkThrough  />
        </>
      )}
    />
    <Route
      exact
      path="Features"
      render={() => (
        <>
          <Features  />
        </>
      )}
    />
  </BrowserRouter>
);
      }
export default App;
