import React from "react";
import ReactDOM from "react-dom/client";

// Switch projects here
import Project from "./FAKE_IMAGE_EDITOR/FIE.jsx";
// import Project from "./REACT_HOOKS/TASK_MANAGER/Main";
// import Project from "./REACT_HOOKS/FAKE_IMAGE_EDITOR/FIE";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>
);