// @flow
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import TitleSlide from "./TitleSlide";
import SimpleSlide from "./SimpleSlide";
import Thumbnails from "./Thumbnails";
import WithSidebar from "./WithSidebar";

const slides = [
  {
    slide: <TitleSlide title="Title Slide" subtitle="by Sub Title" />,
    notes: "Welcome to the presentation",
  },
  {
    slide: (
      <SimpleSlide title="Slide #2">
        You can put whatever content you want here
      </SimpleSlide>
    ),
    notes: "I am demoing some content",
  },
  {
    slide: (
      <SimpleSlide title="With Some Bullets">
        <ul>
          <li>Consectetur aspernatur numquam dicta magni.</li>
          <li>Dolor quos reprehenderit quia eveniet</li>
          <li>Ipsum nisi at architecto debitis?</li>
        </ul>
      </SimpleSlide>
    ),
    notes: "Max 5 bullets per slide",
  },
];

const App = () => {
  const [selected, setSelected] = useState(0);
  return (
    <WithSidebar
      left={
        <Thumbnails onSwitch={setSelected}>
          {slides.map(slide => slide.slide)}
        </Thumbnails>
      }
      right={
        <main className="bg-subtle padding-m">
          <div className="current-slide-container stack">
            <section className="current-slide">
              {slides[selected].slide}
            </section>
            <aside>{slides[selected].notes}</aside>
          </div>
        </main>
      }
    />
  );
};

export default hot(App);
