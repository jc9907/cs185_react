import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import About from "./pages/About";
import ResponsiveNavigation from "./Components/ResponsiveNavigation";
import logo from "./logo.svg";
import ScrollUpButton from "react-scroll-up-button";
function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/Home",
      icon: "ion-ios-home",
    },
    {
      text: "Images",
      path: "/Images",
      icon: "ion-ios-images",
    },
    {
      text: "Videos",
      path: "/Videos",
      icon: "ion-ios-videocam",
    },
    {
      text: "About Me",
      path: "/About",
      icon: "ion-ios-home",
    },
  ];
  return (
    <div className="App">
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={50}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{}}
        ToggledStyle={{}}
      />
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        <Home path="/Home" />
        <Images path="/Images" />
        <Videos path="/Videos" />
        <About path="/About" />
      </Router>
    </div>
  );
}
export default App;
