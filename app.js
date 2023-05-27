/*
 ** Parcel does
 * creates a server
 * HMR -> Hot Module Reloading
 * File watcher algorithm - c++
 * Bundling
 * Minify
 * cleaning our code with removing console logs
 * dev and production build
 * super fast build algorithm
 * Image optimization
 * caching while development
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <div>
    <h1>Hi Everyone I am Saiganesh</h1>
    <h2>and I am learning react with namaste react.</h2>
  </div>
);

//component

const About = function () {
  return (
    <div>
      {heading}
      <p>I am a web developer trying to learn some cool stuff.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<About />);
