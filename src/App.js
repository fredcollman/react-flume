// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";
import Thumbnails from "./Thumbnails";
import WithSidebar from "./WithSidebar";

const App = () => (
  <WithSidebar
    left={
      <Thumbnails>
        <TitleSlide title="Title Slide" subtitle="by Sub Title" />
        <SimpleSlide title="Slide #2">
          You can put whatever content you want here
        </SimpleSlide>
      </Thumbnails>
    }
    right={
      <section>
        <TitleSlide title="Title Slide" subtitle="by Sub Title" />
      </section>
    }
  />
);

export default hot(App);
