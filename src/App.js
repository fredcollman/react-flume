// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";
import Thumbnails from "./Thumbnails";

const App = () => (
  <Thumbnails>
    <TitleSlide title="Title Slide" subtitle="by Sub Title" />
    <SimpleSlide title="Slide #2">
      You can put whatever content you want here
    </SimpleSlide>
  </Thumbnails>
);

export default hot(App);
