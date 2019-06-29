// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";

const App = () => (
  <main className="stack stack-m">
    <TitleSlide title="Title Slide" subtitle="by Sub Title" />
    <SimpleSlide title="Slide #2">
      You can put whatever content you want here
    </SimpleSlide>
  </main>
);

export default hot(App);
