// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";
import Thumbnails from "./Thumbnails";
import ShowBorder from "./ShowBorder";

const App = () => (
  <main className="with-sidebar">
    <Thumbnails>
      <TitleSlide title="Title Slide" subtitle="by Sub Title" />
      <SimpleSlide title="Slide #2">
        You can put whatever content you want here
      </SimpleSlide>
    </Thumbnails>
    <section>
      <TitleSlide title="Title Slide" subtitle="by Sub Title" />
    </section>
  </main>
);

export default hot(App);
