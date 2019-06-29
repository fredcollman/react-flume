// @flow
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";
import Thumbnails from "./Thumbnails";
import WithSidebar from "./WithSidebar";

const slides = [
  <TitleSlide title="Title Slide" subtitle="by Sub Title" />,
  <SimpleSlide title="Slide #2">
    You can put whatever content you want here
  </SimpleSlide>,
];

const App = () => {
  const [selected, setSelected] = useState(0);
  return (
    <WithSidebar
      left={<Thumbnails onSwitch={setSelected}>{slides}</Thumbnails>}
      right={<main>{slides[selected]}</main>}
    />
  );
};

export default hot(App);
