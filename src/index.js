import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./homePage";
import PageTwo from "./page2";
import PageThree from "./page3";
import PageFour from "./page4";
import Navigation from "./navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename="/">
    <Routes>
      <Route index element={<Navigation />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path="/pagefour" element={<PageFour />} />
      {/* </Route> */}
    </Routes>
  </HashRouter>
);
