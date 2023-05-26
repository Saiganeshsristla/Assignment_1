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
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "heading",
  },
  "Saiganesh Learning React with Namaste React"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);
