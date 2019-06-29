// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";

const App = () => (
  <main>
    <TitleSlide title="Title Slide" subtitle="by Sub Title" />
  </main>
);

export default hot(App);
